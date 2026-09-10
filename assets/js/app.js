/* ==========================================================================
   ES-METALS · Ecosistema Tecnológico
   Motor de la presentación.
   NO es necesario editar este archivo para cambiar el contenido:
   todo el contenido vive en  contenido/contenido.js
   ========================================================================== */
(function () {
  'use strict';

  var C = window.ESM_CONTENIDO;

  if (!C) {
    document.body.innerHTML =
      '<div style="font-family:Segoe UI,sans-serif;padding:60px;max-width:760px">' +
      '<h1 style="font-weight:600">No se pudo cargar el contenido</h1>' +
      '<p style="color:#55677A;line-height:1.6">Revise el archivo <code>contenido/contenido.js</code>. ' +
      'Es probable que falte una coma, una comilla o una llave. Abra la consola del navegador (tecla F12) ' +
      'para ver la línea exacta del error.</p></div>';
    return;
  }

  /* ---------------------------------------------------------------- ICONOS */
  var ICONOS = {
    mercadeo:      '<path d="M3 10v4h3l5 4V6L6 10H3z"/><path d="M15.5 9.5a3.5 3.5 0 010 5"/><path d="M18 7a7 7 0 010 10"/>',
    proyectos:     '<path d="M9 4h6v3H9z"/><path d="M15 5.5h3v15H6v-15h3"/><path d="M9 12.5l2 2 4-4"/>',
    ingenieria:    '<path d="M4 20l1.2-4.2L15.4 5.6a2 2 0 012.8 0l.2.2a2 2 0 010 2.8L8.2 18.8 4 20z"/><path d="M13.5 7.5l3 3"/>',
    comercial:     '<path d="M20.6 12.6L13 20.2a1.5 1.5 0 01-2.1 0l-7-7A1.5 1.5 0 013.5 12V4.5A1.5 1.5 0 015 3h7.5c.4 0 .8.2 1.1.4l7 7a1.5 1.5 0 010 2.2z"/><circle cx="7.9" cy="7.9" r="1.3"/>',
    compras:       '<path d="M3 4h2l2.2 10.4a1.5 1.5 0 001.5 1.2h7.9a1.5 1.5 0 001.5-1.2L20 7.2H6"/><circle cx="9.5" cy="19.4" r="1.4"/><circle cx="16.5" cy="19.4" r="1.4"/>',
    produccion:    '<path d="M3 20V9.5l5 3.5V9.5l5 3.5V9.5l5 3.5V20z"/><path d="M6.5 20v-3"/><path d="M12 20v-3"/><path d="M17.5 20v-3"/>',
    instalacion:   '<path d="M4 21V6l9-3v18"/><path d="M13 10.5h7V21"/><path d="M7.6 8.5v.01M7.6 12v.01M7.6 15.5v.01M16.4 14.5v.01M16.4 18v.01"/>',
    facturacion:   '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9.5 8.5h5"/><path d="M9.5 12.5h5"/>',
    inventario:    '<path d="M3 8l9-4 9 4-9 4z"/><path d="M3 8v8l9 4 9-4V8"/><path d="M12 12v8"/>',
    almacen:       '<path d="M3 8l9-4 9 4-9 4z"/><path d="M3 8v8l9 4 9-4V8"/><path d="M12 12v8"/>',
    contabilidad:  '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8.5 7.5h7"/><path d="M8.6 12v.01M12 12v.01M15.4 12v.01M8.6 16v.01M12 16v.01M15.4 16v.01"/>',
    finanzas:      '<circle cx="12" cy="12" r="9"/><path d="M12 6.4v11.2"/><path d="M14.8 9.3c-.5-.9-1.6-1.4-2.8-1.4-1.6 0-2.9.9-2.9 2.1 0 1.3 1.2 1.9 2.9 2.2 1.7.3 2.9.9 2.9 2.2 0 1.2-1.3 2.1-2.9 2.1-1.2 0-2.3-.5-2.8-1.4"/>',
    comercio:      '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
    rrhh:          '<circle cx="9" cy="8.5" r="3"/><path d="M3 20c0-3.3 2.7-5.6 6-5.6s6 2.3 6 5.6"/><path d="M16 5.7a3 3 0 010 5.6"/><path d="M17.6 14.9c2 .6 3.4 2.2 3.4 4.3"/>',
    ti:            '<rect x="3" y="4" width="18" height="6" rx="1.6"/><rect x="3" y="14" width="18" height="6" rx="1.6"/><path d="M7 7v.01M7 17v.01"/>',
    sst:           '<path d="M12 3l7.5 3v6c0 4.3-3 7.7-7.5 9-4.5-1.3-7.5-4.7-7.5-9V6z"/><path d="M9 12.2l2.2 2.2 4-4.4"/>',
    ambiental:     '<path d="M20 4c0 9-5.2 13-9.5 13A5.5 5.5 0 015 11.5C5 7 9.5 4 20 4z"/><path d="M15.5 8.5C11 11 8 15 6.5 20"/>',
    mantenimiento: '<path d="M15.2 3.6a5.5 5.5 0 00-5.6 8.8L3.8 18.2a1.8 1.8 0 002.5 2.5l5.8-5.8a5.5 5.5 0 008.1-6.1l-3.1 3.1-2.9-.7-.7-2.9z"/>',
    proceso:       '<circle cx="5.5" cy="12" r="2.5"/><circle cx="18.5" cy="6" r="2.5"/><circle cx="18.5" cy="18" r="2.5"/><path d="M7.9 10.9l8.3-3.7"/><path d="M7.9 13.1l8.3 3.7"/>',
    check:         '<path d="M4.5 12.6l5 5 10.5-10.5"/>',
    imagen:        '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.6"/><path d="M4 17.2l5-4.5 4 3.4 3-2.4 4 3.5"/>',
    video:         '<rect x="3" y="5.5" width="12.5" height="13" rx="2"/><path d="M15.5 10.5L21 7v10l-5.5-3.5z"/>',
    lupa:          '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/>',
    info:          '<circle cx="12" cy="12" r="9"/><path d="M12 11.2v5.3"/><path d="M12 7.7v.01"/>'
  };

  function svg(nombre, clase) {
    var d = ICONOS[nombre] || ICONOS.proceso;
    return '<svg viewBox="0 0 24 24"' + (clase ? ' class="' + clase + '"' : '') + '>' + d + '</svg>';
  }

  /* ------------------------------------------------------------ UTILIDADES */
  function esc(t) {
    return String(t == null ? '' : t)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function $(sel) { return document.querySelector(sel); }
  function crear(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstElementChild; }
  function lleno(v) { return typeof v === 'string' && v.trim() !== ''; }
  function lista(v) { return Array.isArray(v) ? v : []; }

  /* --------------------------------------------------------------- MARCA */
  var marca = C.marca || {};
  if (lleno(marca.colorPrimario))   document.documentElement.style.setProperty('--azul', marca.colorPrimario);
  if (lleno(marca.colorSecundario)) document.documentElement.style.setProperty('--gris', marca.colorSecundario);

  var SOFTWARES = lista(C.softwares);
  var escenario = $('#escenario');

  /* Elementos del tablero, de izquierda a derecha. Cada uno es:
       - { tipo:"caja",  ...proceso }                         caja alta suelta
       - { tipo:"grupo", transversal, procesos, columnas }    barra + cuadrícula

     Un sistema puede definirlos de tres formas, de la más nueva a la más simple:
       - elementos: [ ... ]                    (permite alternar cajas y grupos)
       - destacado + grupos: [ ... ]
       - transversal + procesos                (un solo grupo)                   */
  function elementosDe(s) {
    if (Array.isArray(s.elementos) && s.elementos.length) {
      return s.elementos.map(function (e) {
        return e && e.tipo === 'caja' ? e : (e && e.tipo ? e : mezclar(e, { tipo: 'grupo' }));
      });
    }
    var r = [];
    if (s.destacado) r.push(mezclar(s.destacado, { tipo: 'caja' }));
    if (Array.isArray(s.grupos) && s.grupos.length) {
      s.grupos.forEach(function (g) { r.push(mezclar(g, { tipo: 'grupo' })); });
    } else {
      r.push({ tipo: 'grupo', transversal: s.transversal || null,
               procesos: lista(s.procesos), columnas: s.columnas });
    }
    return r;
  }

  function mezclar(origen, extra) {
    var o = {}, k;
    for (k in (origen || {})) { if (Object.prototype.hasOwnProperty.call(origen, k)) o[k] = origen[k]; }
    for (k in extra) { if (Object.prototype.hasOwnProperty.call(extra, k)) o[k] = extra[k]; }
    return o;
  }

  /* Compatibilidad: los grupos del tablero, sin las cajas sueltas */
  function gruposDe(s) {
    return elementosDe(s).filter(function (e) { return e.tipo !== 'caja'; });
  }

  /* Devuelve todos los procesos de un sistema, en el orden del tablero */
  function procesosDe(s) {
    var r = [];
    elementosDe(s).forEach(function (e, gi) {
      if (e.tipo === 'caja') { r.push({ p: e, clave: 'caja-' + gi }); return; }
      if (e.transversal) r.push({ p: e.transversal, clave: 'transversal-' + gi });
      lista(e.procesos).forEach(function (p, i) { r.push({ p: p, clave: 'proceso-' + gi + '-' + i }); });
      if (e.transversalInferior) r.push({ p: e.transversalInferior, clave: 'inferior-' + gi });
    });
    return r;
  }

  /* Busca un proceso por su clave dentro del sistema */
  function procesoPorClave(s, clave) {
    var encontrado = null;
    procesosDe(s).forEach(function (t) { if (t.clave === clave) encontrado = t.p; });
    return encontrado;
  }

  /* ================================================================ PORTADA */
  function laminaPortada() {
    var p = C.portada || {};
    var conceptos = lista(p.conceptos).map(function (c, i) {
      return '<span class="concepto" style="animation-delay:' + (0.3 + i * 0.08) + 's">' + esc(c) + '</span>';
    }).join('');

    return crear(
      '<section class="lamina" data-lamina="portada">' +
        '<div class="lamina-interior portada">' +
          '<div>' +
            '<div class="portada-marca">' +
              '<img src="' + esc(marca.logo || '') + '" alt="' + esc(marca.empresa || '') + '">' +
              (lleno(p.grupo) ? '<span>' + esc(p.grupo) + '</span>' : '') +
            '</div>' +
            (lleno(p.etiqueta) ? '<p class="rotulo">' + esc(p.etiqueta) + '</p>' : '') +
            '<h1 class="portada-titulo">' + esc(p.titulo || '') + '</h1>' +
            '<div class="portada-regla"></div>' +
            '<p class="portada-subtitulo">' + esc(p.subtitulo || '') + '</p>' +
            '<p class="portada-descripcion">' + esc(p.descripcion || '') + '</p>' +
            '<div class="conceptos">' + conceptos + '</div>' +
            (lleno(p.pie) ? '<p class="portada-pie">' + esc(p.pie) + '</p>' : '') +
          '</div>' +
          '<div class="orbita">' + orbitaSVG() + '</div>' +
        '</div>' +
      '</section>'
    );
  }

  /* Diagrama del ecosistema: núcleo ES-METALS y, en cada extremo, el logo de
     un sistema. El flujo hacia cada uno usa su color corporativo.  */
  var ORBITA_ALTO_LOGO = 34;    // altura común de todos los logos
  var ORBITA_ANCHO_MAX = 250;   // tope de ancho, para los logos muy alargados

  /* Los logos tienen proporciones muy distintas (el de Project Agenda es siete
     veces más ancho que alto; el de SAP, dos). Para que ninguno se vea más
     pequeño que otro se mide cada archivo y se les da la misma altura. */
  /* El logo del núcleo se mide igual que los demás. Sin medirlo, la caja del
     SVG casi nunca coincide con la proporción del archivo y el logo queda
     centrado y pequeño dentro de un espacio mucho mayor. */
  function ajustarLogoNucleo(raiz) {
    var img = raiz.querySelector('.orbita-nucleo-logo');
    if (!img) return;
    var cx  = parseFloat(img.getAttribute('data-cx'));
    var cy  = parseFloat(img.getAttribute('data-cy'));
    var alto = parseFloat(img.getAttribute('data-alto'));
    var anchoMax = parseFloat(img.getAttribute('data-ancho'));
    var ruta = img.getAttribute('href') || img.getAttribute('xlink:href');
    if (!ruta || isNaN(cx)) return;

    var medida = new Image();
    medida.onload = function () {
      if (!medida.naturalWidth || !medida.naturalHeight) return;
      var prop = medida.naturalWidth / medida.naturalHeight;
      var h = alto, w = h * prop;
      if (w > anchoMax) { w = anchoMax; h = w / prop; }
      img.setAttribute('x', cx - w / 2);
      img.setAttribute('y', cy - h / 2);
      img.setAttribute('width', w);
      img.setAttribute('height', h);
    };
    medida.src = ruta;
  }

  function ajustarLogosOrbita(raiz) {
    Array.prototype.forEach.call(raiz.querySelectorAll('.orbita-nodo'), function (nodo) {
      var img = nodo.querySelector('image');
      if (!img) return;
      var cx = parseFloat(nodo.getAttribute('data-cx'));
      var cy = parseFloat(nodo.getAttribute('data-cy'));
      var ruta = img.getAttribute('href') || img.getAttribute('xlink:href');
      if (!ruta || isNaN(cx)) return;

      var medida = new Image();
      medida.onload = function () {
        if (!medida.naturalWidth || !medida.naturalHeight) return;
        var prop = medida.naturalWidth / medida.naturalHeight;
        var h = ORBITA_ALTO_LOGO;
        var w = h * prop;
        if (w > ORBITA_ANCHO_MAX) { w = ORBITA_ANCHO_MAX; h = w / prop; }

        img.setAttribute('x', cx - w / 2);
        img.setAttribute('y', cy - h / 2);
        img.setAttribute('width', w);
        img.setAttribute('height', h);

        var toque = nodo.querySelector('.orbita-toque');
        if (toque) {
          toque.setAttribute('x', cx - w / 2 - 8);
          toque.setAttribute('y', cy - h / 2 - 10);
          toque.setAttribute('width', w + 16);
          toque.setAttribute('height', h + 20);
        }
      };
      medida.src = ruta;
    });
  }

  function orbitaSVG() {
    // rc: radio del núcleo. Manda el tamaño del logo central de ES-METALS,
    // que se dibuja dentro de él (ver más abajo).
    var cx = 200, cy = 200, R = 150, rn = 30, rc = 84;
    var n = Math.max(SOFTWARES.length, 1);
    var lineas = '', nodos = '';

    SOFTWARES.forEach(function (s, i) {
      // Sentido antihorario: el primer sistema arriba y los siguientes hacia la izquierda
      var a = (-90 - (360 / n) * i) * Math.PI / 180;
      var col = s.color || '#268DC2';
      var x  = cx + R * Math.cos(a),        y  = cy + R * Math.sin(a);
      var x1 = cx + (rc - 2) * Math.cos(a), y1 = cy + (rc - 2) * Math.sin(a);
      var x2 = cx + (R - rn) * Math.cos(a), y2 = cy + (R - rn) * Math.sin(a);

      lineas +=
        '<line class="orbita-linea" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/>' +
        '<line class="orbita-flujo" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"' +
          ' stroke="' + esc(col) + '" style="animation-delay:' + (i * 0.6) + 's"/>';

      // En cada extremo va el logo del sistema. El tamaño definitivo se calcula
      // en ajustarLogosOrbita(), midiendo cada archivo para que todos queden a
      // la misma altura pese a sus proporciones tan distintas.
      var lw = 150, lh = ORBITA_ALTO_LOGO;
      var etiqueta = lleno(s.logo)
        ? '<image class="orbita-logo" href="' + esc(s.logo) + '" xlink:href="' + esc(s.logo) + '"' +
            ' x="' + (x - lw / 2) + '" y="' + (y - lh / 2) + '" width="' + lw + '" height="' + lh + '"' +
            ' preserveAspectRatio="xMidYMid meet"><title>' + esc(s.nombre || '') + '</title></image>'
        : '<text class="orbita-etiqueta" x="' + x + '" y="' + y + '">' + esc(s.nombre || '') + '</text>';

      nodos +=
        '<g class="orbita-nodo" data-orbita-sw="' + esc(s.id) + '"' +
           ' data-cx="' + x + '" data-cy="' + y + '"' +
           ' tabindex="0" role="button" aria-label="Ver ' + esc(s.nombre || '') + '">' +
          '<rect class="orbita-toque" x="' + (x - lw / 2 - 8) + '" y="' + (y - lh / 2 - 10) + '"' +
            ' width="' + (lw + 16) + '" height="' + (lh + 20) + '" rx="12"/>' +
          etiqueta +
        '</g>';
    });

    return '<svg viewBox="0 0 400 400" role="img" aria-label="Ecosistema tecnológico ES-METALS">' +
        '<circle class="orbita-anillo" cx="200" cy="200" r="176"/>' +
        '<g class="orbita-giro">' +
          '<circle class="orbita-anillo orbita-anillo--punteado" cx="200" cy="200" r="' + R + '"/>' +
        '</g>' +
        '<circle class="orbita-pulso" cx="200" cy="200" r="' + rc + '"/>' +
        lineas +
        '<circle class="orbita-nucleo" cx="200" cy="200" r="' + rc + '"/>' +
        '<image class="orbita-nucleo-logo"' +
          ' href="' + esc(marca.logo || '') + '" xlink:href="' + esc(marca.logo || '') + '"' +
          ' data-cx="' + cx + '" data-cy="' + (cy - 10) + '" data-alto="58" data-ancho="132"' +
          ' x="' + (cx - 62) + '" y="' + (cy - 39) + '" width="124" height="58"' +
          ' preserveAspectRatio="xMidYMid meet"/>' +
        '<text class="orbita-centro" x="' + cx + '" y="' + (cy + 42) + '">' +
          esc((C.portada || {}).nucleo || 'Ecosistema') + '</text>' +
        nodos +
      '</svg>';
  }

  /* =================================================== CADENA CORPORATIVA */
  function laminaCadena() {
    var cc = C.cadenaCorporativa || {};
    var prim = lista(cc.primarias), apoyo = lista(cc.apoyo);

    var htmlPrim = prim.map(function (a, i) {
      return '<button class="eslabon" data-tipo="corp" data-grupo="primarias" data-i="' + i + '"' +
             ' style="animation-delay:' + (0.05 * i) + 's">' +
               '<span class="eslabon-num">' + ('0' + (i + 1)).slice(-2) + '</span>' +
               '<span class="eslabon-icono">' + svg(a.icono) + '</span>' +
               '<span class="eslabon-nombre">' + esc(a.nombre) + '</span>' +
             '</button>';
    }).join('');

    var htmlApoyo = apoyo.map(function (a, i) {
      return '<button class="apoyo-item" data-tipo="corp" data-grupo="apoyo" data-i="' + i + '"' +
             ' style="animation-delay:' + (0.26 + 0.04 * i) + 's">' +
               svg(a.icono) + '<span>' + esc(a.nombre) + '</span>' +
             '</button>';
    }).join('');

    return crear(
      '<section class="lamina" data-lamina="cadena">' +
        '<div class="lamina-interior">' +
          '<header class="lamina-cabecera">' +
            (lleno(cc.etiqueta) ? '<p class="rotulo">' + esc(cc.etiqueta) + '</p>' : '') +
            '<h2 class="titulo">' + esc(cc.titulo || '') + '</h2>' +
            '<p class="subtitulo">' + esc(cc.subtitulo || '') + '</p>' +
          '</header>' +
          '<p class="primarias-titulo">' + esc(cc.tituloPrimarias || 'Procesos primarios') + '</p>' +
          '<div class="cadena-corp">' + htmlPrim + '</div>' +
          '<p class="apoyo-titulo">' + esc(cc.tituloApoyo || 'Procesos de apoyo') + '</p>' +
          '<div class="apoyo-rejilla">' + htmlApoyo + '</div>' +
        '</div>' +
      '</section>'
    );
  }

  /* ====================================================== MAPA (estructura
     del documento oficial: franjas + bloques por sistema) ================= */
  function caja(s, clave, p, clases, extra) {
    // Una caja puede traer color propio (p.color / p.colorSuave); si no, usa el del sistema
    var propio = '';
    if (lleno(p.color)) {
      propio = '--color:' + esc(p.color) +
               ';--color-suave:' + esc(lleno(p.colorSuave) ? p.colorSuave : p.color) + ';';
    }
    var estilo = propio ? ' style="' + propio + '"' : '';
    // si "extra" ya trae un style, se fusionan
    if (propio && /style="/.test(extra || '')) {
      estilo = '';
      extra = (extra || '').replace('style="', 'style="' + propio);
    }
    return '<button class="caja ' + (clases || '') + '" data-tipo="proceso"' +
             ' data-sw="' + esc(s.id) + '" data-clave="' + esc(clave) + '"' + estilo + (extra || '') + '>' +
             esc(p.nombre) +
             '<span class="caja-lupa">' + svg('lupa') + '</span>' +
           '</button>';
  }

  /* ¿El grupo concentra todo el contenido en su barra transversal? */
  function esConsolidado(g) { return !!(g && g.detalleConsolidado); }

  /* Índice del elemento al que pertenece una clave
     ('caja-0', 'transversal-1', 'proceso-1-0', 'inferior-1') */
  function grupoDeClave(clave) {
    var m = /^(?:caja|transversal|proceso|inferior)-(\d+)/.exec(clave || '');
    return m ? parseInt(m[1], 10) : -1;
  }

  function bloqueHTML(s) {
    var elementos = elementosDe(s);
    var hayContenido = elementos.some(function (e) {
      return e.tipo === 'caja' || lista(e.procesos).length;
    });

    var elementosHTML = elementos.map(function (e, gi) {
      // Caja alta suelta: ocupa todo el alto del tablero
      if (e.tipo === 'caja') {
        return caja(s, 'caja-' + gi, e, 'caja--destacada',
                    ' style="flex:' + (+e.peso || 1) + ' 1 0"');
      }

      var procesos = lista(e.procesos);
      var cols = Math.max(1, +e.columnas || +s.columnas || procesos.length || 1);
      var peso = +e.peso || procesos.length || 1;

      // "ancho" deja que una caja ocupe varias columnas de la cuadrícula,
      // para armar filas con distinto número de cajas (2 arriba, 3 abajo...)
      var rejilla = procesos.length
        ? '<div class="procesos" style="--cols:' + cols + '">' +
            procesos.map(function (p, i) {
              var span = Math.max(1, Math.min(cols, +p.ancho || 1));
              var extraCaja = span > 1 ? ' style="grid-column:span ' + span + '"' : '';
              return caja(s, 'proceso-' + gi + '-' + i, p, '', extraCaja);
            }).join('') +
          '</div>'
        : '';

      var extra = esConsolidado(e) ? ' data-consolidado="1"' : '';
      return '<div class="grupo" style="flex:' + peso + ' 1 0">' +
               (e.transversal
                 ? caja(s, 'transversal-' + gi, e.transversal, 'caja--transversal', extra)
                 : '') +
               rejilla +
               (e.transversalInferior
                 ? caja(s, 'inferior-' + gi, e.transversalInferior, 'caja--transversal')
                 : '') +
             '</div>';
    }).join('');

    var tablero = hayContenido
      ? '<div class="tablero">' + elementosHTML + '</div>'
      : '<div class="tablero"><div class="bloque-vacio">' +
          esc(s.vacio || 'Procesos por definir') + '</div></div>';

    var marca = lleno(s.logo)
      ? '<img src="' + esc(s.logo) + '" alt="' + esc(s.nombre) + '">'
      : '<span>' + esc(s.nombre) + '</span>';

    // Si el sistema tiene ficha propia, su logo abre el detalle del sistema
    var logo = s.detalle
      ? '<button class="bloque-logo bloque-logo--activo" data-sistema="' + esc(s.id) + '"' +
          ' title="Ver ' + esc(s.nombre) + '">' + marca +
          '<span class="bloque-logo-mas">' + svg('lupa') + '</span></button>'
      : '<div class="bloque-logo">' + marca + '</div>';

    return '<article class="bloque" data-id="' + esc(s.id) + '"' +
             ' style="--color:' + esc(s.color || '#268DC2') +
                    ';--color-suave:' + esc(s.colorSuave || s.color || '#C7C6C6') +
                    ';flex:' + (+s.peso || 1) + ' 1 0">' +
             logo +
             tablero +
           '</article>';
  }

  function laminaMapa() {
    var e = C.mapa || C.ecosistema || {};
    var b1 = SOFTWARES.filter(function (s) { return (+s.banda || 2) === 1; });
    var b2 = SOFTWARES.filter(function (s) { return (+s.banda || 2) !== 1; });

    var html = '';
    if (b1.length) html += '<div class="banda">' + b1.map(bloqueHTML).join('') + '</div>';
    if (b1.length && b2.length) html += '<div class="separador"></div>';
    if (b2.length) html += '<div class="banda">' + b2.map(bloqueHTML).join('') + '</div>';

    return crear(
      '<section class="lamina" data-lamina="mapa">' +
        '<div class="lamina-interior">' +
          '<header class="lamina-cabecera">' +
            '<p class="rotulo" id="mapa-rotulo">' + esc(e.etiqueta || 'Vista general') + '</p>' +
            '<h2 class="titulo" id="mapa-titulo">' + esc(e.titulo || '') + '</h2>' +
            '<p class="subtitulo" id="mapa-subtitulo">' + esc(e.subtitulo || '') + '</p>' +
          '</header>' +
          '<div class="mapa" id="mapa">' + html + '</div>' +
          '<p class="mapa-nota">' + svg('info') + '<span>' + esc(e.instruccion || '') + '</span></p>' +
        '</div>' +
      '</section>'
    );
  }

  /* ================================================================= CIERRE */
  function laminaCierre() {
    var c = C.cierre || {};
    var puntos = lista(c.puntos).map(function (p, i) {
      return '<div class="cierre-punto" style="animation-delay:' + (0.08 + i * 0.09) + 's">' +
        '<b>' + esc(p.titulo) + '</b><span>' + esc(p.texto) + '</span></div>';
    }).join('');

    return crear(
      '<section class="lamina" data-lamina="cierre">' +
        '<div class="lamina-interior">' +
          '<header class="lamina-cabecera">' +
            (lleno(c.etiqueta) ? '<p class="rotulo">' + esc(c.etiqueta) + '</p>' : '') +
            '<h2 class="titulo">' + esc(c.titulo || '') + '</h2>' +
          '</header>' +
          '<p class="cierre-mensaje">' + esc(c.mensaje || '') + '</p>' +
          '<div class="cierre-rejilla">' + puntos + '</div>' +
          '<p class="cierre-pie">' + esc(c.pie || '') + '</p>' +
        '</div>' +
      '</section>'
    );
  }

  /* =========================================================== CONSTRUCCIÓN */
  var pasos = [];

  escenario.appendChild(laminaPortada());
  ajustarLogosOrbita(escenario);
  ajustarLogoNucleo(escenario);
  pasos.push({ lamina: 'portada', nombre: 'Portada', color: marca.colorPrimario });

  if ((C.cadenaCorporativa || {}).activa !== false) {
    escenario.appendChild(laminaCadena());
    pasos.push({ lamina: 'cadena', nombre: 'Cadena de Valor', color: marca.colorPrimario });
  }

  escenario.appendChild(laminaMapa());
  pasos.push({ lamina: 'mapa', foco: null, nombre: (C.mapa || {}).etiqueta || 'Vista general', color: marca.colorPrimario });
  SOFTWARES.forEach(function (s) {
    pasos.push({ lamina: 'mapa', foco: s.id, nombre: s.nombre, color: s.color, sw: s });
  });

  if ((C.cierre || {}).activa !== false) {
    escenario.appendChild(laminaCierre());
    pasos.push({ lamina: 'cierre', nombre: 'Cierre', color: marca.colorPrimario });
  }

  var mapa = $('#mapa');
  var bloques = Array.prototype.slice.call(mapa.querySelectorAll('.bloque'));
  var laminas = {};
  Array.prototype.forEach.call(escenario.children, function (l) { laminas[l.dataset.lamina] = l; });

  /* ------------------------------------------------------ Barra y controles */
  $('#barra-grupo').textContent = marca.grupo || '';
  if (lleno(marca.logo)) $('#barra-logo').src = marca.logo;

  var nav = $('#barra-nav');
  var puntos = $('#controles-puntos');
  pasos.forEach(function (p, i) {
    var b = document.createElement('button');
    b.className = 'pastilla';
    b.textContent = p.nombre;
    b.style.setProperty('--acento', p.color || '#268DC2');
    b.addEventListener('click', function () { irA(i); });
    nav.appendChild(b);

    var d = document.createElement('button');
    d.className = 'punto';
    d.title = p.nombre;
    d.setAttribute('aria-label', p.nombre);
    d.addEventListener('click', function () { irA(i); });
    puntos.appendChild(d);
  });

  /* --------------------------------------------------------- NAVEGACIÓN --- */
  var actual = -1;

  function irA(i) {
    i = Math.max(0, Math.min(pasos.length - 1, i));
    if (i === actual) return;
    var previo = pasos[actual];
    var paso = pasos[i];
    actual = i;

    Object.keys(laminas).forEach(function (k) {
      laminas[k].classList.toggle('activa', k === paso.lamina);
    });

    if (paso.lamina === 'mapa') {
      if (paso.foco) mapa.dataset.foco = paso.foco; else delete mapa.dataset.foco;
      bloques.forEach(function (b) {
        b.classList.toggle('enfocado', !!paso.foco && b.dataset.id === paso.foco);
      });
      cabeceraMapa(paso, !!previo && previo.lamina === 'mapa');
    }

    Array.prototype.forEach.call(nav.children,    function (b, k) { b.classList.toggle('activa', k === i); });
    Array.prototype.forEach.call(puntos.children, function (b, k) { b.classList.toggle('activo', k === i); });
    $('#controles-contador').textContent = (i + 1) + ' / ' + pasos.length;
    $('#progreso-barra').style.width = (pasos.length > 1 ? (i / (pasos.length - 1)) * 100 : 100) + '%';
    $('#btn-anterior').disabled = i === 0;
    $('#btn-siguiente').disabled = i === pasos.length - 1;
    document.body.classList.toggle('en-portada', paso.lamina === 'portada');

    cerrarPanel();
    if (location.hash.slice(1) !== String(i)) history.replaceState(null, '', '#' + i);
  }

  function cabeceraMapa(paso, animar) {
    var e = C.mapa || {};
    var datos = paso.sw
      ? { r: paso.sw.categoria || 'Sistema', t: paso.sw.nombre, s: paso.sw.resumen || '' }
      : { r: e.etiqueta || 'Vista general', t: e.titulo || '', s: e.subtitulo || '' };

    var cab = laminas.mapa.querySelector('.lamina-cabecera');
    cab.style.setProperty('--acento', paso.color || '#268DC2');

    function pintar() {
      $('#mapa-rotulo').textContent = datos.r;
      $('#mapa-titulo').textContent = datos.t;
      $('#mapa-subtitulo').textContent = datos.s;
      cab.style.opacity = '1';
      cab.style.transform = 'none';
    }
    if (animar) {
      cab.style.transition = 'opacity .2s ease, transform .2s ease';
      cab.style.opacity = '0';
      cab.style.transform = 'translateY(-6px)';
      setTimeout(pintar, 185);
    } else { pintar(); }
  }

  function siguiente() { irA(actual + 1); }
  function anterior()  { irA(actual - 1); }

  $('#btn-siguiente').addEventListener('click', siguiente);
  $('#btn-anterior').addEventListener('click', anterior);
  $('#ir-inicio').addEventListener('click', function (ev) { ev.preventDefault(); irA(0); });

  /* -------------------------------------------------------------- PANEL --- */
  var panel = $('#panel'), velo = $('#velo'), cuerpo = $('#panel-cuerpo');
  var panelFijado = false;   // true = abierto con clic; false = abierto al pasar el cursor

  /* Normaliza la lista "imagenes": acepta "ruta.png" o { archivo, titulo } */
  function galeriaDe(d) {
    return lista(d.imagenes).map(function (m) {
      return typeof m === 'string' ? { archivo: m, titulo: '' } : (m || {});
    }).filter(function (m) { return lleno(m.archivo); });
  }

  /* Añade la versión de los medios a la ruta, para que al reemplazar una
     imagen conservando su nombre el navegador no muestre la que tenía en caché. */
  function conVersion(ruta) {
    var v = lleno(C.version) ? C.version.trim() : '';
    if (!v || !lleno(ruta) || /^(https?:)?\/\//i.test(ruta) || ruta.indexOf('?') >= 0) return ruta;
    return ruta + '?v=' + encodeURIComponent(v);
  }

  function figuraImagen(titulo, ruta, numero) {
    return '<figure class="medio">' +
             '<figcaption>' + (numero ? '<i>' + ('0' + numero).slice(-2) + '</i>' : '') + esc(titulo) + '</figcaption>' +
             '<img class="ampliable" src="' + esc(conVersion(ruta)) + '" alt="' + esc(titulo) + '" loading="lazy">' +
           '</figure>';
  }

  function figuraVideo(titulo, ruta) {
    return '<figure class="medio"><figcaption>' + esc(titulo) + '</figcaption>' +
           '<video src="' + esc(conVersion(ruta)) + '" controls preload="metadata"></video></figure>';
  }

  function medioVacio(titulo, tipo) {
    var carpeta = tipo === 'video' ? 'medios/videos/' : 'medios/imagenes/';
    return '<div class="medio medio-vacio">' + svg(tipo === 'video' ? 'video' : 'imagen') +
           '<b>Espacio disponible para ' + esc(titulo.toLowerCase()) + '</b>' +
           '<code>' + esc(carpeta) + 'archivo' + (tipo === 'video' ? '.mp4' : '.jpg') + '</code></div>';
  }

  function abrirPanel(d) {
    var presentando = document.body.classList.contains('presentacion');
    panel.style.setProperty('--acento', d.color || '#268DC2');

    // ---- Cabecera ----
    var html = '<header class="panel-cabecera">';
    if (lleno(d.origen)) html += '<p class="panel-origen"><i></i>' + esc(d.origen) + '</p>';
    html += '<h2 class="panel-titulo" id="panel-titulo">' + esc(d.titulo) + '</h2>';
    if (lleno(d.ruta)) html += '<p class="panel-ruta">' + esc(d.ruta) + '</p>';
    html += '</header>';

    // ---- Columna de texto ----
    var texto = '';
    if (lleno(d.descripcion)) texto += '<p class="panel-descripcion">' + esc(d.descripcion) + '</p>';

    var beneficios = lista(d.beneficios).filter(lleno);
    if (beneficios.length) {
      texto += '<div class="panel-seccion"><h3>Beneficios</h3><ul class="lista-beneficios">' +
        beneficios.map(function (b) { return '<li>' + svg('check') + '<span>' + esc(b) + '</span></li>'; }).join('') +
        '</ul></div>';
    }

    var areas = lista(d.areas).filter(lleno);
    if (areas.length) {
      texto += '<div class="panel-seccion"><h3>Áreas involucradas</h3><div class="fichas">' +
        areas.map(function (a) { return '<span class="ficha">' + esc(a) + '</span>'; }).join('') +
        '</div></div>';
    }

    // Procesos que cubre el frente transversal (detalle consolidado)
    var procesos = lista(d.procesos);
    if (procesos.length) {
      texto += '<div class="panel-seccion"><h3>Procesos que cubre</h3><ol class="cubiertos">' +
        procesos.map(function (p) {
          var benef = lista(p.beneficios).filter(lleno);
          return '<li>' +
            '<span class="cubierto-icono">' + svg(p.icono) + '</span>' +
            '<div>' +
              '<b>' + esc(p.nombre) + '</b>' +
              (lleno(p.descripcion) ? '<p>' + esc(p.descripcion) + '</p>' : '') +
              (benef.length ? '<span class="cubierto-benef">' +
                 benef.map(function (x) { return esc(x); }).join('  ·  ') + '</span>' : '') +
            '</div>' +
          '</li>';
        }).join('') + '</ol></div>';
    }

    if (lleno(d.comentarios)) {
      texto += '<div class="panel-seccion"><h3>Comentarios adicionales</h3>' +
        '<p class="comentario">' + esc(d.comentarios) + '</p></div>';
    }

    // ---- Columna de medios ----
    var medios = '';
    if (d.multimedia) {
      var galeria = galeriaDe(d);
      var hayMedios = galeria.length || lleno(d.imagen) || lleno(d.captura) || lleno(d.video);
      if (hayMedios || !presentando) {
        medios += '<div class="panel-seccion"><h3>Evidencia visual</h3>';
        galeria.forEach(function (m, i) {
          medios += figuraImagen(m.titulo || ('Imagen ' + (i + 1)), m.archivo, i + 1);
        });
        if (lleno(d.imagen))  medios += figuraImagen('Imagen', d.imagen);
        if (lleno(d.captura)) medios += figuraImagen('Captura de pantalla', d.captura);
        if (lleno(d.video))   medios += figuraVideo('Video', d.video);
        if (!hayMedios) {
          medios += medioVacio('Imagen', 'imagen') + medioVacio('Video', 'video');
        }
        medios += '</div>';
      }
    }

    html += '<div class="panel-doble">' +
              '<div class="panel-col panel-col--texto">'  + texto  + '</div>' +
              '<div class="panel-col panel-col--medios">' + medios + '</div>' +
            '</div>';

    cuerpo.innerHTML = html;
    cuerpo.scrollTop = 0;
    panel.classList.add('abierto');
    panel.classList.toggle('al-vuelo', !panelFijado);
    panel.setAttribute('aria-hidden', 'false');
    // Al pasar el cursor no se oscurece el mapa: sigue visible detrás
    velo.classList.toggle('visible', panelFijado);
    if (panelFijado) $('#panel-cerrar').focus();
  }

  function cerrarPanel() {
    panel.classList.remove('abierto');
    panel.classList.remove('al-vuelo');
    panel.setAttribute('aria-hidden', 'true');
    velo.classList.remove('visible');
    panelFijado = false;
  }

  $('#panel-cerrar').addEventListener('click', cerrarPanel);
  velo.addEventListener('click', cerrarPanel);

  /* ================== RECORRIDO VISUAL DEL SOFTWARE ======================
     Al hacer clic en CUALQUIER área del mapa se abre el recorrido completo
     del sistema al que pertenece esa área: todas sus capturas, en el orden
     de la cadena de valor, a pantalla casi completa y con scroll vertical.
     El área es solo el punto de entrada; no abre una ficha propia.        */

  /* Todas las pantallas de un sistema, en el orden en que se muestran.

     Si el sistema trae su propia lista "recorrido" en contenido.js, esa lista
     manda: es el guion completo del recorrido, en el orden exacto en que se
     escribió, y puede mezclar imágenes y videos. Si no la trae, el recorrido
     se arma solo con las capturas repartidas por las áreas del tablero.     */
  function mediosDe(sw) {
    var out = [];
    function agregar(o) {
      if (!o) return;
      galeriaDe(o).forEach(function (m) { out.push({ archivo: m.archivo, tipo: 'imagen' }); });
      if (lleno(o.imagen))  out.push({ archivo: o.imagen,  tipo: 'imagen' });
      if (lleno(o.captura)) out.push({ archivo: o.captura, tipo: 'imagen' });
      if (lleno(o.video))   out.push({ archivo: o.video,   tipo: 'video'  });
    }

    if (sw && Array.isArray(sw.recorrido) && sw.recorrido.length) {
      sw.recorrido.forEach(function (m) {
        if (!m || !lleno(m.archivo)) return;
        var tipo = m.tipo === 'video' || /\.(mp4|webm|ogv|mov)$/i.test(m.archivo)
          ? 'video' : 'imagen';
        out.push({ archivo: m.archivo, tipo: tipo });
      });
      return out;
    }

    procesosDe(sw).forEach(function (t) { agregar(t.p); });
    return out;
  }

  var recorrido = crear(
    '<div class="recorrido" id="recorrido" aria-hidden="true" role="dialog" aria-modal="true">' +
      '<header class="recorrido-barra">' +
        '<span class="recorrido-marca"></span>' +
        '<span class="recorrido-contador"></span>' +
        '<button class="recorrido-cerrar" aria-label="Cerrar el recorrido">' +
          '<svg viewBox="0 0 24 24"><path d="M6 6l12 12"/><path d="M18 6L6 18"/></svg>' +
        '</button>' +
      '</header>' +
      '<div class="recorrido-cuerpo"></div>' +
    '</div>'
  );
  document.body.appendChild(recorrido);

  var recCuerpo  = recorrido.querySelector('.recorrido-cuerpo');
  var recIndice  = 0;
  var recObs     = null;

  function abrirRecorrido(sw) {
    var medios = mediosDe(sw);
    recorrido.style.setProperty('--acento', sw.color || '#268DC2');

    recorrido.querySelector('.recorrido-marca').innerHTML = lleno(sw.logo)
      ? '<img src="' + esc(conVersion(sw.logo)) + '" alt="' + esc(sw.nombre) + '">'
      : '<b>' + esc(sw.nombre) + '</b>';

    recCuerpo.innerHTML = medios.length
      ? medios.map(function (m, i) {
          var cuerpo = m.tipo === 'video'
            ? '<video src="' + esc(conVersion(m.archivo)) + '" controls preload="metadata"></video>'
            : '<img src="' + esc(conVersion(m.archivo)) + '"' +
              ' alt="' + esc(sw.nombre) + ' · pantalla ' + (i + 1) + '"' +
              (i < 2 ? '' : ' loading="lazy"') + '>';
          return '<figure class="recorrido-lamina" data-i="' + i + '">' + cuerpo + '</figure>';
        }).join('')
      : '<p class="recorrido-vacio">Este sistema todavía no tiene capturas cargadas.</p>';

    recCuerpo.scrollTop = 0;
    recIndice = 0;
    recorrido.classList.add('abierto');
    recorrido.setAttribute('aria-hidden', 'false');
    document.body.classList.add('con-recorrido');
    seguirRecorrido(medios.length);
    recorrido.querySelector('.recorrido-cerrar').focus();
  }

  /* El contador sigue a la lámina que domina la pantalla */
  function seguirRecorrido(total) {
    var etiqueta = recorrido.querySelector('.recorrido-contador');
    if (recObs) { recObs.disconnect(); recObs = null; }
    if (!total) { etiqueta.textContent = ''; return; }
    etiqueta.textContent = '1 / ' + total;
    if (!window.IntersectionObserver) return;

    recObs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        recIndice = +e.target.dataset.i;
        etiqueta.textContent = (recIndice + 1) + ' / ' + total;
      });
    }, { root: recCuerpo, threshold: 0.55 });

    Array.prototype.forEach.call(recCuerpo.querySelectorAll('.recorrido-lamina'), function (el) {
      recObs.observe(el);
    });
  }

  function moverRecorrido(delta) {
    var laminas = recCuerpo.querySelectorAll('.recorrido-lamina');
    if (!laminas.length) return;
    var i = Math.max(0, Math.min(laminas.length - 1, recIndice + delta));
    laminas[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function cerrarRecorrido() {
    recorrido.classList.remove('abierto');
    recorrido.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('con-recorrido');
    if (recObs) { recObs.disconnect(); recObs = null; }
    recCuerpo.innerHTML = '';
  }

  recorrido.querySelector('.recorrido-cerrar').addEventListener('click', cerrarRecorrido);

  /* Clic en una pantalla del recorrido: la abre a pantalla completa y desde
     ahí se pasa de una a otra como en una presentación (y se puede ampliar
     al tamaño real de la captura).

     El video se reproduce donde está: al hacer clic sobre él manda su propio
     control de reproducción. Aun así entra en la lista del visor, para que la
     numeración coincida con la del recorrido y se llegue a él con las flechas. */
  /* Un clic sobre el cuerpo del video lo reproduce o lo pausa, como en
     cualquier reproductor. Se respeta la franja inferior, que es donde el
     navegador dibuja sus propios controles.

     Va en fase de CAPTURA: los controles nativos del navegador detienen la
     propagación del clic, así que un manejador normal nunca se enteraría. */
  function clicEnVideo(ev) {
    var video = ev.target && ev.target.closest && ev.target.closest('video');
    if (!video) return;
    var caja = video.getBoundingClientRect();
    if (ev.clientY > caja.bottom - 48) return;         // barra de controles
    if (video.paused) { var p = video.play(); if (p && p.catch) p.catch(function () {}); }
    else { video.pause(); }
  }
  recCuerpo.addEventListener('click', clicEnVideo, true);

  /* Mientras el video no ha arrancado se dibuja encima un botón de reproducir
     bien visible: el control propio del navegador queda en el borde inferior
     de la pantalla y cuesta encontrarlo. */
  function marcarVideo(ev) {
    var lamina = ev.target && ev.target.closest && ev.target.closest('.recorrido-lamina');
    if (lamina) lamina.classList.toggle('reproduciendo', !ev.target.paused);
  }
  recCuerpo.addEventListener('play',  marcarVideo, true);
  recCuerpo.addEventListener('pause', marcarVideo, true);
  recCuerpo.addEventListener('ended', marcarVideo, true);

  recCuerpo.addEventListener('click', function (ev) {
    var img = ev.target.closest('.recorrido-lamina img');
    if (!img) return;
    var todas = Array.prototype.slice.call(
      recCuerpo.querySelectorAll('.recorrido-lamina img, .recorrido-lamina video')
    );
    abrirVisor(todas.map(function (x) {
      return {
        src: x.getAttribute('src'),
        titulo: '',
        tipo: x.tagName === 'VIDEO' ? 'video' : 'imagen'
      };
    }), todas.indexOf(img));
  });

  /* Punto de entrada: enfoca el sistema en el mapa y abre su recorrido */
  function entrarASoftware(sw) {
    if (!sw) return;
    var destino = -1;
    pasos.forEach(function (paso, k) { if (paso.foco === sw.id) destino = k; });
    if (destino >= 0 && destino !== actual) {
      irA(destino);
      setTimeout(function () { abrirRecorrido(sw); }, 260);
    } else {
      abrirRecorrido(sw);
    }
  }

  /* ---------------------------------------------------------- VISOR ------
     Las capturas de pantalla se amplían a pantalla completa al hacer clic. */
  var visor = crear(
    '<div class="visor" id="visor" aria-hidden="true">' +
      '<button class="visor-cerrar" aria-label="Cerrar">' +
        '<svg viewBox="0 0 24 24"><path d="M6 6l12 12"/><path d="M18 6L6 18"/></svg>' +
      '</button>' +
      '<button class="visor-nav visor-nav--ant" aria-label="Imagen anterior">' +
        '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>' +
      '</button>' +
      '<button class="visor-nav visor-nav--sig" aria-label="Imagen siguiente">' +
        '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>' +
      '</button>' +
      '<figure>' +
        '<img alt="">' +
        '<video controls preload="metadata" playsinline hidden></video>' +
        '<figcaption><span class="visor-pie"></span><span class="visor-contador"></span></figcaption>' +
      '</figure>' +
      '<div class="visor-puntos"></div>' +
    '</div>'
  );
  document.body.appendChild(visor);

  var visorLista = [];   // {src, titulo} de la sección abierta
  var visorIndice = 0;

  function leerGaleria() {
    return Array.prototype.map.call(cuerpo.querySelectorAll('img.ampliable'), function (img) {
      var pie = img.closest('figure') && img.closest('figure').querySelector('figcaption');
      return {
        src: img.getAttribute('src'),
        titulo: pie ? pie.textContent.replace(/^\s*\d\d\s*/, '').trim() : ''
      };
    });
  }

  function esVideoVisor() {
    var m = visorLista[visorIndice];
    return !!(m && m.tipo === 'video');
  }

  /* Zoom: alterna entre ajustar a la pantalla y el tamaño real de la captura.
     Un video no se amplía: siempre se ve ajustado a la pantalla. */
  function alternarZoom(forzar) {
    var activo = typeof forzar === 'boolean' ? forzar : !visor.classList.contains('zoom');
    if (esVideoVisor()) activo = false;
    visor.classList.toggle('zoom', activo);
    if (activo) {
      var img = visor.querySelector('img');
      // centra la vista al ampliar
      visor.scrollLeft = Math.max(0, (img.naturalWidth  - visor.clientWidth)  / 2);
      visor.scrollTop  = Math.max(0, (img.naturalHeight - visor.clientHeight) / 2);
    } else {
      visor.scrollTo(0, 0);
    }
  }

  function pintarVisor() {
    var m = visorLista[visorIndice];
    if (!m) return;
    var img   = visor.querySelector('img');
    var video = visor.querySelector('video');

    // Un video se detiene y se descarga al salir de él, para no seguir bajando
    // datos de fondo mientras se ven las demás pantallas.
    video.pause();

    if (m.tipo === 'video') {
      img.hidden = true;
      img.removeAttribute('src');
      video.hidden = false;
      if (video.getAttribute('src') !== m.src) video.setAttribute('src', m.src);
    } else {
      video.hidden = true;
      video.removeAttribute('src');
      video.load();
      img.hidden = false;
      img.src = m.src;
      img.alt = m.titulo;
    }

    visor.querySelector('.visor-pie').textContent = m.titulo;
    visor.querySelector('.visor-contador').textContent =
      visorLista.length > 1 ? (visorIndice + 1) + ' / ' + visorLista.length : '';

    var hayVarias = visorLista.length > 1;
    visor.querySelector('.visor-nav--ant').hidden = !hayVarias;
    visor.querySelector('.visor-nav--sig').hidden = !hayVarias;

    var puntos = visor.querySelector('.visor-puntos');
    puntos.innerHTML = hayVarias
      ? visorLista.map(function (x, i) {
          return '<button class="visor-punto' + (i === visorIndice ? ' activo' : '') +
                 '" data-i="' + i + '" aria-label="Imagen ' + (i + 1) + '"></button>';
        }).join('')
      : '';
  }

  function moverVisor(delta) {
    if (!visorLista.length) return;
    visorIndice = (visorIndice + delta + visorLista.length) % visorLista.length;
    alternarZoom(false);
    pintarVisor();
  }

  /* lista: [{src, titulo, tipo}] · indice: por cuál empieza */
  function abrirVisor(lista, indice) {
    visorLista = lista || [];
    visorIndice = Math.max(0, indice || 0);
    if (!visorLista.length) return;
    alternarZoom(false);
    pintarVisor();
    visor.classList.add('abierto');
    visor.setAttribute('aria-hidden', 'false');
  }

  function cerrarVisor() {
    var video = visor.querySelector('video');
    video.pause();
    video.removeAttribute('src');
    video.load();
    visorLista = [];
    visor.classList.remove('abierto');
    visor.setAttribute('aria-hidden', 'true');
    visor.classList.remove('zoom');
    visor.scrollTo(0, 0);
    visor.querySelector('img').removeAttribute('src');
  }

  visor.addEventListener('click', clicEnVideo, true);

  visor.addEventListener('click', function (ev) {
    var punto = ev.target.closest('.visor-punto');
    if (punto) { visorIndice = +punto.dataset.i; alternarZoom(false); pintarVisor(); return; }
    if (ev.target.closest('.visor-nav--ant')) { moverVisor(-1); return; }
    if (ev.target.closest('.visor-nav--sig')) { moverVisor(1);  return; }
    if (ev.target.closest('.visor-cerrar'))   { cerrarVisor();  return; }
    if (ev.target.tagName === 'VIDEO')        { return; }   // lo atiende clicEnVideo
    if (ev.target.tagName === 'IMG')          { alternarZoom(); return; }  // ampliar / ajustar
    if (ev.target.closest('figure'))          { return; }
    cerrarVisor();
  });

  cuerpo.addEventListener('click', function (ev) {
    var img = ev.target.closest('img.ampliable');
    if (!img) return;
    var todas = Array.prototype.slice.call(cuerpo.querySelectorAll('img.ampliable'));
    abrirVisor(leerGaleria(), todas.indexOf(img));
  });

  /* ------------------------------------------------------ INTERACCIONES --- */
  escenario.addEventListener('click', function (ev) {
    // Nodos del diagrama de la portada: llevan al sistema correspondiente
    var nodo = ev.target.closest('[data-orbita-sw]');
    if (nodo) {
      var idSw = nodo.getAttribute('data-orbita-sw');
      var destinoSw = -1;
      pasos.forEach(function (paso, k) { if (paso.foco === idSw) destinoSw = k; });
      if (destinoSw >= 0) irA(destinoSw);
      return;
    }

    // Clic en el logo del sistema: abre su recorrido completo
    var logoSw = ev.target.closest('[data-sistema]');
    if (logoSw) {
      ev.stopPropagation();
      entrarASoftware(SOFTWARES.filter(function (s) { return s.id === logoSw.dataset.sistema; })[0]);
      return;
    }

    // Clic en cualquier área: es solo el punto de entrada al recorrido
    // completo del sistema al que pertenece
    var cajaEl = ev.target.closest('.caja');
    if (cajaEl) {
      ev.stopPropagation();
      entrarASoftware(SOFTWARES.filter(function (s) { return s.id === cajaEl.dataset.sw; })[0]);
      return;
    }

    var corp = ev.target.closest('[data-tipo="corp"]');
    if (corp) {
      panelFijado = true;
      var grupo = lista((C.cadenaCorporativa || {})[corp.dataset.grupo]);
      var a = grupo[parseInt(corp.dataset.i, 10)];
      if (!a) return;
      abrirPanel({
        origen: corp.dataset.grupo === 'apoyo' ? 'Proceso de apoyo' : 'Proceso primario',
        titulo: a.nombre,
        ruta: (C.cadenaCorporativa || {}).titulo || '',
        descripcion: a.descripcion,
        beneficios: a.beneficios,
        areas: a.areas,
        comentarios: a.comentarios,
        multimedia: false,
        color: marca.colorPrimario
      });
      return;
    }

    var bloque = ev.target.closest('.bloque');
    if (bloque) {
      var destino2 = -1;
      pasos.forEach(function (paso, k) { if (paso.foco === bloque.dataset.id) destino2 = k; });
      if (destino2 >= 0) irA(destino2);
    }
  });

  // Los nodos del diagrama también responden al teclado
  escenario.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Enter' && ev.key !== ' ') return;
    var nodo = ev.target.closest && ev.target.closest('[data-orbita-sw]');
    if (!nodo) return;
    ev.preventDefault();
    nodo.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  /* ---------------------------------------------- PANTALLA / PRESENTACIÓN */
  function pantallaCompleta() {
    if (!document.fullscreenElement) {
      var r = document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen;
      if (r) r.call(document.documentElement);
    } else {
      (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    }
  }
  function modoPresentacion(forzar) {
    var activo = typeof forzar === 'boolean' ? forzar : !document.body.classList.contains('presentacion');
    document.body.classList.toggle('presentacion', activo);
    $('#btn-presentacion').classList.toggle('activo', activo);
    if (activo && !document.fullscreenElement) pantallaCompleta();
  }
  $('#btn-pantalla').addEventListener('click', pantallaCompleta);
  $('#btn-presentacion').addEventListener('click', function () { modoPresentacion(); });
  document.addEventListener('fullscreenchange', function () {
    $('#btn-pantalla').classList.toggle('activo', !!document.fullscreenElement);
    if (!document.fullscreenElement) modoPresentacion(false);
  });

  var tempControles;
  document.addEventListener('mousemove', function () {
    if (!document.body.classList.contains('presentacion')) return;
    document.body.classList.add('mostrar-controles');
    clearTimeout(tempControles);
    tempControles = setTimeout(function () { document.body.classList.remove('mostrar-controles'); }, 2600);
  });

  /* ------------------------------------------------------------- TECLADO */
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') {
      // el visor está por encima del recorrido: se cierra primero
      if (visor.classList.contains('abierto')) { cerrarVisor(); return; }
      if (recorrido.classList.contains('abierto')) { cerrarRecorrido(); return; }
      if (panel.classList.contains('abierto')) { cerrarPanel(); return; }
      if (document.body.classList.contains('presentacion')) { modoPresentacion(false); return; }
    }

    // Con el visor abierto, las flechas pasan de una pantalla a otra
    if (visor.classList.contains('abierto')) {
      switch (ev.key) {
        case 'ArrowRight': case 'ArrowDown': case 'PageDown': case ' ':
          ev.preventDefault(); moverVisor(1); break;
        case 'ArrowLeft': case 'ArrowUp': case 'PageUp':
          ev.preventDefault(); moverVisor(-1); break;
        case 'Enter': case 'z': case 'Z':
          ev.preventDefault(); alternarZoom(); break;
      }
      return;
    }

    // Con el recorrido abierto, el teclado recorre sus pantallas
    if (recorrido.classList.contains('abierto')) {
      switch (ev.key) {
        case 'ArrowDown': case 'ArrowRight': case 'PageDown': case ' ':
          ev.preventDefault(); moverRecorrido(1); break;
        case 'ArrowUp': case 'ArrowLeft': case 'PageUp':
          ev.preventDefault(); moverRecorrido(-1); break;
        case 'Home':
          ev.preventDefault(); recCuerpo.scrollTo({ top: 0, behavior: 'smooth' }); break;
        case 'End':
          ev.preventDefault(); recCuerpo.scrollTo({ top: recCuerpo.scrollHeight, behavior: 'smooth' }); break;
      }
      return;
    }

    if (panel.classList.contains('abierto')) return;

    switch (ev.key) {
      case 'ArrowRight': case 'ArrowDown': case 'PageDown': case ' ':
        ev.preventDefault(); siguiente(); break;
      case 'ArrowLeft': case 'ArrowUp': case 'PageUp':
        ev.preventDefault(); anterior(); break;
      case 'Home': ev.preventDefault(); irA(0); break;
      case 'End':  ev.preventDefault(); irA(pasos.length - 1); break;
      case 'f': case 'F': pantallaCompleta(); break;
      case 'p': case 'P': modoPresentacion(); break;
    }
  });

  /* ---------------------------------------------------------------- INICIO */
  var inicial = parseInt(location.hash.slice(1), 10);
  irA(isNaN(inicial) ? 0 : inicial);

})();
