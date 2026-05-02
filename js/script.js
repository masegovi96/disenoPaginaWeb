// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const icon = menuToggle.querySelector('i');

    // Toggle sidebar on mobile
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        
        // Change icon
        if (sidebar.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('open');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Sidebar Accordion Logic
    const accordionToggle = document.querySelector('.accordion-toggle');
    const submenu = document.querySelector('.submenu');
    
    if (accordionToggle && submenu) {
        accordionToggle.addEventListener('click', () => {
            const icon = accordionToggle.querySelector('.accordion-icon');
            const isOpen = submenu.style.display === 'block';

            if (isOpen) {
                // Collapse
                submenu.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
                accordionToggle.classList.remove('active');
            } else {
                // Expand
                submenu.style.display = 'block';
                icon.style.transform = 'rotate(-180deg)';
                accordionToggle.classList.add('active');
            }
        });
    }

    // QR Modal Logic
    const qrModalBtn = document.getElementById('qrModalBtn');
    const qrModal = document.getElementById('qrModal');
    const closeQrModal = document.getElementById('closeQrModal');

    if (qrModalBtn && qrModal && closeQrModal) {
        qrModalBtn.addEventListener('click', () => {
            qrModal.style.display = 'block';
        });

        closeQrModal.addEventListener('click', () => {
            qrModal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === qrModal) {
                qrModal.style.display = 'none';
            }
        });
    }

    // Add a slight entrance animation to feature cards and table rows
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial styles for animation
    const animatedElements = document.querySelectorAll('.feature-card, .eval-table tr');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});
