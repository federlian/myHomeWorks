<template>
  <div>
    <form>
      <div>
        <h1>FORM</h1>
      </div>
      <div>
        <label for="email">Mail</label>
        <input
            type="email"
            v-model="submitData.email"
        >
      </div>
      <div>
        <label for="password">Password</label>
        <input
            type="password"
            v-model="submitData.password"
        >
      </div>
      <div>
        <label for="male">
          <input
              type="radio"
              value="Male"
              v-model="submitData.gender"
          >Male
        </label>
        <label for="female">
          <input
              type="radio"
              value="Female"
              v-model="submitData.gender"
          >Female
        </label>
      </div>
      <div>
        <button @click="submitForm">Confirm</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Form',

    data() {
      return {
        submitData: {
          email: '',
          password: '',
          gender: ''
        }
      }
    },

    methods: {
      submitForm() {
        console.log(this.submitData);
      }
    }
  }
</script>