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
  version: "2026-09-10c",

  /* ----------------------------------------------------------------------
     1. MARCA
     ---------------------------------------------------------------------- */
  marca: {
    empresa:         "ES-METALS",
    razonSocial:     "ES-METALS S.A.S.",
    grupo:           "A Tecnoglass Group company",
    logo:            "assets/img/logo-esmetals.png",
    colorPrimario:   "#268DC2",
    colorSecundario: "#C7C6C6"
  },

  /* ----------------------------------------------------------------------
     2. PORTADA
     ---------------------------------------------------------------------- */
  portada: {
    /* En todos estos campos: deje "" (o la lista vacía) para ocultar el elemento. */
    etiqueta:    "Management Meeting",
    titulo:      "Technology Ecosystem and Process Integration",
    subtitulo:   "Value chain supported by information systems",
    descripcion: "How ES-METALS systems support operations from end to end: integrated processes, a single source of information and decisions based on reliable data.",
    nucleo:      "Ecosystem",   /* palabra dentro del círculo del diagrama */
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
    etiqueta:  "Starting point",
    titulo:    "ES-METALS Value Chain",
    subtitulo: "The process map on which the technology ecosystem is deployed.",
    tituloPrimarias: "Primary processes",
    tituloApoyo:     "Support processes",
    primarias: [
      { nombre: "Sales & Marketing",        icono: "comercial",   descripcion: "Demand generation, capture of the commercial opportunity, quoting and closing of the deal." },
      { nombre: "Engineering",              icono: "ingenieria",  descripcion: "Detail engineering, shop drawings and management of technical approvals." },
      { nombre: "Design",                   icono: "ingenieria",  descripcion: "Design of the metal systems and of their construction details." },
      { nombre: "Purchasing",               icono: "compras",     descripcion: "Sourcing of the project materials derived from the approved engineering." },
      { nombre: "Inventory",                icono: "inventario",  descripcion: "Receipt, custody and control of materials, together with their reservations." },
      { nombre: "Production & Manufacturing", icono: "produccion", descripcion: "Scheduling and execution of the manufacturing of the metal systems." },
      { nombre: "Logistics",                icono: "comercio",    descripcion: "Scheduling of shipments in the container calendar." },
      { nombre: "Installation",             icono: "instalacion", descripcion: "On-site assembly, with progress control and handover to the end client." }
    ],
    apoyo: [
      { nombre: "Finance",             icono: "finanzas",      descripcion: "Accounting, costing, treasury and financial control." },
      { nombre: "HR",                  icono: "rrhh",          descripcion: "Recruitment, development, payroll and wellbeing of the workforce." },
      { nombre: "IT",                  icono: "ti",            descripcion: "Infrastructure, information systems, data and cybersecurity." },
      { nombre: "Maintenance",         icono: "mantenimiento", descripcion: "Availability and reliability of machines and facilities." },
      { nombre: "Purchasing & Warehouse", icono: "compras",    descripcion: "Sourcing, supplier negotiation and inventory control." },
      { nombre: "Foreign Trade",       icono: "comercio",      descripcion: "Imports, exports and customs procedures." },
      { nombre: "HSE",                 icono: "sst",           descripcion: "Occupational health and safety." },
      { nombre: "Environmental",       icono: "ambiental",     descripcion: "Environmental compliance and responsible waste management." }
    ]
  },

  /* ----------------------------------------------------------------------
     4. TEXTOS DEL MAPA DEL ECOSISTEMA
     ---------------------------------------------------------------------- */
  mapa: {
    etiqueta:    "Overview",
    titulo:      "ES-METALS technology ecosystem",
    subtitulo:   "Each system supports one stretch of the value chain. Together they guarantee end-to-end traceability.",
    instruccion: "Click any area to see the full tour of that system  ·  use the top menu to focus on a system"
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
      categoria:   "Project management",
      resumen:     "Centralizes commercial, technical and operational management: from the lead to on-site delivery, on a single source of information.",

      /* ------------------------------------------------------------------
         RECORRIDO DEL SISTEMA
         Esta lista es el guion completo: al hacer clic en cualquier área del
         mapa se muestran estas pantallas, una tras otra, EN ESTE ORDEN.

         Para cambiar el orden, mueva las líneas. Para agregar una pantalla,
         copie una línea y cambie el archivo. Para quitarla, bórrela.
         Un video se reconoce solo por la extensión (.mp4) y se reproduce
         dentro del recorrido con sus propios controles.

         Si borra este bloque completo, el recorrido vuelve a armarse con las
         imágenes repartidas por cada área del tablero.
         ------------------------------------------------------------------ */
      recorrido: [
        { archivo: "medios/imagenes/pa-01.png"   },
        { archivo: "medios/imagenes/pa-02.png"   },
        { archivo: "medios/imagenes/pa-03.png"   },
        { archivo: "medios/videos/pa-04.mp4",
          portada: "medios/imagenes/pa-04-portada.jpg" },   /* 4 · video */
        { archivo: "medios/imagenes/pa-04-1.png" },   /* 4.1 · va justo después del video */
        { archivo: "medios/imagenes/pa-05.png"   },
        { archivo: "medios/imagenes/pa-06.png"   },
        { archivo: "medios/imagenes/pa-07.png"   },
        { archivo: "medios/imagenes/pa-08.png"   },
        { archivo: "medios/imagenes/pa-09.png"   },
        { archivo: "medios/imagenes/pa-10.png"   },
        { archivo: "medios/imagenes/pa-11.png"   },
        { archivo: "medios/imagenes/pa-12.png"   },
        { archivo: "medios/imagenes/pa-13.png"   },
        { archivo: "medios/imagenes/pa-14.png"   },
        { archivo: "medios/imagenes/pa-15.png"   },
        { archivo: "medios/imagenes/pa-16.png"   },
        { archivo: "medios/imagenes/pa-17.png"   },
        { archivo: "medios/imagenes/pa-18.png"   },
        { archivo: "medios/imagenes/pa-19.png"   }
      ],

      /* ------------------------------------------------------------------
         FICHA DEL APLICATIVO
         Se abre al hacer clic en el logo del sistema dentro del mapa.
         Quite este bloque completo si no quiere que el logo sea clicable.
         ------------------------------------------------------------------ */
      detalle: {
        titulo:      "Project Agenda",
        ruta:        "Application modules",
        descripcion: "Project Agenda is organized into six modules that cover the full project cycle. Each area works in its own module, on the same information: what is recorded in Sales feeds Engineering, Projects and Operations without being captured again.",
        beneficios: [
          "One module per area, on a single database",
          "Information flows between modules without re-entry",
          "Permissions and visibility based on each user role"
        ],
        areas: [
          "Sales", "Engineering", "Projects", "Operations", "Tasks", "Settings"
        ],
        imagenes: [
          { archivo: "medios/imagenes/pa-modulos.png",
            titulo:  "Project Agenda modules · Sales, Engineering, Projects, Operations, Tasks and Settings" }
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
        nombre:      "Marketing",
        icono:       "mercadeo",
        descripcion: "Entry point of the value chain: brand positioning, demand generation and capture of the leads that give rise to the commercial opportunity.",
        beneficios: [
          "Leads recorded from their origin",
          "Visibility of the demand entering the operation",
          "Orderly handover of the lead to sales"
        ],
        areas:       ["Marketing", "Sales"],
        imagenes:    [],
        imagen:      "",
        video:       "",
        captura:     "",
        comentarios: ""
      },

      {
        tipo:        "caja",
        nombre:      "Sales",
        icono:       "comercial",
        descripcion: "Management of the commercial opportunity: quoting, proposal versions, negotiation and closing of the deal that gives rise to the project.",
        beneficios: [
          "Opportunities and quotes in a single place",
          "Visibility of the commercial opportunities in progress",
          "Orderly handover from the sale to the project"
        ],
        areas:       ["Sales", "Project Management"],

        /* Galería: se muestran en este mismo orden dentro del panel de detalle.
           Para agregar otra, copie una línea y cambie el archivo y el título. */
        imagenes: [],

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
            nombre:      "Project Management",
            icono:       "proyectos",
            descripcion: "Cross-functional front covering Engineering, Design and Purchasing. It plans, controls and tracks the project throughout its life cycle —milestones, tasks and progress— and integrates sourcing, billing and the financial tracking of each project.",
            beneficios: [
              "Unified project planning and control",
              "Tracking of milestones and client commitments",
              "Sourcing tied to project progress",
              "Early alerts on schedule deviations"
            ],
            areas:       ["Project Management", "Engineering & Design", "Purchasing"],

            /* Imágenes de todo el frente, en orden de presentación.
               Para agregar otra: copie un bloque { archivo, titulo } y ponga
               una coma al final del anterior. */
            imagenes: [],

            imagen:      "",
            video:       "",
            captura:     "",
            comentarios: ""
          },
          procesos: [
            {
              nombre:      "Engineering",
              icono:       "ingenieria",
              descripcion: "Detail engineering and shop drawings, with assignment of pending work per engineer and management of technical approvals with the client.",
              beneficios: [
                "Workload visible per engineer",
                "Version control of drawings and deliverables",
                "Follow-up on client approvals"
              ],
              areas:       ["Engineering & Design", "Project Management"],
              imagen:      "",
              video:       "",
              captura:     "",
              comentarios: ""
            },
            {
              nombre:      "Design",
              icono:       "ingenieria",
              descripcion: "Development of the design of the metal systems and their construction details, as the basis for detail engineering and manufacturing.",
              beneficios: [
                "Design and its revisions in the same system",
                "Less rework caused by outdated information",
                "Continuity between design, engineering and production"
              ],
              areas:       ["Engineering & Design", "Project Management"],
              imagen:      "",
              video:       "",
              captura:     "",
              comentarios: ""
            },
            {
              nombre:      "Purchasing",
              icono:       "compras",
              descripcion: "Sourcing of the project materials derived from the approved engineering: requests, quoting, approval, purchase, transit and receipt, with follow-up on critical supplies.",
              beneficios: [
                "Material requirements tied to the project",
                "Request cycle traceable end to end",
                "Alerts on critical materials at risk"
              ],
              areas:       ["Purchasing & Warehouse", "Foreign Trade", "Engineering & Design"],
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
            nombre:      "Operations",
            icono:       "produccion",
            descripcion: "Cross-functional front covering Warehouse, Manufacturing and Logistics. It executes the project from material reservation to shipment: the warehouse controls stock and reservations, the Work Orders store the drawings and manufacturing details of each part, and the container calendar organizes the shipments.",
            beneficios: [
              "Material stock and reservations under control",
              "Drawings and manufacturing details stored in the system",
              "Work Order status in real time",
              "Shipments organized in a container calendar"
            ],
            areas:       ["Operations", "Purchasing & Warehouse", "Installation", "Maintenance"],

            /* Imágenes de todo el frente, en orden de presentación. */
            imagenes: [],

            imagen:      "",
            video:       "",
            captura:     "",
            comentarios: ""
          },
          procesos: [
            {
              nombre:      "Warehouse",
              icono:       "inventario",
              descripcion: "Receipt, custody and control of materials, with visibility of what is available and what is reserved, and management of reservation requests for production.",
              beneficios: [
                "Available and reserved visible by item code",
                "Traceable reservation requests",
                "Lower risk of shortages on the shop floor"
              ],
              areas:       ["Purchasing & Warehouse", "Operations"],
              imagen:      "",
              video:       "",
              captura:     "",
              comentarios: ""
            },
            {
              nombre:      "Manufacturing",
              icono:       "produccion",
              descripcion: "Scheduling and execution of manufacturing from the Work Orders, which store the drawings and manufacturing details of each part. Every project reports its progress against the plan.",
              beneficios: [
                "Drawings and manufacturing details in the same system",
                "Actual production progress per project",
                "Early detection of bottlenecks"
              ],
              areas:       ["Operations", "Maintenance", "Project Management"],
              imagen:      "",
              video:       "",
              captura:     "",
              comentarios: ""
            },
            {
              nombre:      "Logistics",
              icono:       "comercio",
              descripcion: "Scheduling of shipments in a container calendar, with their packing list, their work orders and the destination country.",
              beneficios: [
                "Shipments scheduled and visible by week",
                "Container traceable down to the work order",
                "Coordination between plant and destination"
              ],
              areas:       ["Installation", "Foreign Trade", "Project Management"],
              imagen:      "",
              video:       "",
              captura:     "",
              comentarios: ""
            }
          ],

      },

      {
        tipo:        "caja",
        nombre:      "Installation",
        icono:       "instalacion",
        descripcion: "On-site assembly of the shipped systems, with progress control and client delivery milestones. It closes the project cycle.",
        beneficios: [
          "Control of contractual milestones on site",
          "Assembly progress visible per project",
          "Documentary support for handover certificates"
        ],
        areas:       ["Installation", "Project Management", "HSE"],
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
      categoria:   "Support processes",
      resumen:     "Centralizes the support processes: research and development, infrastructure and administration.",

      /* ------------------------------------------------------------------
         RECORRIDO DEL SISTEMA
         Las pantallas siguen el orden de la cadena de valor de ES-Sigma:
           Investigación & Desarrollo
           Infraestructura   ->  T.I  ·  Mantenimiento  ·  Gestión Ambiental
           Administración    ->  RRHH ·  SST            ·  SGC
         Para cambiar el orden, mueva las líneas de esta lista.
         ------------------------------------------------------------------ */
      recorrido: [
        /* Investigación & Desarrollo */
        { archivo: "medios/imagenes/sigma-id-01-matrices-extrusion.png" },
        { archivo: "medios/imagenes/sigma-id-02-fijaciones.png" },
        /* Infraestructura · T.I */
        { archivo: "medios/imagenes/sigma-ti-01-mesa-servicio.png" },
        { archivo: "medios/imagenes/sigma-ti-02-solicitud-desarrollo.png" },
        { archivo: "medios/imagenes/sigma-ti-03-cronograma-desarrollo.png" },
        /* Infraestructura · Mantenimiento */
        { archivo: "medios/imagenes/sigma-mantenimiento-01-maquinaria.png" },
        { archivo: "medios/imagenes/sigma-mantenimiento-02-locativo.png" },
        /* Administración · RRHH */
        { archivo: "medios/imagenes/sigma-rh-01-ficha-empleado.png" },
        { archivo: "medios/imagenes/sigma-rh-02-desempeno.png" },
        /* Administración · SST */
        { archivo: "medios/imagenes/sigma-sst-01-entrega-epp.png" },
        { archivo: "medios/imagenes/sigma-sst-02-entrega-dotacion.png" }
      ],
      descripcion: "ES-Sigma is the system that centralizes the management of the company support processes. It covers product research and development, infrastructure —technology, maintenance and environmental management— and administration —human talent, safety and quality—, standardizing the way they work and keeping a record of the information that supports compliance and internal control.",
      valor: [
        "A single source of information for the cross-functional areas",
        "Standardized and traceable support processes",
        "Support for regulatory compliance and internal control"
      ],
      indicadores: [
        { valor: "7", etiqueta: "Processes supported" },
        { valor: "2", etiqueta: "Cross-functional fronts" }
      ],

      /* Las barras y la caja de I+D llevan color propio (gris azulado);
         las cajas de proceso mantienen el color del sistema. */
      elementos: [

      {
        tipo:        "caja",
        nombre:      "Research & Development",
        icono:       "calidad",
        color:       "#8FA6BA",
        colorSuave:  "#CBD6DF",
        descripcion: "Technical library of the product: extrusion dies and fastening elements, with their dimensions, the system they belong to and the files of each reference (DWG, IPT, PDF and PNG).",
        beneficios: [
          "Technical catalog searchable by dimensions and system",
          "Drawings and files of each reference in a single place",
          "Common baseline for engineering, design and production"
        ],
        areas:       ["Research & Development", "Engineering & Design"],
        imagenes: [
          { archivo: "medios/imagenes/sigma-id-01-matrices-extrusion.png",
            titulo:  "Technical library · extrusion dies with their shape, category, dimensions, system and associated files" },
          { archivo: "medios/imagenes/sigma-id-02-fijaciones.png",
            titulo:  "Technical library · fastening elements with their code, head type, diameter, length and files" }
        ],
        imagen: "", video: "", captura: "", comentarios: ""
      },

      {
        tipo: "grupo",
        transversal: {
          nombre:      "Infrastructure",
          icono:       "ti",
          color:       "#8FA6BA",
          colorSuave:  "#CBD6DF",
          descripcion: "Front that brings together the services supporting the operation physically and technologically: IT, Maintenance and Environmental Management.",
          beneficios: [
            "Service requests following one single flow",
            "Traceability of the response and its evidence",
            "Availability of equipment and facilities"
          ],
          areas:       ["Technology (IT)", "Maintenance", "Environmental Management"],
          imagenes:    [],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        procesos: [
        {
          nombre: "IT", icono: "ti",
          descripcion: "Management of technology services: a service desk for day-to-day support and the life cycle of software development requests.",
          beneficios: ["Traceable and rated support requests", "Developments with a formal flow through to production", "Visible planning of the requests"],
          areas: ["Technology (IT)"],
          imagenes: [
            { archivo: "medios/imagenes/sigma-ti-01-mesa-servicio.png",
              titulo:  "Service desk · ticket with its type, priority, assignment, response times and evidence" },
            { archivo: "medios/imagenes/sigma-ti-02-solicitud-desarrollo.png",
              titulo:  "Development request · flow from creation to production: technical review, ISO definition, development, UAT testing and deployment" },
            { archivo: "medios/imagenes/sigma-ti-03-cronograma-desarrollo.png",
              titulo:  "Development schedule · backlog and weekly planning of the requests by area and by phase" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "Maintenance", icono: "mantenimiento",
          descripcion: "Management of the maintenance of machines and facilities to ensure availability and reliability, with a service desk for machinery and for the premises.",
          beneficios: ["Cases per asset, with root cause and evidence", "History of interventions per piece of equipment", "Less unplanned downtime"],
          areas: ["Maintenance", "Operations"],
          imagenes: [
            { archivo: "medios/imagenes/sigma-mantenimiento-01-maquinaria.png",
              titulo:  "Machinery maintenance · case on an asset with its findings, priority, response times and evidence" },
            { archivo: "medios/imagenes/sigma-mantenimiento-02-locativo.png",
              titulo:  "Premises maintenance · requests on the facilities, with their follow-up and the evidence of the intervention" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "Environmental Management", icono: "ambiental",
          descripcion: "Management of environmental compliance and of the responsible handling of the waste from the operation.",
          beneficios: ["Follow-up on environmental indicators", "Control of waste handling", "Support for regulatory compliance"],
          areas: ["Environmental Management", "Operations"],
          imagenes: [],
          imagen: "", video: "", captura: "", comentarios: ""
        }
        ]
      },

      {
        tipo: "grupo",
        transversal: {
          nombre:      "Administration",
          icono:       "rrhh",
          color:       "#8FA6BA",
          colorSuave:  "#CBD6DF",
          descripcion: "Front that brings together the management of people and of compliance: HR, HSE and the Quality Management System.",
          beneficios: [
            "Employee information and performance in a single place",
            "Workwear and PPE issues under control",
            "Documentary support for audits and certifications"
          ],
          areas:       ["Human Resources", "HSE", "Quality"],
          imagenes:    [],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        procesos: [
        {
          nombre: "HR", icono: "rrhh",
          descripcion: "Management of human talent: employee record, documents, workwear and performance appraisal.",
          beneficios: ["Centralized employee information", "Performance appraised and with an action plan", "Traceability of the talent processes"],
          areas: ["Human Resources"],
          imagenes: [
            { archivo: "medios/imagenes/sigma-rh-01-ficha-empleado.png",
              titulo:  "Employee record · general and family information, documents and workwear parameters" },
            { archivo: "medios/imagenes/sigma-rh-02-desempeno.png",
              titulo:  "Performance · appraisal per employee with self-assessment, leader and peers, and its action plan" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "HSE", icono: "sst",
          descripcion: "Management of occupational health and safety, with control over the issue of personal protective equipment and workwear per employee.",
          beneficios: ["PPE issues recorded per employee", "Control of losses and replacements", "Support for regulatory compliance"],
          areas: ["HSE", "Human Resources"],
          imagenes: [
            { archivo: "medios/imagenes/sigma-sst-01-entrega-epp.png",
              titulo:  "Personal protective equipment issue · total issued, workwear, losses and replacements per employee and area" },
            { archivo: "medios/imagenes/sigma-sst-02-entrega-dotacion.png",
              titulo:  "Workwear issue · garments issued per employee, with quantity and the person responsible for the issue" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "QMS", icono: "calidad",
          descripcion: "Quality Management System: process documentation, control of the documents and records that support the company audits and certifications.",
          beneficios: ["Process documentation controlled and current", "Records available for audit", "Support for the company certifications"],
          areas: ["Quality"],
          imagenes: [],
          imagen: "", video: "", captura: "", comentarios: ""
        }
        ]
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
      /* La cuadrícula tiene 6 columnas para poder repartir las cajas en dos
         filas desiguales: arriba dos cajas de 3 columnas cada una y abajo
         tres cajas de 2. El reparto lo define el "ancho" de cada proceso. */
      columnas:    6,
      categoria:   "Corporate ERP",
      resumen:     "Administrative and financial core: sourcing, warehouse, billing, payroll and accounting.",
      /* Orden de la cadena: Compras · Almacén / Facturación · Nómina · Contabilidad */
      descripcion: "SAP is the corporate ERP of the group. It is the transactional system where the administrative and financial operation is recorded and controlled, and it is the official source of the company accounting information and valued inventory.",
      valor: [
        "Single, auditable financial information",
        "Transactional record of the administrative operation",
        "Support for internal control and audit"
      ],
      indicadores: [
        { valor: "5",    etiqueta: "Processes supported" },
        { valor: "24/7", etiqueta: "Availability" }
      ],
      destacado:   null,
      transversal: null,
      procesos: [

        /* --- Fila superior: dos cajas anchas (ancho 3 de 6 columnas) --- */
        {
          nombre: "Purchasing", icono: "compras", ancho: 3,
          descripcion: "Recording of purchase orders and of the relationship with suppliers, with the approval controls defined by the company.",
          beneficios: ["Formal and traceable approval flow", "History of suppliers and prices", "Support for internal controls and audit"],
          areas: ["Purchasing & Warehouse", "Finance"],
          imagenes: [
            { archivo: "medios/imagenes/sap-compras-01-orden-materiales.png",
              titulo:  "Material order · supplier, materials, quantities, price and delivery terms" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "Warehouse", icono: "almacen", ancho: 3,
          descripcion: "Control of stock and of warehouse movements, with the valuation of the raw material and finished goods inventory.",
          beneficios: ["Inventory valued in the ERP", "Warehouse movements recorded", "Basis for costing the operation"],
          areas: ["Purchasing & Warehouse", "Finance"],
          imagenes: [
            { archivo: "medios/imagenes/sap-almacen-01-menu-transacciones.png",
              titulo:  "Warehouse transactions · goods movement, stock overview and list, material documents and reservations" },
            { archivo: "medios/imagenes/sap-almacen-02-stocks-por-material.png",
              titulo:  "Warehouse stock by material · query by material, plant, storage location and batch, with special stock" },
            { archivo: "medios/imagenes/sap-almacen-03-entrada-mercancias.png",
              titulo:  "Goods receipt · receipt against the order, with transfers, returns and release of blocked stock" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },

        /* --- Fila inferior: tres cajas (ancho 2 de 6 columnas) --- */
        {
          nombre: "Billing", icono: "facturacion", ancho: 2,
          descripcion: "Issuing of the official invoicing and its integration with receivables, meeting the electronic invoicing requirements.",
          beneficios: ["Electronic invoicing compliant with regulation", "Direct integration with receivables", "Shorter collection cycle"],
          areas: ["Finance", "Sales"],
          imagenes: [
            { archivo: "medios/imagenes/sap-facturacion-01-factura-nacional.jpg",
              titulo:  "Sales invoice · line items, quantity invoiced, net value, material and taxes, with the payer and the date" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "Payroll", icono: "rrhh", ancho: 2,
          descripcion: "Personnel administration and payroll settlement on the company organizational structure, with its corresponding accounting entry.",
          beneficios: ["Payroll settled and posted to accounting", "Organizational structure and positions defined", "Support for legal compliance"],
          areas: ["Human Resources", "Finance"],
          imagenes: [
            { archivo: "medios/imagenes/sap-nomina-01-estructura-organizacional.png",
              titulo:  "Organization and staffing · company structure by organizational unit: Sales, Project Management, Engineering, Design, R&D, Operations, Infrastructure, Administration and Warehouse" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
        },
        {
          nombre: "Accounting", icono: "contabilidad", ancho: 2,
          descripcion: "Accounting entry of the operation, period close and generation of the official financial information of the company.",
          beneficios: ["Reliable accounting closes", "Auditable financial information", "Basis for cost control"],
          areas: ["Finance"],
          imagenes: [
            { archivo: "medios/imagenes/sap-contabilidad-01-documento-factura.png",
              titulo:  "Invoice document · accounting entry of the supplier invoice with taxes, withholding, payment terms and its reference to the purchase order" }
          ],
          imagen: "", video: "", captura: "", comentarios: ""
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
    /* Lámina de cierre RETIRADA de la presentación.
       Ponga  activa: true  si desea volver a mostrarla. */
    activa:   false,
    etiqueta: "Conclusion",
    titulo:   "A connected ecosystem, a more efficient operation",
    mensaje:  "Integrating the information systems is not a technology project: it is how ES-METALS secures traceability, control and speed across its entire value chain.",
    puntos: [
      { titulo: "Integration",   texto: "The systems stop being islands and share one and the same information." },
      { titulo: "Traceability",  texto: "Every project can be followed from the market through to delivery." },
      { titulo: "Efficiency",    texto: "Less rework, fewer emails and faster decisions." },
      { titulo: "Scalability",   texto: "The platform supports the growth of the operation without being rebuilt." }
    ],
    pie: "Thank you  ·  ES-METALS S.A.S.  ·  Tecnoglass Group"
  }

};
