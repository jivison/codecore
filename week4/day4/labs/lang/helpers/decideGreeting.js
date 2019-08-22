module.exports = lang => {
    switch (lang) {
        case "en":
            return "Hello";

        case "fr":
            return "Bonjour";

        case "es":
            return "Hola";

        default:
            return "Welcome, please select a language:"
    }
};
