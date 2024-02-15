<template>
  <div class="input-group mb-3" style="padding-top: 10px">
    <input
      v-model="newTodo.body"
      @keydown.enter="addTodo"
      type="text" 
      placeholder="Input new todo"
      class="form-control">
    <button
      @click="addTodo"
      type="button"
      class="btn btn-outline-secondary btn__input">New Todo</button>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        newTodo: {
          urgency_chk: false,
          execution_chk: false,
          selectMenu: false,
          body: ''
        }
      }
    },

    methods: {
      addTodo() {
      this.$emit('create', this.newTodo);
      this.newTodo = {
        body: '',
      }; 
    }    
  }
}

</script>

<style scope>
  .btn__input {
    background: #bcd8ff !important;
    color: #084298 !important;
  }
</style>