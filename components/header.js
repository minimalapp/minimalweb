// Header Component
const HeaderComponent = {
    getCSS: function() {
        return `
        /* Header Component Styles */
        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            box-shadow: 0 2px 20px rgba(0,0,0,0.05);
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem var(--section-padding-left) 0.75rem var(--section-padding-right);
            max-width: 1400px;
            margin: 0 auto;
            min-height: 60px;
        }
        
        .logo {
            display: flex;
            align-items: center;
            height: 32px; /* Mobile first - smaller */
        }
        
        .logo img {
            height: 100%;
            width: auto;
            display: block;
            max-width: 120px; /* Mobile first - smaller */
        }
        
        .nav-links {
            display: none; /* Hidden on mobile by default */
            gap: 1.5rem;
            list-style: none;
        }
        
        .nav-links a {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 500;
            transition: color 0.3s;
            min-height: var(--min-touch-target);
            display: flex;
            align-items: center;
        }
        
        .nav-links a:hover {
            color: var(--brand-blue);
            transition: color 0.3s;
        }
        
        .cta-button {
            padding: 0.625rem 1.5rem; /* Mobile first - smaller */
            background: var(--gradient-primary);
            color: white;
            border: none;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: var(--min-touch-target);
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-hover);
        }
        
        .mobile-menu {
            display: flex; /* Show by default on mobile */
            align-items: center;
            justify-content: center;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text-dark);
            min-height: var(--min-touch-target);
            min-width: var(--min-touch-target);
        }
        
        .mobile-menu:hover {
            color: var(--brand-blue);
        }
        
        /* Mobile Navigation Overlay */
        .mobile-nav-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            z-index: 1001;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
        }
        
        .mobile-nav-overlay.active {
            transform: translateX(0);
        }
        
        .mobile-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: var(--text-dark);
            min-height: var(--min-touch-target);
            min-width: var(--min-touch-target);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .mobile-nav-links {
            list-style: none;
            text-align: center;
            gap: 1.5rem;
            display: flex;
            flex-direction: column;
        }
        
        .mobile-nav-links a {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 600;
            font-size: 1.25rem;
            transition: color 0.3s;
            min-height: var(--min-touch-target);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .mobile-nav-links a:hover {
            color: var(--brand-blue);
        }
        
        /* Tablet Portrait (768px+) */
        @media (min-width: 768px) {
            nav {
                padding: 1.25rem var(--section-padding-left) 1.25rem var(--section-padding-right);
            }
            
            .logo {
                height: 40px;
            }
            
            .logo img {
                max-width: 160px;
            }
            
            .nav-links {
                display: flex; /* Show navigation on tablet+ */
                gap: 1.5rem;
            }
            
            .mobile-menu {
                display: none; /* Hide mobile menu on tablet+ */
            }
            
            .cta-button {
                padding: 0.75rem 2rem;
            }
        }
        
        /* Desktop (1024px+) */
        @media (min-width: 1024px) {
            .nav-links {
                gap: 2rem;
            }
        }
        
        /* Large screens (600px+) */
        @media (min-width: 600px) {
            nav {
                padding: 1rem var(--section-padding-left) 1rem var(--section-padding-right);
            }
            
            .logo {
                height: 36px;
            }
            
            .logo img {
                max-width: 140px;
            }
            
            .cta-button {
                padding: 0.75rem 1.75rem;
                font-size: 1rem;
            }
        }
        `;
    },

    getHTML: function(basePath = '') {
        const logoPath = basePath ? `${basePath}/assets/images/logo.jpeg` : 'assets/images/logo.jpeg';
        const homePath = basePath ? basePath : '/';

        return `
        <header>
            <nav>
                <div class="logo">
                    <img src="${logoPath}" alt="Minimal" />
                </div>
                <ul class="nav-links">
                    <li><a href="#producto" data-i18n="nav.product">Producto</a></li>
                    <li><a href="#como-funciona" data-i18n="nav.howItWorks">Cómo Funciona</a></li>
                    <li><a href="#beneficios" data-i18n="nav.benefits">Beneficios</a></li>
                    <li><a href="#casos" data-i18n="nav.useCases">Casos de Uso</a></li>
                    <li><a href="#precios" data-i18n="nav.pricing">Precios</a></li>
                </ul>
                <a href="#contacto" class="cta-button" data-i18n="nav.tryFree">Prueba Gratis</a>
                <button class="mobile-menu" id="mobileMenuButton">☰</button>
            </nav>
        </header>
        <!-- Mobile Navigation Overlay -->
        <div class="mobile-nav-overlay" id="mobileNavOverlay">
            <button class="mobile-close" id="mobileCloseButton">×</button>
            <ul class="mobile-nav-links">
                <li><a href="#producto" data-i18n="nav.product">Producto</a></li>
                <li><a href="#como-funciona" data-i18n="nav.howItWorks">Cómo Funciona</a></li>
                <li><a href="#beneficios" data-i18n="nav.benefits">Beneficios</a></li>
                <li><a href="#casos" data-i18n="nav.useCases">Casos de Uso</a></li>
                <li><a href="#precios" data-i18n="nav.pricing">Precios</a></li>
            </ul>
            <a href="#contacto" class="cta-button" data-i18n="nav.tryFree">Prueba Gratis</a>
        </div>
        `;
    },

    initMobileMenu: function() {
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const mobileCloseButton = document.getElementById('mobileCloseButton');
        const mobileNavOverlay = document.getElementById('mobileNavOverlay');

        if (mobileMenuButton && mobileNavOverlay && mobileCloseButton) {
            mobileMenuButton.addEventListener('click', function() {
                mobileNavOverlay.classList.add('active');
            });

            mobileCloseButton.addEventListener('click', function() {
                mobileNavOverlay.classList.remove('active');
            });

            // Close mobile menu when clicking on overlay
            mobileNavOverlay.addEventListener('click', function(e) {
                if (e.target === mobileNavOverlay) {
                    mobileNavOverlay.classList.remove('active');
                }
            });

            // Close mobile menu when clicking on a link
            const mobileNavLinks = mobileNavOverlay.querySelectorAll('a');
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileNavOverlay.classList.remove('active');
                });
            });
        }
    },

    init: function(basePath = '') {
        // Inject CSS
        const styleElement = document.createElement('style');
        styleElement.textContent = this.getCSS();
        document.head.appendChild(styleElement);

        // Inject HTML
        const headerContainer = document.getElementById('header-placeholder');
        if (headerContainer) {
            headerContainer.innerHTML = this.getHTML(basePath);
        } else {
            // If no placeholder, insert at the beginning of body
            document.body.insertAdjacentHTML('afterbegin', this.getHTML(basePath));
        }

        // Initialize mobile menu functionality
        this.initMobileMenu();

        // Dispatch event to notify that header is ready for i18n
        document.dispatchEvent(new CustomEvent('headerReady'));
    }
};

// Auto-initialize immediately (before DOM is fully loaded to ensure header is ready for i18n)
(function() {
    const initHeader = function() {
        // Check if we're in a subdirectory by looking at the path
        const currentPath = window.location.pathname;
        const basePath = currentPath === '/' || currentPath.endsWith('/index.html') ? '' : '..';
        HeaderComponent.init(basePath);
    };

    // Initialize as soon as possible
    if (document.readyState === 'loading') {
        // Use DOMContentLoaded but with high priority
        document.addEventListener('DOMContentLoaded', initHeader);
    } else {
        // DOM is already ready
        initHeader();
    }
})();