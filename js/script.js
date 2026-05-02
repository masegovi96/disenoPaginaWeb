// Interactividad principal: sidebar, tema, acordeón, modal QR y animaciones.
// Requiere que components.js se haya cargado antes para que el sidebar exista en el DOM.

document.addEventListener('DOMContentLoaded', function () {

    var menuToggle = document.getElementById('menu-toggle');
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.querySelector('.main-content');
    var isMobile = function () { return window.innerWidth <= 768; };

    // Sidebar: en móvil usa la clase .open para deslizar; en desktop colapsa con body.sidebar-collapsed.
    function setSidebarOpen(open) {
        var icon = menuToggle ? menuToggle.querySelector('i') : null;

        if (isMobile()) {
            // Mobile: slide in/out with .open class
            if (open) {
                sidebar.classList.add('open');
            } else {
                sidebar.classList.remove('open');
            }
        } else {
            // Desktop: collapse using body class + inline margin
            if (open) {
                document.body.classList.remove('sidebar-collapsed');
                if (mainContent) {
                    mainContent.style.marginLeft = 'var(--sidebar-width)';
                    mainContent.style.maxWidth = 'calc(100vw - var(--sidebar-width))';
                    mainContent.style.paddingLeft = '';
                }
            } else {
                document.body.classList.add('sidebar-collapsed');
                if (mainContent) {
                    mainContent.style.marginLeft = '0';
                    mainContent.style.maxWidth = '100vw';
                    mainContent.style.paddingLeft = '5rem';
                }
            }
        }

        if (icon) {
            icon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        }

        try { localStorage.setItem('sidebarOpen', open ? '1' : '0'); } catch (e) {}
    }

    // Restore saved state or apply sensible default
    var savedSidebar = null;
    try { savedSidebar = localStorage.getItem('sidebarOpen'); } catch (e) {}

    if (savedSidebar !== null) {
        setSidebarOpen(savedSidebar === '1');
    } else {
        // First visit: open on desktop, closed on mobile
        setSidebarOpen(!isMobile());
    }

    // Toggle on button click
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            var isOpen = isMobile()
                ? sidebar.classList.contains('open')
                : !document.body.classList.contains('sidebar-collapsed');
            setSidebarOpen(!isOpen);
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function (e) {
        if (isMobile() && sidebar && sidebar.classList.contains('open')) {
            if (!sidebar.contains(e.target) && menuToggle && !menuToggle.contains(e.target)) {
                setSidebarOpen(false);
            }
        }
    });

    // Acordeón: expande y colapsa el submenú de Introducción en el sidebar.
    var accordionToggle = document.querySelector('.accordion-toggle');
    var submenu = document.querySelector('.submenu');

    if (accordionToggle && submenu) {
        accordionToggle.addEventListener('click', function () {
            var accordionIcon = accordionToggle.querySelector('.accordion-icon');
            var isOpen = submenu.style.display === 'block';

            submenu.style.display = isOpen ? 'none' : 'block';
            if (accordionIcon) {
                accordionIcon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(-180deg)';
            }
            accordionToggle.classList.toggle('active', !isOpen);
        });
    }

    // Tema: aplica modo claro/oscuro y lo persiste en localStorage.
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        var themeIcon = document.getElementById('theme-icon');
        var themeLabel = document.getElementById('theme-label');
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
        if (themeLabel) {
            themeLabel.textContent = theme === 'dark' ? 'Modo claro' : 'Modo oscuro';
        }
        try { localStorage.setItem('theme', theme); } catch (e) {}
    }

    var savedTheme = 'dark';
    try { savedTheme = localStorage.getItem('theme') || 'dark'; } catch (e) {}
    applyTheme(savedTheme);

    var themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            var current = document.documentElement.getAttribute('data-theme') || 'dark';
            applyTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    // Modal QR: abre y cierra el diálogo con el código QR del repositorio.
    var qrModalBtn = document.getElementById('qrModalBtn');
    var qrModal = document.getElementById('qrModal');
    var closeQrModal = document.getElementById('closeQrModal');

    if (qrModalBtn && qrModal && closeQrModal) {
        qrModalBtn.addEventListener('click', function () {
            qrModal.style.display = 'block';
        });
        closeQrModal.addEventListener('click', function () {
            qrModal.style.display = 'none';
        });
        window.addEventListener('click', function (e) {
            if (e.target === qrModal) {
                qrModal.style.display = 'none';
            }
        });
    }

    // Animaciones: fade-in escalonado para tarjetas y filas de tabla al entrar al viewport.
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        var animated = document.querySelectorAll('.feature-card, .eval-table tr, .info-card');
        animated.forEach(function (el, i) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease ' + (i * 0.08) + 's, transform 0.5s ease ' + (i * 0.08) + 's';
            observer.observe(el);
        });
    }

});
