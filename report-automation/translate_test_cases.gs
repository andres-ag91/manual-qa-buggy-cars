
/**
 * Función principal para traducir y duplicar TODAS las hojas
 */
function traducirHojaAInglesFinal() {

  var ssOriginal = SpreadsheetApp.getActiveSpreadsheet();

  // Crear copia del archivo
  var ssCopia = ssOriginal.copy(
    "TRANSLATED - " + ssOriginal.getName()
  );

  // Obtener todas las hojas
  var hojas = ssCopia.getSheets();

  // Recorrer todas las hojas
  for (var h = 0; h < hojas.length; h++) {

    var hoja = hojas[h];

    Logger.log("Procesando hoja: " + hoja.getName());

    // Obtener el rango realmente utilizado
    var rango = hoja.getDataRange();

    var valores = rango.getValues();
    var fondos = rango.getBackgrounds();
    var coloresFuente = rango.getFontColors();

    // Recorrer filas
    for (var i = 0; i < valores.length; i++) {

      // Recorrer columnas
      for (var j = 0; j < valores[i].length; j++) {

        var celda = valores[i][j];

        // Traducir solamente textos
        if (
          typeof celda === "string" &&
          celda.trim() !== ""
        ) {

          // Estados especiales
          var textoMayuscula = celda.trim().toUpperCase();

          if (textoMayuscula === "FALLO") {

            valores[i][j] = "FAIL";
            fondos[i][j] = "#FF0000";
            coloresFuente[i][j] = "#FFFFFF";

          } else if (textoMayuscula === "OK") {

            valores[i][j] = "OK";
            fondos[i][j] = "#00FF00";
            coloresFuente[i][j] = "#000000";

          } else if (textoMayuscula === "PENDIENTE") {

            valores[i][j] = "PENDING";

          } else {

            // Traducir texto normal
            try {

              valores[i][j] = LanguageApp.translate(
                celda,
                "es",
                "en"
              );

              Utilities.sleep(100);

            } catch (e) {

              Logger.log(
                "Error en hoja '" +
                hoja.getName() +
                "', fila " +
                (i + 1) +
                ", columna " +
                (j + 1) +
                ": " +
                e.message
              );
            }
          }
        }
      }
    }

    // Aplicar traducción
    rango.setValues(valores);

    // Mantener formato
    rango.setBackgrounds(fondos);
    rango.setFontColors(coloresFuente);

    Logger.log(
      "Hoja terminada: " + hoja.getName()
    );
  }

  // Abrir automáticamente la copia
  var urlCopia = ssCopia.getUrl();

  var html = HtmlService.createHtmlOutput(
    '<script>' +
    'window.open("' +
    urlCopia +
    '", "_blank");' +
    'google.script.host.close();' +
    '</script>'
  )
  .setWidth(100)
  .setHeight(100);

  SpreadsheetApp.getUi().showModalDialog(
    html,
    "Redirigiendo..."
  );
}


function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('⚙️ MIS REPORTES')
    .addItem('Generar Reporte (ES)', 'generarReporteBugsFormato')
    .addItem('Generate Report (EN)', 'generarReporteBugsFormatoIngles')
    .addSeparator()
    .addItem('Traducir a inglés (Duplicar Hoja)', 'traducirHojaAInglesFinal')
    .addToUi();
}
