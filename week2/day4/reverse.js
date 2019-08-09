function reverse(string) {
    if (string.length === 0) {
        return string
    } else {
        return reverse(string.split("").slice(1).join("")) + string[0]
    }
}


console.log(reverse("float, int, string, boolean, object, array,\n undefined, NaN, null, negative infinity,\n bigInt and function, and symbol and dates\nThese are a few of my favourite types "));