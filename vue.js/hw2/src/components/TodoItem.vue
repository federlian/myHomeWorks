<template>
  <div>
    <span>{{ todo }}</span>
    <button @click="deleteText()">Delete</button>
  </div>
</template>

<script>


export default {
name: "TodoItem",

  props: {
    todo: {
      type: String,
      required: true
    }
  },

  methods: {
    deleteText() {
      this.$emit('delete', this.todo)
    }
  }
}
</script>

<style scoped>

</style>