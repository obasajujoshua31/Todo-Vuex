<template>
  <div class="my-4">
    <h2>Filter Todos</h2>

    <select class="custom-select" v-model="selected" v-on:change="filterTodos(selected) ">
      <option :key="option" v-for="option in selectOptions">{{option}}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      selectOptions: [200, 100, 50, 20, 10, 5, 1],
      selected: ""
    };
  },
  name: "FilterTodos",
  methods: mapActions(["filterTodos"])
};
</script>

<style>
</style>
