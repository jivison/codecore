const StringExtras = {
    repeat(str, n) {
        return str.repeat(n);
    },

    leftPad(str, n) {
        return " ".repeat(n - str.length) + str;
    },

    rightPad(str, n) {
        return str + " ".repeat(n - str.length);
    },

    pad(str, n) {
        let result = str;
        for (let i = 0; i < n; i++) {
            i % 2 === 0
                ? (result = this.leftPad(result, result.length + 1))
                : (result = this.rightPad(result, result.length + 1));
        }
        return result;
    },

    capitalize(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
};

console.log(StringExtras.pad("lowercase", -10));
