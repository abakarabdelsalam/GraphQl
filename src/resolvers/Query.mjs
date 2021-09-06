import { db } from "./../db/db.mjs";

export const Query = {
    hello: (_, { name }) => `Hello my ${name || 'World'}`,
    getTodos: () => {
        return db.todos;
    },
    getTodoById: (parent, { id }, context, info) => {
        const todo = db.todos.find((todo) => todo.id === id);
        if (!todo) {
            throw new Error(`Le todo ${id} nexiste pqs`);
        }
        return todo;
    },
};
