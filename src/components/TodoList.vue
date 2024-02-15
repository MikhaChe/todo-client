<template>
    <div class="col-md-12 offset-md-0 list-group">
      <todo-item 
        v-for="todo in todos" 
        :key="todo.id"
        :todo="todo"
        @remove="$emit('remove', todo)"
        @change="$emit('change', todo)"
        @check="$emit('check', todo)"
      >
      </todo-item>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
  export default {
  components: { 
    TodoItem 
  },
    
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style scope>
  
</style>