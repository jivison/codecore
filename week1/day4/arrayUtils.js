let ArrayExtras = {
    toObject(array) {
        return array.reduce((accumulator, value) => {
            accumulator[value[0]] = value[1];
            return accumulator;
        }, {});
    }
};

