<template>
  <div>
    <h3 class="mt-4 p-2">Add Todo</h3>
    <form v-on:submit="onSubmit">
      <div class="input-group">
        <input type="text" placeholder="Add Todo..." class="form-control" v-model="title">
        <input type="submit" value="Submit" class="btn btn-secondary">
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    onSubmit(e) {
     e.preventDefault();
     this.addTodo(this.title)
    },
    ...mapActions(["addTodo"])
  }
};
</script>

<style scoped>
</style>
