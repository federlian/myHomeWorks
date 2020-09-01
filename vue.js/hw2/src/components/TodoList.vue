<template>
  <div>
    <div
        v-for="(todo, i) in arrTodo"
        :key="i"
    >
      <TodoItem
          :todo="todo"
          @delete="deleteText"
      />
    </div>
  </div>
</template>

<script>

import TodoItem from "./TodoItem";

export default {
name: "TodoList",

  props: {
    arrTodo: {
      type: Array,
      required: true,
    }
  },

  data() {
  return{
    delete: null
  }
  },

  components: {
  TodoItem
  },

  methods: {
    deleteText(event) {
      this.$emit('del', this.delete = event)
    }
  }
}
</script>

<style scoped>

</style>