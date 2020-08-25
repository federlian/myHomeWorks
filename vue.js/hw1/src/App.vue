<!--Створити простий todolist В папці assests є скрін як приблизно має виглядати Має бути масив тудушок, 
в інпуті вписуємо туду і пушимо в масив за допомогою кнопки Add. 
Видаляємо тудушки за допомогою кнопки delete. Якщо тудушок більше 10 кнопка повинна сховатись.-->

<template>
  <div>

    <input type="text" v-model="text" v-on:keyup.enter="showText()">
    <button @click="showText()" v-if="show">Add</button>
    <ul>
      <li v-for="(mass, index) in arr" :key="index">
        <p>{{ mass }}<button @click="deleteText(index)">Delete</button></p>
      </li>
    </ul>

  </div>
</template>


<script>

export default {
  name: 'App',

  data() {
    return {
      text: null,
      arr: [],
      show: true
    }

  },

  methods: {
    showText() {
      if (this.arr.length < 10) {
        this.arr.push(this.text);
      } else {
        this.show = false;

      }
    },

    deleteText(index) {
      this.arr.splice(index, 1);
      this.show = true;
    }

  }
}
</script>

<style>


</style>