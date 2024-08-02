/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'tertiary-color': 'var(--tertiary-color)',
        'positive-color': 'var(--positive-color)',
        'danger-color': 'var(--danger-color)',
        'fade-danger-color': 'var(--fade-danger-color)',
        'text-color': 'var(--text-color)',
        'dim-text-color': 'var(--dim-text-color)',
        'bg-color': 'var(--bg-color)'
      },
    },
  },
  plugins: [],
}

