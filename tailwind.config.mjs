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
				'xs': 'var(--font-size-xs)',
				'sm': 'var(--font-size-sm)',
				'base': 'var(--font-size-base)',
				'lg': 'var(--font-size-lg)',
				'xl': 'var(--font-size-xl)',
				'2xl': 'var(--font-size-2xl)',
				'3xl': 'var(--font-size-3xl)',
				'4xl': 'var(--font-size-4xl)',
				'5xl': 'var(--font-size-5xl)',
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
			},
			// Font Family
			fontFamily: {
				sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
