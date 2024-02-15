<template>
  <div class="list-group-item d-flex flex-row align-items-center" @click="clickItem"> 
    <div 
      class="p-1 flex-grow-1"
      :class="{ lineTrough: todo.execution_chk }"
    >
      {{ todo.body }}
    </div> 
    <div class="d-flex flex-row" v-if="elShow">
      <btn-success
        @click="$emit('check', todo)"
      > {{ btnCheck }} </btn-success> 
      <btn-replace
        @click="$emit('change', todo)"
      >
      🔁
      </btn-replace> 
      <btn-remove 
        @click="$emit('remove', todo)"
      >Del</btn-remove>  
    </div>
  </div>
</template>

<script>
export default {
  props: {

    todo: {
      type: Object, 
      required: true,
    }
  },

  data () {
    return {
      elShow: false,
      chkTodo: false, 
      btnCheck: "☑"
    }
  },

  methods: {
    clickItem() {
      if(!this.elShow) {
        this.elShow = true;
      } else {
        this.elShow = false;
      }
    },

    // checkTodo() {
    //   if(!this.chkTodo && this.btnCheck === "Done") {
    //     this.chkTodo = true;
    //     this.btnCheck = "Undone";
    //   } else {
    //     this.chkTodo = false;
    //     this.btnCheck = "Done";
    //   }
    // },
  }
}
</script>

<style scope>
  .lineTrough {
    text-decoration: line-through;
  }
</style>