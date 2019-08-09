function loud(logFn, fn) {
    logFn(`Calling '${fn.name}'`);
    let val = fn();
    logFn(`Called '${fn.name}' & returned '${val}'`);
    return val;
}

const hello = () => "spricht deutsch du horensohn";

loud(console.info, hello);