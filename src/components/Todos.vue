<template>
  <div>
    <h3 class="my-4">Todos</h3>
    <div class="legend my-4">
      <span>Double Click to mark as Complete</span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
      <span>
        <span class="incomplete-box"></span> = InComplete
      </span>
    </div>
    <div class="row justify-content-between">
      <div
        v-on:dblclick="dbClick(todo)"
        class="col-sm-12 col-md-3 m-3 border p-4 text-center"
        v-for="todo in allTodos"
        v-bind:key="todo.id"
        v-bind:class="{'is-completed' : todo.completed}"
      >
        {{todo.title}}
        <span>
          <i v-on:click="deleteTodo(todo.id)" class="far fa-trash-alt"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  methods: {
    dbClick(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updatedTodo);
    },
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"])
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
i {
  position: absolute;
  cursor: pointer;
  bottom: 10px;
  right: 20px;
  transition: all 0.2s ease-in-out;
}
i:hover {
  color: red;
  transform: scale(1.4);
}

.text-center {
  cursor: pointer;
}
.text-center:hover {
  background-color: #a9bdbd;
  color: darkgreen;
  border: none !important;
}
.legend {
  display: flex;
  justify-content: space-between;
}

.complete-box {
  width: 10px;
  height: 10px;
  background-color:  rgb(44, 134, 156);
  display: inline-block;
}

.incomplete-box {
  width: 10px;
  height: 10px;
  border: 1px solid;
  background-color: #002b36;
  display: inline-block;
}

.is-completed {
  background-color: rgb(44, 134, 156);
  color: #002b36;
  border: none !important;
}
</style>
