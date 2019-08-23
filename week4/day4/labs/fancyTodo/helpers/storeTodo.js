module.exports = (newTodo, res, req) => {
    let tempObj = {};
    tempObj[res.locals.username] = req.cookies.todos[res.locals.username]
        ? req.cookies.todos[res.locals.username].concat([newTodo])
        : [newTodo];
    return Object.assign(req.cookies.todos, tempObj);
};
