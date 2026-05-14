// Inyecta el sidebar y el footer en todas las páginas del sitio.
// Debe cargarse antes de script.js para que el DOM del sidebar esté disponible cuando se necesite.
(function () {
    'use strict';

    // Obtiene la ruta raíz relativa leyendo el atributo src del propio script tag.
    function getRootPath() {
        var script = document.querySelector('script[src*="components.js"]');
        if (!script) return './';
        return script.getAttribute('src').replace('js/components.js', '') || './';
    }

    // Detecta qué página está activa comparando el pathname de la URL actual.
    function getActivePage() {
        var path = window.location.pathname.toLowerCase().replace(/\\/g, '/');
        if (path.indexOf('/herramientas/') !== -1) return 'herramientas';
        if (path.indexOf('/proyecto-final/') !== -1) return 'proyecto-final';
        if (path.indexOf('/actividad-diagnostico/') !== -1) return 'diagnostico';
        if (path.indexOf('/unidad1/presentacion/') !== -1) return 'u1-presentacion';
        if (path.indexOf('/unidad1/participacion1/') !== -1) return 'u1-participacion1';
        if (path.indexOf('/unidad1/tarea1/') !== -1) return 'u1-tarea1';
        return 'home';
    }

    // Construye el HTML completo del sidebar: enlaces de navegación y botón de tema.
    function buildSidebar(root, active) {
        var intro = (active === 'herramientas' || active === 'proyecto-final' || active === 'diagnostico');
        var submenuDisplay = intro ? 'block' : 'none';
        var chevronRotate = intro ? 'transform: rotate(-180deg);' : '';

        var u1Active = (active === 'u1-presentacion' || active === 'u1-participacion1' || active === 'u1-tarea1');
        var u1SubmenuDisplay = u1Active ? 'block' : 'none';
        var u1ChevronRotate = u1Active ? 'transform: rotate(-180deg);' : '';

        function navLink(href, icon, label, isActive, extraStyle) {
            var activeClass = isActive ? ' active' : '';
            var style = extraStyle ? ' style="' + extraStyle + '"' : '';
            return '<a href="' + root + href + '" class="nav-link' + activeClass + '"' + style + '>'
                + '<i class="' + icon + '"></i>'
                + '<span class="nav-label">' + label + '</span>'
                + '</a>';
        }

        return ''
            + '<div class="sidebar-header">'
            + '<div class="sidebar-brand">'
            + '<h2>Diseño de Página Web</h2>'
            + '</div>'
            + '</div>'
            + '<nav class="sidebar-nav" id="sidebar-nav">'
            + '<ul>'
            + '<li class="nav-item">'
            + navLink('index.html', 'fa-solid fa-house', 'Inicio', active === 'home')
            + '</li>'
            + '<li class="nav-item accordion-item">'
            + '<div class="nav-link accordion-toggle' + (intro ? ' active' : '') + '" style="cursor: pointer; display: flex; align-items: center; justify-content: space-between;">'
            + '<div style="display: flex; align-items: center;">'
            + '<i class="fa-solid fa-book-open"></i>'
            + '<span class="nav-label">Introducción</span>'
            + '</div>'
            + '<i class="fa-solid fa-chevron-down accordion-icon nav-label" style="transition: transform 0.3s ease; ' + chevronRotate + '"></i>'
            + '</div>'
            + '<ul class="submenu" style="display: ' + submenuDisplay + '; padding-left: 1.5rem; list-style: none; margin-top: 0.5rem; margin-bottom: 0.5rem;">'
            + '<li class="nav-item" style="margin-bottom: 0.5rem;">'
            + navLink('introduccion/herramientas/index.html', 'fa-solid fa-toolbox', 'Herramientas', active === 'herramientas', 'font-size: 0.95rem; padding: 0.6rem 1rem;')
            + '</li>'
            + '<li class="nav-item" style="margin-bottom: 0.5rem;">'
            + navLink('introduccion/proyecto-final/index.html', 'fa-solid fa-rocket', 'Proyecto Final', active === 'proyecto-final', 'font-size: 0.95rem; padding: 0.6rem 1rem;')
            + '</li>'
            + '<li class="nav-item">'
            + navLink('introduccion/actividad-diagnostico/index.html', 'fa-solid fa-clipboard-question', 'Diagnóstico', active === 'diagnostico', 'font-size: 0.95rem; padding: 0.6rem 1rem;')
            + '</li>'
            + '</ul>'
            + '</li>'
            + '<li class="nav-item accordion-item">'
            + '<div class="nav-link accordion-toggle' + (u1Active ? ' active' : '') + '" style="cursor: pointer; display: flex; align-items: center; justify-content: space-between;">'
            + '<div style="display: flex; align-items: center;">'
            + '<i class="fa-solid fa-layer-group"></i>'
            + '<span class="nav-label">Unidad 1: Fundamentos de UX/UI y Herramientas</span>'
            + '</div>'
            + '<i class="fa-solid fa-chevron-down accordion-icon nav-label" style="transition: transform 0.3s ease; ' + u1ChevronRotate + '"></i>'
            + '</div>'
            + '<ul class="submenu" style="display: ' + u1SubmenuDisplay + '; padding-left: 1.5rem; list-style: none; margin-top: 0.5rem; margin-bottom: 0.5rem;">'
            + '<li class="nav-item" style="margin-bottom: 0.5rem;">'
            + navLink('Unidad1/Presentacion/index.html', 'fa-solid fa-file-powerpoint', 'Presentación', active === 'u1-presentacion', 'font-size: 0.95rem; padding: 0.6rem 1rem;')
            + '</li>'
            + '<li class="nav-item" style="margin-bottom: 0.5rem;">'
            + navLink('Unidad1/Participacion1/index.html', 'fa-solid fa-magnifying-glass', 'Actividad de Participación 1', active === 'u1-participacion1', 'font-size: 0.95rem; padding: 0.6rem 1rem;')
            + '</li>'
            + '<li class="nav-item">'
            + navLink('Unidad1/Tarea1/index.html', 'fa-solid fa-file-pdf', 'Tarea 1', active === 'u1-tarea1', 'font-size: 0.95rem; padding: 0.6rem 1rem;')
            + '</li>'
            + '<li class="nav-item">'
            + navLink('Unidad1/Participacion2/index.html', 'fa-solid fa-file-pdf', 'Actividad de Participación 2', active === 'u1-participacion2', 'font-size: 0.95rem; padding: 0.6rem 1rem;')
            + '</li>'
            + '<li class="nav-item">'
            + navLink('Unidad1/Tarea 2/index.html', 'fa-solid fa-file-pdf', 'Tarea 2', active === 'u1-tarea2', 'font-size: 0.95rem; padding: 0.6rem 1rem;')
            + '</li>'
            + '</ul>'
            + '</li>'
            + '</ul>'
            + '</nav>'
            + '<div class="sidebar-bottom">'
            + '<button class="theme-toggle-btn" id="theme-toggle-btn" title="Cambiar tema">'
            + '<i class="fa-solid fa-sun" id="theme-icon"></i>'
            + '<span class="nav-label" id="theme-label">Modo claro</span>'
            + '</button>'
            + '</div>';
    }

    // Inyecta el HTML del sidebar en el elemento #sidebar si existe en la página.
    var sidebar = document.getElementById('sidebar');
    if (sidebar) {
        var root = getRootPath();
        var active = getActivePage();
        sidebar.innerHTML = buildSidebar(root, active);
    }

    // Inyecta el texto de copyright en todos los footer que estén vacíos.
    var footers = document.querySelectorAll('footer');
    for (var i = 0; i < footers.length; i++) {
        if (!footers[i].innerHTML.trim()) {
            footers[i].innerHTML = '<p>&copy; 2026 Materia Diseño de Página Web. Todos los derechos reservados.</p>';
        }
    }

})();
