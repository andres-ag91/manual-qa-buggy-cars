// ============================================================
// BUGGY CARS RATING - GENERADOR DE BUG REPORTS
// ============================================================

// --- VERSIÓN EN ESPAÑOL ---
function generarReporteBugsFormato() {
  generarReporte('ES');
}

// --- VERSIÓN EN INGLÉS ---
function generarReporteBugsFormatoIngles() {
  generarReporte('EN');
}


// ============================================================
// LÓGICA CENTRALIZADA
// ============================================================

function generarReporte(idioma) {

  var hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var datos = hoja.getDataRange().getValues();

  // ------------------------------------------------------------
  // FECHA
  // ------------------------------------------------------------

  var fechaHoy = new Date();
  var dia = fechaHoy.getDate();
  var anio = fechaHoy.getFullYear();

  var mesesES = [
    "enero", "febrero", "marzo", "abril",
    "mayo", "junio", "julio", "agosto",
    "septiembre", "octubre", "noviembre", "diciembre"
  ];

  var mesesEN = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  var mesNombre = (idioma === 'ES')
    ? mesesES[fechaHoy.getMonth()]
    : mesesEN[fechaHoy.getMonth()];

  var fechaFormateada = (idioma === 'ES')
    ? (dia + " de " + mesNombre + " de " + anio)
    : (mesNombre + " " + dia + ", " + anio);


  // ------------------------------------------------------------
  // TEXTOS
  // ------------------------------------------------------------

  var etiquetas = {

    'ES': {

      tituloDoc: 'REPORTE DE ERROR',
      tituloPlantilla: 'PLANTILLA DE REPORTE DE ERROR',

      numBug: 'NÚMERO DE BUG',
      tester: 'NOMBRE DEL TESTER',
      tituloFila: 'TÍTULO',

      fecha: 'DÍA DEL REPORTE',
      so: 'SISTEMA OPERATIVO',
      navegador: 'NAVEGADOR',

      prioridad: 'PRIORIDAD',
      asignado: 'ASIGNADO A:',

      desc: 'DESCRIPCIÓN',
      descTxt: 'Descripción detallada del bug encontrado.',

      datosEntrada: 'DATOS DE ENTRADA',
      pasos: 'PASOS PARA LA REPRODUCCIÓN',

      exp: 'RESULTADO ESPERADO',
      act: 'RESULTADO ACTUAL',

      img: 'IMPRESIÓN DE PANTALLA / VIDEO Y OTROS',

      dev: 'Equipo de desarrollo',
      prioridadVal: 'Alta',

      msgExito: '¡Reporte generado con éxito!',
      btn: 'HACER CLIC PARA ABRIR EL REPORTE'
    },


    'EN': {

      tituloDoc: 'BUG REPORT',
      tituloPlantilla: 'BUG REPORT TEMPLATE',

      numBug: 'BUG NUMBER',
      tester: 'TESTER NAME',
      tituloFila: 'TITLE',

      fecha: 'REPORT DATE',
      so: 'OPERATING SYSTEM',
      navegador: 'BROWSER',

      prioridad: 'PRIORITY',
      asignado: 'ASSIGNED TO:',

      desc: 'DESCRIPTION',
      descTxt: 'Detailed description of the bug found.',

      datosEntrada: 'INPUT DATA',
      pasos: 'STEPS TO REPRODUCE',

      exp: 'EXPECTED RESULT',
      act: 'ACTUAL RESULT',

      img: 'SCREENSHOT / VIDEO AND OTHERS',

      dev: 'Development Team',
      prioridadVal: 'High',

      msgExito: 'Bug report generated successfully!',
      btn: 'CLICK HERE TO OPEN THE REPORT'
    }
  };


  var lang = etiquetas[idioma];


  // ------------------------------------------------------------
  // CREAR DOCUMENTO
  // ------------------------------------------------------------

  var doc = DocumentApp.create(lang.tituloDoc);
  var body = doc.getBody();


  // ------------------------------------------------------------
  // ESTILOS
  // ------------------------------------------------------------

  var estiloTituloPrincipal = {

    FONT_FAMILY: 'Arial',
    FONT_SIZE: 18,
    BOLD: true,
    SPACING_AFTER: 10
  };


  var estiloSubtitulos = {

    FONT_FAMILY: 'Arial',
    FONT_SIZE: 10,
    BOLD: true
  };


  var estiloDatosCuerpo = {

    FONT_FAMILY: 'Arial',
    FONT_SIZE: 10,
    BOLD: false,
    FOREGROUND_COLOR: '#000000',
    SPACING_AFTER: 10
  };


  var estiloCeldaLabel = {

    FONT_FAMILY: 'Arial',
    FONT_SIZE: 10,
    BOLD: true,
    FOREGROUND_COLOR: '#000000'
  };


  var estiloCeldaValor = {

    FONT_FAMILY: 'Arial',
    FONT_SIZE: 10,
    BOLD: false,
    FOREGROUND_COLOR: '#000000'
  };


  // ------------------------------------------------------------
  // CONTADOR DE BUGS
  // ------------------------------------------------------------

  var contador = 1;


  // ------------------------------------------------------------
  // RECORRER LAS FILAS
  // ------------------------------------------------------------

  for (var i = 3; i < datos.length; i++) {

    var fila = datos[i];


    // Ignorar filas sin número de caso

    if (!fila[0] || fila[0] === "" || isNaN(fila[0])) {
      continue;
    }


    // Solo generar reportes para casos FALLIDOS

    if (fila[9] !== "FALLO" && fila[9] !== "FAIL") {
      continue;
    }


    // ----------------------------------------------------------
    // ID DEL BUG
    // ----------------------------------------------------------

    var idBug =
      "BCR-" +
      (contador < 10 ? "0" + contador : contador);

    contador++;


    // ----------------------------------------------------------
    // TÍTULO
    // ----------------------------------------------------------

    body.appendParagraph(lang.tituloPlantilla)
      .setAttributes(estiloTituloPrincipal)
      .setAlignment(DocumentApp.HorizontalAlignment.CENTER);


    // ----------------------------------------------------------
    // TABLA PRINCIPAL
    // ----------------------------------------------------------

    var tablaBug = body.appendTable();


    var filas = [

      [lang.numBug, idBug],

      [lang.tester, 'Andres Antezana Grundner'],

      [lang.tituloFila, fila[1].toString()],

      [lang.fecha, fechaFormateada],

      [lang.so, 'Windows 10'],

      [lang.navegador, 'Google Chrome 148.0.7778.179'],

      [lang.prioridad, lang.prioridadVal],

      [lang.asignado, lang.dev]

    ];


    // ----------------------------------------------------------
    // CREAR FILAS DE LA TABLA
    // ----------------------------------------------------------

    for (var f = 0; f < filas.length; f++) {

      var row = tablaBug.appendTableRow();

      row.appendTableCell(filas[f][0])
        .setAttributes(estiloCeldaLabel)
        .setBackgroundColor('#CCCCCC')
        .setWidth(140);

      row.appendTableCell(filas[f][1])
        .setAttributes(estiloCeldaValor);
    }


    // ------------------------------------------------------------
    // SECCIONES DEL BUG REPORT
    // ------------------------------------------------------------

    var secciones = [

      // DESCRIPCIÓN
      [
        lang.desc,
        lang.descTxt
      ],

      // DATOS DE ENTRADA - COLUMNA E
      [
        lang.datosEntrada,
        fila[4].toString()
      ],

      // PASOS PARA LA REPRODUCCIÓN - COLUMNA F
      [
        lang.pasos,
        fila[5].toString()
      ],

      // RESULTADO ESPERADO - COLUMNA G
      [
        lang.exp,
        fila[6].toString()
      ],

      // RESULTADO ACTUAL - COLUMNA H
      [
        lang.act,
        fila[7].toString()
      ],

      // EVIDENCIA
      [
        lang.img,
        '[Screenshot / Evidence ' + (i + 1) + ']'
      ]

    ];


    // ----------------------------------------------------------
    // INSERTAR SECCIONES
    // ----------------------------------------------------------

    for (var s = 0; s < secciones.length; s++) {

      body.appendParagraph(secciones[s][0])
        .setAttributes(estiloSubtitulos);

      body.appendParagraph(secciones[s][1])
        .setAttributes(estiloDatosCuerpo);

    }


    // ----------------------------------------------------------
    // SALTO DE PÁGINA
    // ------------------------------------------------------------

    body.appendPageBreak();

  }


  // ------------------------------------------------------------
  // GUARDAR DOCUMENTO
  // ------------------------------------------------------------

  doc.saveAndClose();


  // ------------------------------------------------------------
  // OBTENER URL
  // ------------------------------------------------------------

  var urlDoc = doc.getUrl();


  hoja.getRange("A2")
    .setValue("REPORTE GENERADO: " + urlDoc);


  // ------------------------------------------------------------
  // VENTANA DE CONFIRMACIÓN
  // ------------------------------------------------------------

  var htmlOutput = HtmlService.createHtmlOutput(

    '<div style="font-family: Arial; padding: 20px;">' +

    '<h3>' +
    lang.msgExito +
    '</h3>' +

    '<p>' +

    '<a href="' +
    urlDoc +
    '" target="_blank" ' +

    'style="padding: 10px; ' +
    'background-color: #2B6CB0; ' +
    'color: white; ' +
    'text-decoration: none;">' +

    lang.btn +

    '</a>' +

    '</p>' +

    '</div>'

  )
  .setWidth(400)
  .setHeight(150);


  SpreadsheetApp.getUi()
    .showModalDialog(
      htmlOutput,
      'Reporte BCR'
    );

}


// ============================================================
// MENÚ PERSONALIZADO
// ============================================================

function onOpen() {

  var ui = SpreadsheetApp.getUi();

  ui.createMenu('⚙️ MIS REPORTES')

    .addItem(
      'Generar Reporte (ES)',
      'generarReporteBugsFormato'
    )

    .addItem(
      'Generate Report (EN)',
      'generarReporteBugsFormatoIngles'
    )

    .addSeparator()

    .addItem(
      'Traducir a inglés (Duplicar Hoja)',
      'traducirHojaAInglesFinal'
    )

    .addToUi();

}
