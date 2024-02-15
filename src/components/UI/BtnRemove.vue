<template>
  <div class="p-1 bd-highlight">
    <span class="badge rounded-pill btn__rem">
      <slot></slot>
    </span>
  </div>
  
</template>

<script>
  export default {
    name: 'btn-remove',
    
    data () {
    return {
      
      }
    },
    methods: {

      
    },
  }
</script>

<style scope>
  .btn__rem {
    background-color: #ff7749;
  }
  
  .btn__rem:hover {
    background: rgba(0,0,0,0);
    color: #ff7749;
    box-shadow: inset 0 0 0 2px #ff7749;
    cursor: pointer;
    font-size: 1em;
  }


</style>