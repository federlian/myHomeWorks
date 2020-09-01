<!--Розбити нашу тудушку на компоненти: Вигляд повинен бути такий самий як в попередньому завданні.-->

<!--Перший головний App.vue має мати два дочірніх компонента:-->

<!--AddTodo.vue - в якому буде input а також кнопка add-->

<!--TodoList.vue - в ньому ж буде дочірній компонент TodoItem який ми будемо крутити через масив (дивіться аналогію з відео frameworkList та frameworkItem)-->

<!--В компоненті App.vue в data() має знаходитись наш масив тудушок який ми пропсами перекидуємо в компонент TodoList.vue-->

<!--Відповідно у ньому ми за домогою v-for ітеруємо компоненти TodoItem і передаємо в кожен свою тудушку.-->

<!--Компонент AddTodo.vue після того коли ввели в інпут щось і клікнули по кнопці повинен емітати нашу тудушку в App.vue і за домопогою метода пушити в масив.-->

<!--Компонент TodoItem.vue має в собі якийсь span з назвою тудушки і кнопку delete при клікові на яку потрібно емітнути тудушку яку хочемо видалити в компонент TodoList і ще раз перекинути цю подію в компонент App.vue. (можна спростити і використати eventbus, але я б казав прокинути на верх до App.vue саме через this.$emit)-->

<!--В App.vue приймаємо цю подію, шукаємо в масиві яку саме тудушку хочемо видалити і робимо splice().-->

<!--Для тих хто виконає це завдання, зверстати формочку з email, пароль, радіобаттонами з male або female і на кнопку submit отримати цей обєкт в console.log()-->
<template>
  <div>
    <AddTodo v-if="arrTodo.length<10"
        @text="text"
    />
    <TodoList
        :arr-todo="arrTodo"
        @del="del"
    />
  </div>
</template>

<script>

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default {
  name: 'App',

  components: {
    AddTodo,
    TodoList
  },

  data() {
    return {
      arrTodo: []
    }
  },

  methods: {
    text(event) {
      this.arrTodo.push(event);

      console.log(this.arrTodo)
    },

    del(event) {
      let index = this.arrTodo.indexOf(event, 0);
      this.arrTodo.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
