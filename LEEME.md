# ES-METALS · Ecosistema Tecnológico

Presentación web interactiva para reunión gerencial.
Reproduce la estructura y los colores del documento oficial **CADENA DE VALOR ESM**.

---

## 1. Cómo abrirla

Haga **doble clic en `index.html`**. Se abre en el navegador. No requiere instalar nada.

> Recomendado: Microsoft Edge o Google Chrome.

### Atajos de teclado

| Tecla | Acción |
|---|---|
| `→` `↓` `Espacio` | Siguiente lámina |
| `←` `↑` | Lámina anterior |
| `Inicio` / `Fin` | Primera / última lámina |
| `F` | Pantalla completa |
| `P` | Modo presentación (pantalla limpia para la reunión) |
| `Esc` | Cerrar el panel de detalle / salir del modo presentación |

En **modo presentación** se ocultan los menús, las ayudas y los espacios de multimedia
que estén vacíos, para que la vista quede limpia frente a la gerencia.

### Cómo se navega el mapa

| Acción | Resultado |
|---|---|
| **Clic sobre cualquier área** (una caja, una barra transversal o el logo del sistema) | Abre el **recorrido completo de ese sistema**: todas sus capturas, en el orden de la cadena de valor, a pantalla casi completa |
| Scroll dentro del recorrido | Avanza por las pantallas del software, una tras otra |
| Teclas `↓` `↑`, `AvPág` `RePág`, `Inicio` `Fin` | Recorren las pantallas sin usar el ratón |
| La **X** arriba a la derecha, o `Esc` | Cierra el recorrido y vuelve al mapa |
| Menú superior (Portada, Vista general, Project Agenda…) | Enfoca un sistema y atenúa los demás |

> El área sobre la que se hace clic es **solo el punto de entrada**: sin importar
> cuál se elija, se abre el mismo recorrido completo del sistema. No hay una ficha
> por área ni hay que cerrar una vista para pasar a otra parte del mismo software.

---

## 2. Dónde se cambia el contenido

**Todo el contenido está en un solo archivo:**

```
contenido/contenido.js
```

Ábralo con el Bloc de notas (o Visual Studio Code), edite los textos, **guarde** y
actualice el navegador con `F5`.

### Reglas al editar

1. El texto siempre va entre comillas dobles: `"así"`
2. Los elementos de una lista se separan con coma: `"uno", "dos", "tres"`
3. No borre las llaves `{ }` ni los corchetes `[ ]`
4. Deje `""` (comillas vacías) para ocultar un texto
5. Si algo queda mal escrito, la presentación mostrará un aviso; abra la consola
   del navegador con `F12` para ver la línea exacta del error

---

## 3. Estructura del archivo de contenido

| Sección | Qué controla |
|---|---|
| `marca` | Logo, colores corporativos, nombre de la empresa |
| `portada` | Título, subtítulo, descripción y textos de la primera lámina |
| `cadenaCorporativa` | Lámina opcional de la cadena de valor (hoy `activa: false`) |
| `mapa` | Títulos de la lámina del ecosistema |
| `softwares` | **Los sistemas y sus procesos** |
| `cierre` | Última lámina |

### Mostrar u ocultar una lámina

```js
cadenaCorporativa: {
  activa: false,   // cámbielo a true para mostrarla
```

Lo mismo aplica para `cierre`.

---

## 4. Los sistemas y sus procesos

Cada sistema es un bloque dentro de la lista `softwares`. **El orden de la lista es
el orden de la presentación**: para reordenar, mueva el bloque `{ ... }` completo.

```js
{
  id:          "pa",                    // identificador interno, sin espacios
  nombre:      "Project Agenda",
  sigla:       "PA",                    // se usa en el diagrama de la portada
  logo:        "assets/img/logo-project-agenda.png",
  color:       "#EB9471",               // color del sistema
  colorSuave:  "#F6CFBF",               // color cuando está atenuado
  banda:       1,                       // 1 = franja superior, 2 = franja inferior
  peso:        1,                       // ancho relativo dentro de la franja
  columnas:    3,                       // columnas de la cuadrícula de procesos
  categoria:   "Gestión de proyectos",
  resumen:     "Texto corto que aparece bajo el título al enfocar el sistema.",

  destacado:   { ... },   // caja alta a la izquierda (ej. Ventas & Mercadeo). null si no aplica
  grupos:      [ ... ]    // ver abajo
}
```

### Cómo se arma el tablero de un sistema

Hay dos formas, según la complejidad del sistema:

**A. Con grupos transversales** — es el caso de Project Agenda, que tiene dos barras
(*Gestión de Proyectos* y *Operaciones*), cada una sobre sus propios procesos:

```js
destacado: { nombre: "Ventas", ... },     // caja alta a la izquierda

grupos: [
  {
    transversal: { nombre: "Gestión de Proyectos", ... },   // barra superior del grupo
    procesos: [
      { nombre: "Ingeniería & Diseño", ... },
      { nombre: "Compras", ... },
      { nombre: "Facturación & Gestión Financiera", ... }
    ]
  },
  {
    transversal: { nombre: "Operaciones", ... },
    procesos: [
      { nombre: "Almacén / Inventario", ... },
      { nombre: "Producción & Fabricación", ... },
      { nombre: "Logística e Instalación", ... }
    ]
  }
]
```

El ancho de cada grupo se reparte según cuántos procesos tenga. Si quiere forzarlo,
agregue `peso: 2` dentro del grupo. Si quiere varias filas dentro de un grupo,
agregue `columnas: 3`.

#### Contenido centralizado en la barra transversal

Con `detalleConsolidado: true` **todo el material del frente se carga en un solo
lugar: la barra transversal**. Ya no hace falta cargar fotos ni descripciones caja
por caja.

```js
grupos: [
  {
    detalleConsolidado: true,          // <— centraliza el contenido

    transversal: {
      nombre: "Gestión de Proyectos",
      descripcion: "…",
      beneficios: ["…"],
      areas: ["…"],
      imagenes: [                      // <— aquí van TODAS las fotos del frente
        { archivo: "medios/imagenes/pa-gp-01-cronograma.png",
          titulo:  "Cronograma del proyecto" }
      ],
      video: "", comentarios: ""
    },

    procesos: [                        // solo nombre y descripción breve
      { nombre: "Ingeniería & Diseño", icono: "ingenieria",
        descripcion: "…", beneficios: ["…"], areas: ["…"] }
    ]
  }
]
```

Con esa opción activa:

- El detalle **se abre al pasar el cursor** sobre la barra, sin oscurecer el mapa,
  y se cierra solo al retirarlo.
- Con clic queda fijo (se cierra con la X o con `Esc`).
- El detalle incluye una sección **"Procesos que cubre"** con el nombre, la
  descripción y los beneficios de cada caja del grupo.
- Al hacer clic en cualquiera de esas cajas se abre ese mismo detalle.
- Si algún proceso tiene sus propias `imagenes`, se suman a la galería del frente.

Para volver al comportamiento anterior (cada caja con su propio detalle), quite la
línea `detalleConsolidado: true`.

**B. Sin grupos (una sola cuadrícula)** — es el caso de ES-Sigma:

```js
destacado:   null,
transversal: null,
columnas:    4,
procesos:    [ ...8 procesos... ]    // se acomodan en 4 columnas × 2 filas
```

Para quitar una barra transversal, ponga `transversal: null`.
Para quitar la caja alta de la izquierda, ponga `destacado: null`.

### Cada proceso

```js
{
  nombre:      "Ingeniería & Diseño",
  icono:       "ingenieria",
  descripcion: "Qué hace el proceso.",
  beneficios:  ["Beneficio 1", "Beneficio 2"],
  areas:       ["Ingeniería & Diseño", "Gestión de Proyectos"],
  imagen:      "medios/imagenes/ingenieria.jpg",
  video:       "medios/videos/ingenieria.mp4",
  captura:     "medios/imagenes/pantalla-ingenieria.png",
  comentarios: "Observaciones adicionales."
}
```

Al hacer clic en la caja del proceso se abre el panel lateral con toda esta información.

### Iconos disponibles

`mercadeo` · `proyectos` · `ingenieria` · `comercial` · `compras` · `produccion` ·
`instalacion` · `facturacion` · `inventario` · `almacen` · `contabilidad` · `finanzas` ·
`comercio` · `rrhh` · `ti` · `sst` · `ambiental` · `mantenimiento` · `proceso`

---

## 5. Agregar imágenes y videos

1. Copie el archivo dentro de `medios/imagenes/` o `medios/videos/`
2. Escríbalo en el proceso correspondiente

### Varias imágenes en orden (recomendado)

Use la lista `imagenes`. **Se muestran en el mismo orden en que estén escritas**,
numeradas 01, 02, 03… Es lo que se usa hoy en el proceso *Ventas* de Project Agenda:

```js
imagenes: [
  { archivo: "medios/imagenes/pa-ventas-01-leads.png",
    titulo:  "Leads · bandeja de solicitudes y su estado de aprobación" },
  { archivo: "medios/imagenes/pa-ventas-02-main-board.png",
    titulo:  "Main Board · cotizaciones por etapa" }
],
```

Para reordenarlas, mueva las líneas de lugar. Para agregar una, copie un bloque
`{ archivo: …, titulo: … }` y ponga una coma al final del anterior.

> Al hacer clic sobre cualquier imagen se **amplía a pantalla completa** y desde ahí
> se recorren **todas las imágenes de esa sección**, con las flechas laterales, las
> teclas `←` `→` o los puntos inferiores. Se cierra con `Esc`, con la X o haciendo
> clic fuera de la imagen.

### Una sola imagen o un video

```js
imagen:  "medios/imagenes/cotizacion.jpg",
captura: "medios/imagenes/pantalla-cotizacion.png",
video:   "medios/videos/cotizacion.mp4",
```

Si el proceso no tiene ningún archivo cargado, el panel muestra un espacio reservado
indicando dónde va. Ese espacio **no se ve en modo presentación**.

> Formatos recomendados: `.png` / `.jpg` para imágenes, `.mp4` para video.

### Si reemplaza una imagen y sigue viendo la anterior

Ocurre cuando el archivo nuevo conserva **el mismo nombre** que el anterior: el
navegador muestra la copia que tenía guardada. Para evitarlo, actualice la fecha
que está al principio de `contenido/contenido.js`:

```js
version: "2026-09-09",
```

Póngale la fecha del día en que hizo el cambio. Con eso, todos los que abran la
presentación descargan las imágenes nuevas. También sirve una recarga forzada con
`Ctrl + F5`, pero eso solo arregla su propio equipo.

---

## 6. Agregar un sistema nuevo

1. Abra `contenido/contenido.js` y busque la lista `softwares`
2. Ponga una coma después de la llave `}` del último sistema
3. Pegue un bloque completo, cambiando `id`, `nombre`, `sigla` y `color`
4. Si tiene logo propio, cópielo en `assets/img/` y escriba la ruta en `logo`

El sistema aparece automáticamente en el mapa, en el menú superior, en el diagrama
de la portada y en la navegación.

---

## 7. Agregar los procesos de SAP

SAP viene con la lista `procesos` vacía porque en el documento oficial su alcance
todavía no está detallado; en el mapa se muestra como *"Procesos por definir"*.

Para completarlo, reemplace la lista vacía por sus procesos:

```js
procesos: [
  {
    nombre: "Compras", icono: "compras",
    descripcion: "…",
    beneficios: ["…"],
    areas: ["Compras y Almacén"],
    imagen: "", video: "", captura: "", comentarios: ""
  },
  {
    nombre: "Inventario", icono: "inventario",
    …
  }
]
```

Ajuste también `columnas` según cuántas cajas quiera por fila.

---

## 8. Colores

Los colores provienen del documento oficial y se cambian en `contenido/contenido.js`:

| Elemento | Activo | Atenuado |
|---|---|---|
| Project Agenda | `#EB9471` | `#F6CFBF` |
| ES-Sigma | `#F0CC8B` | `#F8E8CB` |
| SAP | `#00537B` | `#8CB1C3` |
| Azul ES-METALS | `#268DC2` | — |
| Gris ES-METALS | `#C7C6C6` | — |

---

## 9. Estructura de carpetas

```
CADENA DE VALOR ES-METALS/
├── index.html              ← abrir con doble clic
├── LEEME.md                ← este archivo
├── contenido/
│   └── contenido.js        ← ÚNICO archivo a editar
├── assets/
│   ├── css/estilos.css     ← diseño (no requiere edición)
│   ├── js/app.js           ← motor (no requiere edición)
│   └── img/                ← logos
├── medios/
│   ├── imagenes/           ← sus imágenes y capturas
│   └── videos/             ← sus videos
└── documentos/
    └── CADENA DE VALOR ESM (fuente).pdf
```

---

## 10. Compartir la presentación

Comprima la carpeta completa en un `.zip` y envíela. Quien la reciba solo debe
descomprimirla y abrir `index.html`. No necesita internet ni instalar programas.
