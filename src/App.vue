<template>
  <br/>
  <br/>
  <div class="container">
    <div class="row justify-content-center">
      <!-- Normal -->
      <div class="col-md-5">
        <div class="alert alert-primary"> 
          Todos  <span class="badge bg-info">{{ this.countTodo }}</span>
        </div>
        <todo-list
          :todos="todos.filter(todo => !todo.urgency_chk)" 
          @remove="removeTodo"
          @change="changeUrTodo"
          @check="checkTodo"
        >
        </todo-list>
        <todo-input
          @create="addTodo"
        ></todo-input>
      </div>

      <!-- Urgent -->
      <div class="col-md-5">
        <div class="alert alert-warning"> 
          Urgent Todos 
          <span class="badge bg-warning"
            v-if="countUrgent < 3"
          > {{ this.countUrgent }} </span>
          <span class="badge bg-danger"
            v-else
          > {{ this.countUrgent }} </span>
        </div>
        <todo-list 
          :todos="todos.filter(todo => todo.urgency_chk)"
          @remove="removeTodo"
          @change="changeUrTodo"
          @check="checkTodo"
        > 
        </todo-list>
      </div>
    </div>
  </div>
</template>

<script>
  import TodoList from '@/components/TodoList.vue';
  import TodoInput from '@/components/TodoInput.vue';
  import axios from 'axios';

  export default {
    components: {
      TodoList,
      TodoInput,
    },

    data () {
      return {
        todos: [],

        countTodo: 0,
        countUrgent: 0
      }
    },
    methods: {
      async fetchTodos() {
        try {
          const response = await axios.get('http://seemiurg.beget.tech/api/todos'); 
          this.todos = response.data;
          console.log(this.todos);
          this.counter();
         } catch (e) {
          alert(e + " Error! Don't find data");
        }
      },
      
      async addTodo(todo) {
        try {
          const response = await axios.post('http://seemiurg.beget.tech/api/todos', todo);
          this.fetchTodos();
          this.counter();
         } catch (e) {
          alert(e + " Error! Server not found");
        }

      },
      async removeTodo(todo) {
        await axios.delete(`http://seemiurg.beget.tech/api/todo/${todo.id}`);
        this.fetchTodos();
        this.counter();
      },

      async changeUrTodo(todo) {

        this.todos.forEach(td => {
          if(td.id === todo.id) {
            //this.todos = this.todos.filter(td => td._id !== todo._id);
            if(td.urgency_chk == true) {
              td.urgency_chk = false;
            } else {
              td.urgency_chk = true;
            }      
            //this.todos.push(td);
          }
        })
        await axios.put(`http://seemiurg.beget.tech/api/todos`, todo);
        this.fetchTodos();
        this.counter();
      },

      async checkTodo(todo) {

        this.todos.forEach(td => {
          if(td.id === todo.id) {
            if(td.execution_chk == true) {
              td.execution_chk = false;
            } else {
              td.execution_chk = true;
            }      
          }
        })
        await axios.put(`http://seemiurg.beget.tech/api/todos`, todo);
        this.fetchTodos();
        this.counter();

        // this.todos = this.todos.map(tdThis => {
        //   if(tdThis.id === todo.id) {
        //     if(!tdThis.check) {
        //       tdThis.check = true;
        //     } else {
        //       tdThis.check = false;
        //     }
        //   }
        // return tdThis;   
        // });

      },

      async counter() {
        this.countTodo = 0;
        this.countUrgent = 0;
        this.todos.forEach(todo => {
          if(!todo.urgency_chk && !todo.execution_chk) {
            this.countTodo += 1
           } else if (todo.urgency_chk && !todo.execution_chk)
           {
            this.countUrgent += 1;
           }
        })
      }
    },

    beforeMount() {
      this.fetchTodos();
    },

    mounted() {
      this.counter();
    },
    
  }
</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.css';
</style>