/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'sans-serif'],
      },
      fontWeight: {
        base: '400',
        medium: '600',
        bold: '700',
        black: '900',
      },
      colors: {
        'project-primary-red': 'hsl(7, 99%, 70%)',
        'project-primary-yellow': 'hsl(51, 100%, 49%)',
        'project-primary-cyan': 'hsl(167, 40%, 24%)',
        'project-dark-cyan': 'hsl(168, 34%, 41%)',
        'project-primary-blue': 'hsl(198, 62%, 26%)',
        'project-dark-blue': 'hsl(212, 27%, 19%)',
        'project-darker-blue': 'hsl(213, 9%, 39%)',
        'project-darkest-blue': 'hsl(232, 10%, 55%)',
        'project-gray-blue': 'hsl(210, 4%, 67%)',
        'primaryColor': '#163A37',
        'secondaryColor': '#A5B0AF',
        'tertiaryColor': '#7A8886',
        'accentColor': '#DDDBDD',
        'secondaryAccentColor': '#536C60',
        'backgroundColor': '#F5E8F1',
        'textColor': '#183C2A',
        'borderColor': '#102E28',
        'highlightColor': '#325548',
        'shadowColor': '#072928'
      }
    },
  },
  plugins: [],
}



