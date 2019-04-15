import axios from "axios";

const state = {
  todos: []
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    commit("setTodos", response.data);
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title,
        completed: false
      }
    );

    commit("newTodo", response.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit("removeTodo", id);
  },

  async filterTodos({ commit }, limit) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`
    );

    commit("setTodos", response.data);
  },

  async updateTodo({ commit }, updatedTodo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
      updatedTodo
    );
    commit("updateTodos", response.data);
  }
};

const getters = {
  allTodos: state => state.todos
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodos: (state, updatedTodo) => {
    const singleTodo = state.todos.find(todo => todo.id === updatedTodo.id);
    const todoIndex = state.todos.indexOf(singleTodo);

    if (todoIndex !== -1) {
      const newTodoState = [...state.todos];
      newTodoState[todoIndex] = updatedTodo;

      state.todos = newTodoState;
    }
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
