function parseCSV(csvData) {
    const headers = csvData
        .trim()
        .split("\n")[0]
        .split(",");
    return csvData
        .trim()
        .split("\n")
        .slice(1)
        .reduce((result, row) => {
            let index = 0;
            result.push(
                row.split(",").reduce((rowDict, element) => {
                    rowDict[headers[index]] = element;
                    index += 1;
                    return rowDict;
                }, {})
            );
            return result;
        }, []);
}

function search(parsedCSV, keyword) {
    // Iterate through each 'row'
    let result = parsedCSV.reduce((acc, element) => {
        
        // If the keyword matches either firstname or last name AND acc hasn't changed, change acc to the element,
        // otherwise don't change acc
        acc =
            [element.firstName, element.lastName].includes(keyword) &&
            acc === false
                ? element
                : acc;
        return acc;
    }, false);
    return result ? result : "No results";
}

let csvData = `
id,firstName,lastName,email
1,jane,doe,wildmirror@yahoo.com
2,john,doe,tamepool@hotmail.com
3,sherlock,holmes,mag@glass.com
4,natalia,romanov,8legged@ninja.com
5,peter,quill,starlord@gmail.com
`;

console.log(search(parseCSV(csvData), "sherlocasfk"));
