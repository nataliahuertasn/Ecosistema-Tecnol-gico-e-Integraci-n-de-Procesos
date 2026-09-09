/* ==========================================================================
   ES-METALS  ·  ECOSISTEMA TECNOLÓGICO
   --------------------------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO QUE USTED NECESITA EDITAR.

   La estructura y los colores reproducen el documento oficial
   "CADENA DE VALOR ESM":
        Project Agenda  ->  #EB9471   (coral)
        ES-Sigma        ->  #F0CC8B   (arena)
        SAP             ->  #00537B   (azul SAP)

   Reglas simples:
     1. El texto siempre va entre comillas dobles:  "así"
     2. Los elementos de una lista se separan con coma:  "uno", "dos"
     3. No borre las llaves { } ni los corchetes [ ]
     4. Guarde el archivo y actualice el navegador (tecla F5)

   Instrucciones detalladas en el archivo LEEME.md
   ========================================================================== */

window.ESM_CONTENIDO = {

  /* ----------------------------------------------------------------------
     0. VERSIÓN DE LOS MEDIOS
     Cambie esta fecha cada vez que REEMPLACE una imagen o un video
     conservando el mismo nombre de archivo. Obliga a los navegadores a
     descargar la versión nueva en vez de mostrar la que tenían guardada.
     ---------------------------------------------------------------------- */
  version: "2026-09-09c",

  /* ----------------------------------------------------------------------
     1. MARCA
     ---------------------------------------------------------------------- */
  marca: {
    empresa:         "ES-METALS",
    razonSocial:     "ES-METALS S.A.S.",
    grupo:           "Compañía del Grupo Tecnoglass",
    logo:            "assets/img/logo-esmetals.png",
    colorPrimario:   "#268DC2",
    colorSecundario: "#C7C6C6"
  },

  /* ----------------------------------------------------------------------
     2. PORTADA
     ---------------------------------------------------------------------- */
  portada: {
    /* En todos estos campos: deje "" (o la lista vacía) para ocultar el elemento. */
    etiqueta:    "Reunión Gerencial",
    titulo:      "Ecosistema Tecnológico e Integración de Procesos",
    subtitulo:   "Cadena de valor soportada por sistemas de información",
    descripcion: "Cómo los sistemas de ES-METALS soportan la operación de extremo a extremo: procesos integrados, una sola fuente de información y decisiones sobre datos confiables.",
    grupo:       "",   /* leyenda junto al logo */
    conceptos:   [],   /* etiquetas bajo la descripción */
    pie:         ""    /* línea inferior */
  },

  /* ----------------------------------------------------------------------
     3. CADENA DE VALOR CORPORATIVA  ·  LÁMINA DESACTIVADA
        Lámina de contexto previa al mapa de sistemas.
        Está oculta. Ponga  activa: true  si desea volver a mostrarla.
     ---------------------------------------------------------------------- */
  cadenaCorporativa: {
    activa:    false,
    etiqueta:  "Punto de partida",
    titulo:    "Cadena de Valor ES-METALS",
    subtitulo: "El mapa de procesos sobre el que se despliega el ecosistema tecnológico.",
    tituloPrimarias: "Procesos primarios",
    tituloApoyo:     "Procesos de apoyo",
    primarias: [
      { nombre: "Ventas & Mercadeo",        icono: "comercial",   descripcion: "Generación de demanda, captura de la oportunidad comercial, cotización y cierre del negocio." },
      { nombre: "Ingeniería",               icono: "ingenieria",  descripcion: "Ingeniería de detalle, planos de taller y gestión de aprobaciones técnicas." },
      { nombre: "Diseño",                   icono: "ingenieria",  descripcion: "Diseño de los sistemas metálicos y de sus detalles constructivos." },
      { nombre: "Compras",                  icono: "compras",     descripcion: "Abastecimiento de los materiales del proyecto derivado de la ingeniería aprobada." },
      { nombre: "Inventario",               icono: "inventario",  descripcion: "Recepción, custodia y control de los materiales, con sus reservas." },
      { nombre: "Producción & Fabricación", icono: "produccion",  descripcion: "Programación y ejecución de la manufactura de los sistemas metálicos." },
      { nombre: "Logística",                icono: "comercio",    descripcion: "Programación de despachos en el calendario de contenedores." },
      { nombre: "Instalación",              icono: "instalacion", descripcion: "Montaje en obra, con control de avance y entrega al cliente final." }
    ],
    apoyo: [
      { nombre: "Financiero",          icono: "finanzas",      descripcion: "Contabilidad, costos, tesorería y control financiero." },
      { nombre: "R.H",                 icono: "rrhh",          descripcion: "Selección, desarrollo, nómina y bienestar del talento humano." },
      { nombre: "T.I",                 icono: "ti",            descripcion: "Infraestructura, sistemas de información, datos y ciberseguridad." },
      { nombre: "Mantenimiento",       icono: "mantenimiento", descripcion: "Disponibilidad y confiabilidad de máquinas e instalaciones." },
      { nombre: "Compras y Almacén",   icono: "compras",       descripcion: "Abastecimiento, negociación con proveedores y control de inventarios." },
      { nombre: "Comercio Exterior",   icono: "comercio",      descripcion: "Importaciones, exportaciones y trámites aduaneros." },
      { nombre: "SST",                 icono: "sst",           descripcion: "Seguridad y salud en el trabajo." },
      { nombre: "Gestión Ambiental",   icono: "ambiental",     descripcion: "Cumplimiento ambiental y manejo responsable de residuos." }
    ]
  },

  /* ----------------------------------------------------------------------
     4. TEXTOS DEL MAPA DEL ECOSISTEMA
     ---------------------------------------------------------------------- */
  mapa: {
    etiqueta:    "Vista general",
    titulo:      "Ecosistema tecnológico ES-METALS",
    subtitulo:   "Cada sistema soporta un tramo de la cadena de valor. Juntos garantizan trazabilidad de punta a punta.",
    instruccion: "Pase el cursor sobre una barra transversal para ver su detalle  ·  seleccione un sistema para enfocarlo  ·  haga clic en cualquier proceso para ampliar"
  },

  /* ----------------------------------------------------------------------
     5. SISTEMAS

     banda   : 1 = franja superior (ancho completo)
               2 = franja inferior (los sistemas se reparten el ancho)
     peso    : ancho relativo dentro de la franja
     columnas: número de columnas de la cuadrícula de procesos

     destacado  : caja alta a la izquierda (opcional; puede ser null)
     transversal: barra que cubre todas las columnas (opcional; puede ser null)
     procesos   : las cajas de la cuadrícula

     El ORDEN de esta lista es el orden de la presentación.
     ---------------------------------------------------------------------- */
  softwares: [

    /* ==================== PROJECT AGENDA ==================== */
    {
      id:          "pa",
      nombre:      "Project Agenda",
      sigla:       "PA",
      logo:        "assets/img/logo-project-agenda.png",
      color:       "#EB9471",
      colorSuave:  "#F6CFBF",
      banda:       1,
      peso:        1,
      columnas:    3,
      categoria:   "Gestión de proyectos",
      resumen:     "Centraliza la gestión comercial, técnica y operativa: del lead a la entrega en obra, sobre una única fuente de información.",

      /* ------------------------------------------------------------------
         FICHA DEL APLICATIVO
         Se abre al hacer clic en el logo del sistema dentro del mapa.
         Quite este bloque completo si no quiere que el logo sea clicable.
         ------------------------------------------------------------------ */
      detalle: {
        titulo:      "Project Agenda",
        ruta:        "Módulos del aplicativo",
        descripcion: "Project Agenda se organiza en seis módulos que cubren el ciclo completo del proyecto. Cada área trabaja en el suyo, sobre la misma información: lo que se registra en Sales alimenta a Engineering, Projects y Operations sin volver a capturarlo.",
        beneficios: [
          "Un módulo por área, sobre una misma base de datos",
          "La información fluye entre módulos sin recaptura",
          "Permisos y visibilidad según el rol de cada usuario"
        ],
        areas: [
          "Sales", "Engineering", "Projects", "Operations", "Tasks", "Settings"
        ],
        imagenes: [
          { archivo: "medios/imagenes/pa-modulos.png",
            titulo:  "Módulos de Project Agenda · Sales, Engineering, Projects, Operations, Tasks y Settings" }
        ],
        imagen:      "",
        video:       "",
        captura:     "",
        comentarios: ""
      },

      /* ------------------------------------------------------------------
         El tablero se arma con "elementos", de izquierda a derecha.
         Cada elemento es de uno de estos dos tipos:
           tipo: "caja"   -> caja alta suelta, ocupa todo el alto
           tipo: "grupo"  -> barra transversal sobre su fila de procesos
         "peso" define el ancho relativo (un grupo pesa por defecto tantos
         puntos como procesos tenga).
         ------------------------------------------------------------------ */
      elementos: [

      {
        tipo:        "caja",
        nombre:      "Mercadeo & Ventas",
        icono:       "comercial",
        descripcion: "Punto de entrada de la cadena de valor: generación de demanda, captura de la oportunidad comercial, cotización, negociación y cierre del negocio que da origen al proyecto.",
        beneficios: [
          "Leads, oportunidades y cotizaciones en un solo lugar",
          "Visibilidad de las oportunidades comerciales en curso",
          "Traspaso ordenado de la venta al proyecto"
        ],
        areas:       ["Comercial", "Mercadeo", "Gestión de Proyectos"],

        /* Galería: se muestran en este mismo orden dentro del panel de detalle.
           Para agregar otra, copie una línea y cambie el archivo y el título. */
        imagenes: [
          { archivo: "medios/imagenes/pa-ventas-01-leads.png",
            titulo:  "Leads · bandeja de solicitudes con su estado: nuevas, en espera, aprobadas, rechazadas o con modificación solicitada" },
          { archivo: "medios/imagenes/pa-ventas-02-main-board.png",
            titulo:  "Main Board · cotizaciones por etapa —Bidding, Approval y Follow Up— con su valor" },
          { archivo: "medios/imagenes/pa-ventas-03-versiones-cotizacion.png",
            titulo:  "Versiones de la cotización · histórico de cada versión con sus documentos de licitación, adjuntos, destinatarios, moneda y valor" },
          { archivo: "medios/imagenes/pa-ventas-04-estadisticas.png",
            titulo:  "Estadísticas · adjudicadas, perdidas, nuevas cotizaciones y proyección de ventas del año" },
          { archivo: "medios/imagenes/pa-ventas-05-adjudicado-por-asesor.png",
            titulo:  "Adjudicado por Account Manager · distribución y valor por asesor" },
          { archivo: "medios/imagenes/pa-ventas-06-galeria-comercial.png",
            titulo:  "Herramientas comerciales · galería de proyectos con etiquetas por tipo de sistema" }
        ],

        imagen:      "",
        video:       "",
        captura:     "",
        comentarios: ""
      },

      {
          tipo: "grupo",
          /* detalleConsolidado: todo el contenido del frente (fotos, videos y
             comentarios) se carga en la barra "transversal" de abajo.
             El detalle se abre al pasar el cursor sobre esa barra e incluye
             además la descripción de cada proceso que cubre. */
          detalleConsolidado: true,

          transversal: {
            nombre:      "Gestión de Proyectos",
            icono:       "proyectos",
            descripcion: "Frente transversal que cubre Ingeniería, Diseño y Compras. Planea, controla y hace seguimiento al proyecto durante todo su ciclo de vida —hitos, tareas y avance—, e integra el abastecimiento, la facturación y el seguimiento financiero de cada proyecto.",
            beneficios: [
              "Planeación y control unificados del proyecto",
              "Seguimiento de hitos y compromisos con el cliente",
              "Abastecimiento atado al avance del proyecto",
              "Alertas tempranas de desviación en fechas"
            ],
            areas:       ["Gestión de Proyectos", "Ingeniería & Diseño", "Compras"],

            /* Imágenes de todo el frente, en orden de presentación.
               Para agregar otra: copie un bloque { archivo, titulo } y ponga
               una coma al final del anterior. */
            imagenes: [
              { archivo: "medios/imagenes/pa-gp-01-asignacion-ingenieros.png",
                titulo:  "Asignación de ingenieros · pendientes por asignar y carga horaria semanal de cada ingeniero" },
              { archivo: "medios/imagenes/pa-gp-02-main-board-proyectos.png",
                titulo:  "Main Board de proyectos · precio, facturado y saldo por facturar de cada proyecto, en COP y USD" },
              { archivo: "medios/imagenes/pa-gp-03-detalle-proyecto.png",
                titulo:  "Detalle del proyecto · cliente, account manager, project manager, precio de contrato, facturado y saldo por facturar" },
              { archivo: "medios/imagenes/pa-gp-04-work-orders.png",
                titulo:  "Work Orders del proyecto · órdenes de producción con su estado: enviadas, aprobadas o rechazadas" },
              { archivo: "medios/imagenes/pa-gp-05-work-order-planos.png",
                titulo:  "Detalle de la Work Order · ítems de producción con su ruta de procesos y los planos y archivos de fabricación de cada pieza (PDF, DXF, STP)" },
              { archivo: "medios/imagenes/pa-gp-06-forecast.png",
                titulo:  "Forecast de proyectos · saldo por facturar, facturado del mes y cumplimiento frente a lo proyectado" },
              { archivo: "medios/imagenes/pa-compras-01-solicitudes.png",
                titulo:  "Solicitudes de compra · ítems, responsables, fechas y estado a lo largo del ciclo: cotización, aprobación, compra, tránsito y recepción" },
              { archivo: "medios/imagenes/pa-compras-02-indicadores.png",
                titulo:  "Indicadores de compras · nivel de atención a las solicitudes y cumplimiento de entregas por mes" }
            ],

            imagen:      "",
            video:       "",
            captura:     "",
            comentarios: ""
          },
          procesos: [
            {
              nombre:      "Ingeniería",
              icono:       "ingenieria",
              descripcion: "Ingeniería de detalle y planos de taller, con asignación de pendientes por ingeniero y gestión de las aprobaciones técnicas con el cliente.",
              beneficios: [
                "Carga de trabajo visible por ingeniero",
                "Control de versiones de planos y entregables",
                "Seguimiento a las aprobaciones del cliente"
              ],
              areas:       ["Ingeniería & Diseño", "Gestión de Proyectos"],
              imagen:      "",
              video:       "",
              captura:     "",
              comentarios: ""
            },
            {
              nombre:      "Diseño",
              icono:       "ingenieria",
              descripcion: "Desarrollo del diseño de los sistemas metálicos y de sus detalles constructivos, como base para la ingeniería de detalle y la fabricación.",
              beneficios: [
                "Diseño y sus revisiones en el mismo sistema",
                "Menor reproceso por información desactualizada",
                "Continuidad entre diseño, ingeniería y producción"
              ],
              areas:       ["Ingeniería & Diseño", "Gestión de Proyectos"],
              imagen:      "",
              video:       "",
              captura:     "",
              comentarios: ""
            },
            {
              nombre:      "Compras",
              icono:       "compras",
              descripcion: "Abastecimiento de los materiales del proyecto derivado de la ingeniería aprobada: solicitudes, cotización, aprobación, compra, tránsito y recepción, con seguimiento a los insumos críticos.",
              beneficios: [
                "Requerimientos de material atados al proyecto",
                "Ciclo de la solicitud trazable de punta a punta",
                "Alerta sobre materiales críticos en riesgo"
              ],
              areas:       ["Compras y Almacén", "Comercio Exterior", "Ingeniería & Diseño"],
              imagen:      "",
              video:       "",
              captura:     "",
              comentarios: ""
            }
          ]
        },

      {
          tipo: "grupo",
          detalleConsolidado: true,

          transversal: {
            nombre:      "Operaciones",
            icono:       "produccion",
            descripcion: "Frente transversal que cubre Almacén, Fabricación y Logística. Ejecuta el proyecto desde la reserva del material hasta el despacho: el almacén controla existencias y reservas, las Work Orders almacenan los planos y los detalles de fabricación de cada pieza, y el calendario de contenedores organiza los envíos.",
            beneficios: [
              "Existencias y reservas de material controladas",
              "Planos y detalles de fabricación almacenados en el sistema",
              "Estado de las Work Orders en tiempo real",
              "Despachos organizados en un calendario de contenedores"
            ],
            areas:       ["Operaciones", "Compras y Almacén", "Instalación", "Mantenimiento"],

            /* Imágenes de todo el frente, en orden de presentación. */
            imagenes: [
              { archivo: "medios/imagenes/pa-op-01-stock-room.png",
                titulo:  "Stock Room · existencias por código con lo disponible y lo reservado, y valor total del inventario" },
              { archivo: "medios/imagenes/pa-op-02-avance-work-orders.jpg",
                titulo:  "Avance de las Work Orders · progreso de producción y de calidad por proceso —punzonado, doblez, pretratamiento, pintura, corte, mecanizado— con el consolidado de la planta" },
              { archivo: "medios/imagenes/pa-op-03-estadisticas-produccion.jpg",
                titulo:  "Estadísticas de producción · work orders, kilogramos, part numbers y piezas ingresadas por día" },
              { archivo: "medios/imagenes/pa-op-04-planeador-despachos.png",
                titulo:  "Planeador de despachos · calendario semanal de contenedores con su packing list, work orders y país de destino" }
            ],

            imagen:      "",
            video:       "",
            captura:     "",
            comentarios: ""
          },
          procesos: [
            {
              nombre:      "Almacén",
              icono:       "inventario",
              descripcion: "Recepción, custodia y control de los materiales, con visibilidad de lo disponible y lo reservado, y gestión de las solicitudes de reserva para producción.",
              beneficios: [
                "Disponible y reservado visibles por código",
                "Solicitudes de reserva trazables",
                "Menor riesgo de faltantes en planta"
              ],
              areas:       ["Compras y Almacén", "Operaciones"],
              imagen:      "",
              video:       "",
              captura:     "",
              comentarios: ""
            },
            {
              nombre:      "Fabricación",
              icono:       "produccion",
              descripcion: "Programación y ejecución de la manufactura a partir de las Work Orders, que almacenan los planos y los detalles de fabricación de cada pieza. Cada proyecto reporta su avance contra el plan.",
              beneficios: [
                "Planos y detalles de fabricación en el mismo sistema",
                "Avance real de producción por proyecto",
                "Detección temprana de cuellos de botella"
              ],
              areas:       ["Operaciones", "Mantenimiento", "Gestión de Proyectos"],
              imagen:      "",
              video:       "",
              captura:     "",
              comentarios: ""
            },
            {
              nombre:      "Logística",
              icono:       "comercio",
              descripcion: "Programación de los despachos en un calendario de contenedores, con su packing list, sus work orders y el país de destino.",
              beneficios: [
                "Despachos programados y visibles por semana",
                "Contenedor trazable hasta la work order",
                "Coordinación entre planta y destino"
              ],
              areas:       ["Instalación", "Comercio Exterior", "Gestión de Proyectos"],
              imagen:      "",
              video:       "",
              captura:     "",
              comentarios: ""
            }
          ],

      },

      {
        tipo:        "caja",
        nombre:      "Instalación",
        icono:       "instalacion",
        descripcion: "Montaje en obra de los sistemas despachados, con control de avance e hitos de entrega al cliente. Cierra el ciclo del proyecto.",
        beneficios: [
          "Control de hitos contractuales en obra",
          "Avance de montaje visible por proyecto",
          "Soporte documental para actas de entrega"
        ],
        areas:       ["Instalación", "Gestión de Proyectos", "SST"],
        imagenes:    [],
        imagen:      "",
        video:       "",
        captura:     "",
        comentarios: ""
      }

      ]
    },

    /* ==================== ES-SIGMA ==================== */
    {
      id:          "sigma",
      nombre:      "ES-Sigma",
      sigla:       "SG",
      logo:        "assets/img/logo-es-sigma.png",
      color:       "#F0CC8B",
      colorSuave:  "#F8E8CB",
      banda:       2,
      peso:        2.05,
      columnas:    3,
      categoria:   "Procesos de apoyo",
      resumen:     "Centraliza la gestión de los procesos de apoyo: talento, tecnología, mantenimiento y cumplimiento.",
      descripcion: "ES-Sigma es el sistema que centraliza la gestión de los procesos de apoyo de la compañía. Integra las áreas transversales —talento humano, tecnología, mantenimiento, comercio exterior, seguridad y ambiental—, estandarizando su forma de trabajar y dejando registro de la información que soporta el cumplimiento y el control interno.",
      valor: [
        "Una única fuente de información para las áreas transversales",
        "Procesos de apoyo estandarizados y trazables",
        "Soporte al cumplimiento normativo y al control interno"
      ],
      indicadores: [
        { valor: "6", etiqueta: "Procesos soportados" },
        { valor: "6", etiqueta: "Áreas transversales" }
      ],
      destacado:   null,
      transversal: null,
      procesos: [
        {
          nombre: "R.H", icono: "rrhh",
          descripcion: "Gestión del talento humano: hoja de vida del empleado, documentos, dotación y evaluación de desempeño.",
          beneficios: ["Información del personal centralizada", "Desempeño evaluado y con plan de acción", "Trazabilidad de los procesos de talento"],
          areas: ["Recursos Humanos"],
          imagenes: [
            { archivo: "medios/imagenes/sigma-rh-01-ficha-empleado.png",
              titulo:  "Ficha del empleado · información general, familiar, documentos y parámetros de dotación" },
            { archivo: "medios/imagenes/sigma-rh-02-desempeno.png",
              titulo:  "Desempeño · evaluación por colaborador con autoevaluación, líder y pares, y su plan de acción" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "T.I", icono: "ti",
          descripcion: "Gestión de los servicios de tecnología: mesa de servicio para el soporte del día a día y el ciclo de las solicitudes de desarrollo de software.",
          beneficios: ["Solicitudes de soporte trazables y calificadas", "Desarrollos con flujo formal hasta producción", "Planeación visible de las solicitudes"],
          areas: ["Tecnología (T.I.)"],
          imagenes: [
            { archivo: "medios/imagenes/sigma-ti-01-mesa-servicio.png",
              titulo:  "Mesa de servicio · ticket con su tipo, prioridad, asignación, tiempos de atención y evidencia" },
            { archivo: "medios/imagenes/sigma-ti-02-solicitud-desarrollo.png",
              titulo:  "Solicitud de desarrollo · flujo desde la creación hasta producción: revisión técnica, definición ISO, desarrollo, pruebas UAT y despliegue" },
            { archivo: "medios/imagenes/sigma-ti-03-cronograma-desarrollo.png",
              titulo:  "Cronograma de desarrollo · backlog y planeación semanal de las solicitudes por área y por fase" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "Mantenimiento", icono: "mantenimiento",
          descripcion: "Gestión del mantenimiento de máquinas e instalaciones para asegurar disponibilidad y confiabilidad, con mesa de servicio para maquinaria y para lo locativo.",
          beneficios: ["Casos por activo, con causa raíz y evidencia", "Historial de intervenciones por equipo", "Menor tiempo de parada no planeada"],
          areas: ["Mantenimiento", "Operaciones"],
          imagenes: [
            { archivo: "medios/imagenes/sigma-mantenimiento-01-maquinaria.png",
              titulo:  "Mantenimiento de maquinaria · caso sobre un activo con sus hallazgos, prioridad, tiempos de atención y evidencia" },
            { archivo: "medios/imagenes/sigma-mantenimiento-02-locativo.png",
              titulo:  "Mantenimiento locativo · solicitudes sobre las instalaciones, con su seguimiento y la evidencia de la intervención" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "Comercio Exterior", icono: "comercio",
          descripcion: "Gestión de importaciones, exportaciones y trámites aduaneros asociados a la operación.",
          beneficios: ["Seguimiento a embarques y nacionalizaciones", "Documentación aduanera organizada", "Visibilidad de tiempos de tránsito"],
          areas: ["Comercio Exterior", "Compras y Almacén"], imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "SST", icono: "sst",
          descripcion: "Gestión de la seguridad y salud en el trabajo, con el control de la entrega de elementos de protección personal y de dotación por empleado.",
          beneficios: ["Entregas de EPP registradas por empleado", "Control de pérdidas y reposiciones", "Soporte al cumplimiento normativo"],
          areas: ["SST", "Recursos Humanos"],
          imagenes: [
            { archivo: "medios/imagenes/sigma-sst-01-entrega-epp.png",
              titulo:  "Entrega de elementos de protección personal · total entregado, dotación, pérdidas y reposiciones por empleado y área" },
            { archivo: "medios/imagenes/sigma-sst-02-entrega-dotacion.png",
              titulo:  "Entrega de dotación · prendas entregadas por empleado, con cantidad y responsable de la entrega" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "Gestión Ambiental", icono: "ambiental",
          descripcion: "Gestión del cumplimiento ambiental y del manejo responsable de residuos de la operación.",
          beneficios: ["Seguimiento a indicadores ambientales", "Control del manejo de residuos", "Soporte al cumplimiento normativo"],
          areas: ["Gestión Ambiental", "Operaciones"], imagen: "", video: "", captura: "", comentarios: ""
        }
      ]
    },

    /* ==================== SAP ==================== */
    {
      id:          "sap",
      nombre:      "SAP",
      sigla:       "SAP",
      logo:        "assets/img/logo-sap.png",
      color:       "#00537B",
      colorSuave:  "#8CB1C3",
      banda:       2,
      peso:        1,
      columnas:    3,
      categoria:   "ERP corporativo",
      resumen:     "Núcleo administrativo y financiero: abastecimiento, facturación, nómina, contabilidad y almacén.",
      /* Orden de la cadena: Compras · Facturación · Nómina · Contabilidad · Almacén */
      descripcion: "SAP es el ERP corporativo del grupo. Es el sistema transaccional donde se registra y controla la operación administrativa y financiera, y constituye la fuente oficial de la información contable y del inventario valorizado de la compañía.",
      valor: [
        "Información financiera única y auditable",
        "Registro transaccional de la operación administrativa",
        "Soporte al control interno y a la auditoría"
      ],
      indicadores: [
        { valor: "5",    etiqueta: "Procesos soportados" },
        { valor: "24/7", etiqueta: "Disponibilidad" }
      ],
      destacado:   null,
      transversal: null,
      procesos: [
        {
          nombre: "Compras", icono: "compras",
          descripcion: "Registro de las órdenes de compra y de la relación con proveedores, con los controles de aprobación definidos por la compañía.",
          beneficios: ["Flujo de aprobación formal y trazable", "Historial de proveedores y precios", "Soporte a controles internos y auditoría"],
          areas: ["Compras y Almacén", "Financiero"],
          imagenes: [
            { archivo: "medios/imagenes/sap-compras-01-orden-materiales.png",
              titulo:  "Orden de materiales · proveedor, materiales, cantidades, precio y condiciones de entrega" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "Facturación", icono: "facturacion",
          descripcion: "Emisión de la facturación oficial y su integración con cartera, cumpliendo los requisitos de facturación electrónica.",
          beneficios: ["Facturación electrónica conforme a norma", "Integración directa con cartera", "Ciclo de cobro más corto"],
          areas: ["Financiero", "Comercial"],
          imagenes: [
            { archivo: "medios/imagenes/sap-facturacion-01-factura-nacional.jpg",
              titulo:  "Factura de venta · posiciones, cantidad facturada, valor neto, material e impuestos, con el pagador y la fecha" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "Nómina", icono: "rrhh",
          descripcion: "Administración de personal y liquidación de nómina sobre la estructura organizacional de la compañía, con su correspondiente registro contable.",
          beneficios: ["Nómina liquidada y contabilizada", "Estructura organizacional y posiciones definidas", "Soporte al cumplimiento legal"],
          areas: ["Recursos Humanos", "Financiero"],
          imagenes: [
            { archivo: "medios/imagenes/sap-nomina-01-estructura-organizacional.png",
              titulo:  "Organización y ocupación · estructura de la compañía por unidad organizativa: Sales, Project Management, Engineering, Design, R&D, Operations, Infraestructure, Administration y Warehouse" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "Contabilidad", icono: "contabilidad",
          descripcion: "Registro contable de la operación, cierre de período y generación de la información financiera oficial de la compañía.",
          beneficios: ["Cierres contables confiables", "Información financiera auditable", "Base para el control de costos"],
          areas: ["Financiero"],
          imagenes: [
            { archivo: "medios/imagenes/sap-contabilidad-01-documento-factura.png",
              titulo:  "Documento de factura · registro contable de la factura del proveedor con impuestos, retención, condiciones de pago y su referencia al pedido de compra" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "Almacén", icono: "almacen",
          descripcion: "Control de las existencias y de los movimientos de almacén, con la valorización del inventario de materia prima y producto terminado.",
          beneficios: ["Inventario valorizado en el ERP", "Movimientos de almacén registrados", "Base para el costeo de la operación"],
          imagenes: [
            { archivo: "medios/imagenes/sap-almacen-01-menu-transacciones.png",
              titulo:  "Transacciones de almacén · movimiento de mercancías, resumen y listado de stocks, documentos de material y reservas" },
            { archivo: "medios/imagenes/sap-almacen-02-stocks-por-material.png",
              titulo:  "Stocks en almacén por material · consulta por material, centro, almacén y lote, con stocks especiales" },
            { archivo: "medios/imagenes/sap-almacen-03-entrada-mercancias.png",
              titulo:  "Entrada de mercancías · recepción contra el pedido, con traspasos, devoluciones y liberación de stock bloqueado" }
          ],
          areas: ["Compras y Almacén", "Financiero"], imagen: "", video: "", captura: "", comentarios: ""
        }
      ]
    }

    /* Para AGREGAR un sistema nuevo:
       ponga una coma después de la llave de cierre } anterior
       y pegue aquí un bloque completo con un "id" diferente. */

  ],

  /* ----------------------------------------------------------------------
     6. CIERRE
     ---------------------------------------------------------------------- */
  cierre: {
    activa:   true,
    etiqueta: "Conclusión",
    titulo:   "Un ecosistema conectado, una operación más eficiente",
    mensaje:  "La integración de los sistemas de información no es un proyecto de tecnología: es la forma en que ES-METALS asegura trazabilidad, control y velocidad en toda su cadena de valor.",
    puntos: [
      { titulo: "Integración",   texto: "Los sistemas dejan de ser islas y comparten una misma información." },
      { titulo: "Trazabilidad",  texto: "Cada proyecto puede seguirse desde el mercado hasta la entrega." },
      { titulo: "Eficiencia",    texto: "Menos reprocesos, menos correos y decisiones más rápidas." },
      { titulo: "Escalabilidad", texto: "La plataforma soporta el crecimiento de la operación sin rehacerla." }
    ],
    pie: "Gracias  ·  ES-METALS S.A.S.  ·  Grupo Tecnoglass"
  }

};
