const obj = {
    person: {
        name: "joe",
        history: {
            hometown: "bratislava",
            bio: {
                funFact: "I like fishing."
            }
        }
    }
};

getByPath = (path, object) => {
    return path.split(".").reduce((acc, val) => {
        return acc != undefined ? acc[val] : acc;
    }, object)
}
