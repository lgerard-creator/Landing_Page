/*
 * Script principal pour l'interactivité du portfolio de Laurent Gerard
 */

document.addEventListener('DOMContentLoaded', () => {

    // Initialisation des icônes Lucide
    lucide.createIcons();

    // Gestion du menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Fermer le menu mobile en cliquant sur un lien
        mobileMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && !e.target.classList.contains('lang-link')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Animation au défilement (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optionnel : arrêter d'observer une fois l'élément visible
                    // observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.1 // L'animation se déclenche quand 10% de l'élément est visible
        });

        revealElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Gestion de la transition de langue
    const langLinks = document.querySelectorAll('.lang-link');
    langLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Empêche la navigation immédiate
            const destination = this.href;
            document.body.classList.add('page-fade-out');
            setTimeout(() => {
                window.location.href = destination;
            }, 500); // Attend la fin de l'animation de fondu (0.5s)
        });
    });

    // Gestion de la fenêtre modale de contact
    const modalOverlay = document.getElementById('contact-modal');
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');

    if (modalOverlay && openModalBtn && closeModalBtn) {
        openModalBtn.addEventListener('click', () => {
            modalOverlay.classList.add('visible');
        });

        closeModalBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('visible');
        });

        // Fermer en cliquant en dehors de la modale
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('visible');
            }
        });
    }

});
