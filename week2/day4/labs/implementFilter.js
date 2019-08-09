function filter(array, fn) {
    return array.reduce((acc, val, idx, src) => {
        fn(val, idx, src) ? acc.push(val) : {};
        return acc;
    }, []);
}

array = [1, 2, 3, 4, 5, 6, 7];

const evenEvaluator = value => value % 2 === 0;
const oddEvaluator = value => value % 2 === 1;
const aboveEvaluator = min => {
    return function(n) {
        return n > min;
    };
};

const multipleEvaluators = (...evaluators) => {
    return function(value) {
        for (let evaluator of evaluators) {
            if (!evaluator(value)) {
                return false;
            }
        }
        return true;
    };
};

console.log(
    filter(
        array, multipleEvaluators(
            oddEvaluator, aboveEvaluator(2)
        )
    )
);
