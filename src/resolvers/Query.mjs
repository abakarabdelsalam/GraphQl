const todos = [
    {
        id: 1,
        name: "Je m'appelle",
        content: "premier GraphQl",
        status: "WAINTING"
    }
]
export const Query = {
    hello: (_, { name }) => `Hello my ${name || 'World'}`,
    getTodos: () => {
        return todos;
    },
}
