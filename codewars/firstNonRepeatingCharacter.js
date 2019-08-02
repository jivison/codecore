function firstNonRepeatingLetter(s) {
    // Im so sorry... (also it doesn't meet the test criteria)
    return s.split("").reduce((acc, value) => {(!acc && Object.keys(s.split("").reduce((acc, value) => {acc[value] ? (acc[value] += 1) : (acc[value] = 1);return acc;}, {})).reduce((acc, value) => {let object = s.split("").reduce((acc, value) => {acc[value] ? (acc[value] += 1) : (acc[value] = 1);return acc;}, {});object[value] > 1 ? {} : acc.push(value);return acc;}, []).includes(value)) ? acc = value : {};return acc;}, false)

    // Formatted:

    // return s.split("").reduce((acc, value) => {
    //     !acc &&
    //     Object.keys(
    //         s.split("").reduce((acc, value) => {
    //             acc[value] ? (acc[value] += 1) : (acc[value] = 1);
    //             return acc;
    //         }, {})
    //     )
    //         .reduce((acc, value) => {
    //             let object = s.split("").reduce((acc, value) => {
    //                 acc[value] ? (acc[value] += 1) : (acc[value] = 1);
    //                 return acc;
    //             }, {});
    //             object[value] > 1 ? {} : acc.push(value);
    //             return acc;
    //         }, [])
    //         .includes(value)
    //         ? (acc = value)
    //         : {};
    //     return acc;
    // }, false);
}

console.log(firstNonRepeatingLetter("stress"));
