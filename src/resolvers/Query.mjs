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
    getUsers: (parent, { id }, context, info) => {
        return db.users;
    },
    getUserById: (parent, { id }, context, info) => {
        const usertouserdo = db.users.find((user) => user.id === id);
        if (!user) {
            throw new Error(`Le user ${id} nexiste pas`);
        }
        return user;
    },

};
