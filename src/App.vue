<template>
  <div class="container">
    <add-todo/>
    <filter-todos/>
    <Todos/>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodos from "./components/FilterTodos.vue";

export default {
  name: "app",
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
};
</script>

<style>
/* .container{
  width: 65% !important;
  margin: auto;
} */
</style>
