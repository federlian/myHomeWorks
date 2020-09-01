<template>
  <div>
    <input
        type="text"
        v-model="text"
    >
    <button @click="addText">Add</button>
  </div>
</template>

<script>

export default {
  name: "AddTodo",

  data() {
    return {
      text: null,
    }
  },

  methods: {
    addText() {
      this.$emit('text', this.text);
      }
    }
}

</script>

<style scoped>

</style>