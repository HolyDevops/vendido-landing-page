
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#D62828',
					foreground: '#0C1115'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				brand: {
					black: '#0C1115',
					red: '#D62828',
					'off-white': '#FAFAFA'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)',
				'neon-glow': 'linear-gradient(135deg, rgba(214, 40, 40, 0.3) 0%, rgba(214, 40, 40, 0.1) 50%, transparent 100%)',
				'animated-gradient': 'linear-gradient(-45deg, #D62828, #ff4757, #D62828, #ff3838)',
				'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-red': {
					'0%, 100%': {
						boxShadow: '0 0 0 0 rgba(214, 40, 40, 0.7)'
					},
					'50%': {
						boxShadow: '0 0 0 10px rgba(214, 40, 40, 0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'neon-pulse': {
					'0%, 100%': {
						textShadow: '0 0 5px #D62828, 0 0 10px #D62828, 0 0 20px #D62828, 0 0 40px #D62828'
					},
					'50%': {
						textShadow: '0 0 2px #D62828, 0 0 5px #D62828, 0 0 10px #D62828, 0 0 20px #D62828'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(214, 40, 40, 0.5), 0 0 40px rgba(214, 40, 40, 0.3), 0 0 60px rgba(214, 40, 40, 0.1)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(214, 40, 40, 0.8), 0 0 80px rgba(214, 40, 40, 0.5), 0 0 120px rgba(214, 40, 40, 0.3)'
					}
				},
				'gradient-x': {
					'0%, 100%': {
						backgroundSize: '200% 200%',
						backgroundPosition: 'left center'
					},
					'50%': {
						backgroundSize: '200% 200%',
						backgroundPosition: 'right center'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-red': 'pulse-red 2s infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'gradient-x': 'gradient-x 3s ease infinite',
				'float': 'float 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite'
			},
			fontFamily: {
				'display': ['Inter', 'system-ui', 'sans-serif'],
				'body': ['Inter', 'system-ui', 'sans-serif']
			},
			boxShadow: {
				'neon': '0 0 20px rgba(214, 40, 40, 0.5), 0 0 40px rgba(214, 40, 40, 0.3)',
				'neon-strong': '0 0 20px rgba(214, 40, 40, 0.8), 0 0 40px rgba(214, 40, 40, 0.6), 0 0 60px rgba(214, 40, 40, 0.4)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
