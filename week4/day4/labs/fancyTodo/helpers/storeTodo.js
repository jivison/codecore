module.exports = (username, newTodo, oldTodo) => {
    let tempobj = {};
    if (oldTodo[username]) {
        tempobj[username] = oldTodo[username].concat([newTodo]);
    } else {
        tempobj[username] = [newTodo];
    }
    return Object.assign(oldTodo, tempobj);
};

// res.cookie(
//     "todos",
//     res.locals.todos
//         ? res.locals.todos.concat([
//               { body: req.body.body, title: req.body.title }
//           ])
//         : [{ body: req.body.body, title: req.body.title }],
//     { maxAge: new Date() }
// );
