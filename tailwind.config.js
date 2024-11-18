/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

export default {
    content: [
        './index.html', 
        './src/**/*.{vue,js,ts,jsx,tsx}',
        "./node_modules/vue-tailwind-datepicker/**/*.js"
    ],
    darkMode: 'class',
    theme: {
      	extend: {
            colors: {
                'dark-text': '#e4e6eb',
                'dark-text-sec': '#638080',
                'dark-text-link': '#f1a802',
                'dark-text-hed': '#808080',

                'dark-bg': '#100f15',
                'dark-bg-sec': '#1b1b23',
                
                'dark-btn': '#f1a802',

                'dark-tab-bg': '#212227',
                'dark-tab-active': '#3f4855',

                'dark-card-bg': '#282828',
            },
        },
    },
    plugins: [],
}

