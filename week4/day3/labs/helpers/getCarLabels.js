function processYear(year) {
    year = parseInt(year);
    
    const gradeObj = {
        2020 : "Future|darkcyan",
        2010 : "New|green",
        2000 : "Oldish|gold",
        1990 : "Old|orange",
        0 : "Very Old|red",
    };
    
    for (let keyI in Object.keys(gradeObj)) {
        let key = Object.keys(gradeObj).reverse()[keyI];
        if (year >= key) {
            return gradeObj[key];
        }
    }
    
    return "error"
}


module.exports = processYear;