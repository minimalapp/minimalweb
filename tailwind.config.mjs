/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// Brand Colors - matching CSS variables
			colors: {
				// Purple Primary System
				'brand-purple': {
					primary: 'var(--brand-purple-primary)',
					light: 'var(--brand-purple-light)',
					dark: 'var(--brand-purple-dark)',
				},
				// Rainbow Colors
				'brand-red': 'var(--brand-red)',
				'brand-orange': 'var(--brand-orange)',
				'brand-yellow': 'var(--brand-yellow)',
				'brand-green': 'var(--brand-green)',
				'brand-blue': 'var(--brand-blue)',
				'brand-indigo': 'var(--brand-indigo)',
				// Gray Scale - matching design system
				gray: {
					50: 'var(--gray-50)',
					100: 'var(--gray-100)',
					200: 'var(--gray-200)',
					300: 'var(--gray-300)',
					400: 'var(--gray-400)',
					500: 'var(--gray-500)',
					600: 'var(--gray-600)',
					700: 'var(--gray-700)',
					800: 'var(--gray-800)',
					900: 'var(--gray-900)',
				},
				// Semantic Text Colors
				text: {
					primary: 'var(--text-primary)',
					secondary: 'var(--text-secondary)',
					tertiary: 'var(--text-tertiary)',
					quaternary: 'var(--text-quaternary)',
					light: 'var(--text-light)',
				},
				// Background Colors
				bg: {
					primary: 'var(--bg-primary)',
					secondary: 'var(--bg-secondary)',
					tertiary: 'var(--bg-tertiary)',
					dark: 'var(--bg-dark)',
					'dark-alt': 'var(--bg-dark-alt)',
				},
				// Border Colors
				'border-subtle': 'rgba(0, 0, 0, 0.06)',
			},
			// Background Images - Gradients
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'gradient-rainbow': 'linear-gradient(90deg, #FF5757 0%, #FFA500 20%, #FFD700 40%, #4CAF50 60%, #2196F3 80%, #3F51B5 100%)',
				'gradient-purple': 'linear-gradient(to bottom right, var(--brand-purple-primary), var(--brand-purple-dark))',
				'gradient-purple-fade': 'linear-gradient(180deg, rgba(99, 102, 241, 0.02) 0%, var(--bg-primary) 100%)',
			},
			// Background Size for animations
			backgroundSize: {
				'300': '300% 100%',
			},
			// Spacing Scale - matching 8px base unit system
			spacing: {
				'1': 'var(--space-1)',   // 8px
				'2': 'var(--space-2)',   // 16px
				'3': 'var(--space-3)',   // 24px
				'4': 'var(--space-4)',   // 32px
				'5': 'var(--space-5)',   // 40px
				'6': 'var(--space-6)',   // 48px
				'8': 'var(--space-8)',   // 64px
				'10': 'var(--space-10)', // 80px
				'12': 'var(--space-12)', // 96px
			},
			// Border Radius
			borderRadius: {
				'sm': 'var(--radius-sm)',     // 8px
				'md': 'var(--radius-md)',     // 12px
				'lg': 'var(--radius-lg)',     // 16px
				'xl': 'var(--radius-xl)',     // 24px
				'full': 'var(--radius-full)', // 9999px
			},
			// Box Shadow
			boxShadow: {
				'sm': 'var(--shadow-sm)',
				'md': 'var(--shadow-md)',
				'lg': 'var(--shadow-lg)',
				'xl': 'var(--shadow-xl)',
				'hover': 'var(--shadow-hover)',
			},
			// Font Sizes
			fontSize: {
				'xs': 'var(--font-size-xs)',     // 13px
				'sm': 'var(--font-size-sm)',     // 14px
				'15': '15px',                    // Common size in components
				'base': 'var(--font-size-base)', // 16px
				'lg': 'var(--font-size-lg)',     // 18px
				'xl': 'var(--font-size-xl)',     // 20px
				'2xl': 'var(--font-size-2xl)',   // 24px
				'3xl': 'var(--font-size-3xl)',   // 32px
				'4xl': 'var(--font-size-4xl)',   // 40px
				'5xl': 'var(--font-size-5xl)',   // 48px
				// Responsive fluid typography
				'hero-mobile': 'clamp(1.5rem, 7vw, 2rem)',
				'hero-sm': 'clamp(2rem, 6vw, 3rem)',
				'hero-md': 'clamp(2.5rem, 5.5vw, 3.5rem)',
				'hero-lg': 'clamp(1.75rem, 5.5vw, 4.5rem)',
				'hero-subtitle': 'clamp(1.125rem, 2.5vw, 1.625rem)',
				'section-title': 'clamp(var(--font-size-3xl), 4vw, var(--font-size-4xl))',
			},
			// Font Weight
			fontWeight: {
				'normal': 'var(--font-weight-normal)',
				'medium': 'var(--font-weight-medium)',
				'semibold': 'var(--font-weight-semibold)',
				'bold': 'var(--font-weight-bold)',
			},
			// Line Height
			lineHeight: {
				'tight': 'var(--line-height-tight)',
				'snug': 'var(--line-height-snug)',
				'normal': 'var(--line-height-normal)',
				'relaxed': 'var(--line-height-relaxed)',
				'loose': 'var(--line-height-loose)',
			},
			// Transition Duration
			transitionDuration: {
				'fast': 'var(--transition-fast)',
				'base': 'var(--transition-base)',
				'slow': 'var(--transition-slow)',
				'slower': 'var(--transition-slower)',
			},
			// Max Width
			maxWidth: {
				'content': 'var(--content-max-width)', // 1400px
				'container': '1200px',
				'narrow': '1000px',
				'tight': '800px',
				'xs': '600px',
			},
			// Width
			width: {
				'icon-sm': '42px',
				'icon-md': '48px',
				'icon-lg': '56px',
				'icon-xl': '64px',
				'step': '80px',
			},
			// Height
			height: {
				'icon-sm': '42px',
				'icon-md': '48px',
				'icon-lg': '56px',
				'icon-xl': '64px',
				'step': '80px',
			},
			// Font Family
			fontFamily: {
				sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
			},
			// Custom Padding for sections
			padding: {
				'section-x': 'clamp(1rem, 4vw, 3rem)',
				'section-y': 'clamp(3rem, 8vw, 6rem)',
			},
			// Keyframes for animations
			keyframes: {
				rainbowSlide: {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '300% 50%' },
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeInSimple: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translate(0, 0) scale(1)' },
					'33%': { transform: 'translate(50px, 100px) scale(1.1)' },
					'66%': { transform: 'translate(-30px, 80px) scale(0.9)' },
				},
			},
			// Animations
			animation: {
				'rainbow-slide': 'rainbowSlide 6s linear infinite',
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'fadeIn': 'fadeInSimple 0.8s ease-out',
				'fadeInUp': 'fadeInUp 0.4s ease-out',
				'float': 'float 20s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
