const formKitTailwind = require('@formkit/themes/tailwindcss');

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwindcss'),
        require('@tailwindcss/forms'),
        require('autoprefixer'),
        require('@tailwindcss/typography'),
        formKitTailwind
    ],
}