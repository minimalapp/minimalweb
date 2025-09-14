// Footer Component
const FooterComponent = {
    getCSS: function() {
        return `
        /* Footer Component Styles */
        footer {
            padding: var(--section-padding-y) var(--section-padding-left) var(--section-padding-y) var(--section-padding-right);
            background: var(--text-dark);
            color: white;
        }

        .footer-content {
            max-width: var(--content-max-width);
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .footer-column h4 {
            margin-bottom: 1.5rem;
            font-size: 1.25rem;
            color: white;
        }

        .footer-column ul {
            list-style: none;
        }

        .footer-column li {
            margin-bottom: 0.25rem;
        }

        .footer-column a {
            color: #ccc;
            text-decoration: none;
            transition: color 0.3s;
            font-size: 0.9rem;
            min-height: var(--min-touch-target);
            display: inline-block;
            padding: 0.25rem 0;
            line-height: 1.4;
        }

        .footer-column a:hover {
            color: white;
        }

        .footer-bottom {
            text-align: center;
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid #555;
            color: #ccc;
            font-size: 0.875rem;
        }

        /* Tablet (768px+) */
        @media (min-width: 768px) {
            .footer-content {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        /* Desktop (1024px+) */
        @media (min-width: 1024px) {
            .footer-content {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        `;
    },

    getHTML: function(basePath = '') {
        const featuresPath = basePath ? `${basePath}/features` : '/features';
        const integrationPath = basePath ? `${basePath}/integration` : '/integration';
        const aboutPath = basePath ? `${basePath}/about` : '/about';
        const careersPath = basePath ? `${basePath}/careers` : '/careers';
        const contactPath = basePath ? `${basePath}/contact` : '/contact';
        const helpPath = basePath ? `${basePath}/help` : '/help';
        const guidesPath = basePath ? `${basePath}/guides` : '/guides';
        const communityPath = basePath ? `${basePath}/community` : '/community';
        const termsPath = basePath ? `${basePath}/terms` : '/terms';
        const privacyPath = basePath ? `${basePath}/privacy` : '/privacy';
        const gdprPath = basePath ? `${basePath}/gdpr` : '/gdpr';
        const securityPath = basePath ? `${basePath}/security` : '/security';

        return `
        <footer>
            <div class="footer-content">
                <div class="footer-column">
                    <h4 data-i18n="footer.product">Producto</h4>
                    <ul>
                        <li><a href="${featuresPath}" data-i18n="footer.features">Características</a></li>
                        <!-- <li><a href="#" data-i18n="footer.roadmap">Roadmap</a></li> -->
                        <li><a href="${integrationPath}" data-i18n="footer.integration">Integración</a></li>
                        <!-- <li><a href="#" data-i18n="footer.status">Status</a></li> -->
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 data-i18n="footer.company">Empresa</h4>
                    <ul>
                        <li><a href="${aboutPath}" data-i18n="footer.about">Sobre Nosotros</a></li>
                        <!-- <li><a href="#" data-i18n="footer.blog">Blog</a></li> -->
                        <li><a href="${careersPath}" data-i18n="footer.careers">Carreras</a></li>
                        <li><a href="${contactPath}" data-i18n="footer.contact">Contacto</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 data-i18n="footer.resources">Recursos</h4>
                    <ul>
                        <li><a href="${helpPath}" data-i18n="footer.help">Centro de Ayuda</a></li>
                        <li><a href="${guidesPath}" data-i18n="footer.guides">Guías</a></li>
                        <!-- <li><a href="#" data-i18n="footer.webinars">Webinars</a></li> -->
                        <li><a href="${communityPath}" data-i18n="footer.community">Comunidad</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 data-i18n="footer.legal">Legal</h4>
                    <ul>
                        <li><a href="${termsPath}" data-i18n="footer.terms">Términos</a></li>
                        <li><a href="${privacyPath}" data-i18n="footer.privacy">Privacidad</a></li>
                        <li><a href="${gdprPath}" data-i18n="footer.gdpr">GDPR</a></li>
                        <li><a href="${securityPath}" data-i18n="footer.security">Seguridad</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p data-i18n="footer.copyright">© 2025 Minimal. Todos los derechos reservados.</p>
            </div>
        </footer>
        `;
    },

    init: function(basePath = '') {
        // Inject CSS
        const styleElement = document.createElement('style');
        styleElement.textContent = this.getCSS();
        document.head.appendChild(styleElement);

        // Inject HTML
        const footerContainer = document.getElementById('footer-placeholder');
        if (footerContainer) {
            footerContainer.innerHTML = this.getHTML(basePath);
        } else {
            // If no placeholder, insert at the end of body
            document.body.insertAdjacentHTML('beforeend', this.getHTML(basePath));
        }
    }
};

// Auto-initialize if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        // Check if we're in a subdirectory by looking at the path
        const currentPath = window.location.pathname;
        const basePath = currentPath === '/' || currentPath.endsWith('/index.html') ? '' : '..';
        FooterComponent.init(basePath);
    });
} else {
    const currentPath = window.location.pathname;
    const basePath = currentPath === '/' || currentPath.endsWith('/index.html') ? '' : '..';
    FooterComponent.init(basePath);
}