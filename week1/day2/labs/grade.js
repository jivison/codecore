const arg = process.argv[2];

const gradeObj = {
    86 : "A",
    73 : "B",
    67 : "C+",
    60 : "C",
    50 : "C-",
    0 : "F"
};

for (let keyI in Object.keys(gradeObj)) {
    let key = Object.keys(gradeObj).reverse()[keyI];
    if (arg >= key) {
        console.log(gradeObj[key]);
        break;
    }
}