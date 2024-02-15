<template>
  <div class="p-1 bd-highlight">
    <span class="badge rounded-pill text-dark btn__rpl">
      <slot></slot>
    </span>
  </div>
  
</template>

<script>
  export default {
    name: 'btn-replace',
    
    data () {
    return {
      
      }
    },
    methods: {

      
    },
  }
</script>

<style scope>
  .btn__rpl {
    background-color: #fce5a0;
    font-size: 0.8em;
  }

  .btn__rpl:hover {
    background: rgba(0,0,0,0);
    color: #fce5a0;
    box-shadow: inset 0 0 0 2px #fce5a0;
    cursor: pointer;
    font-size: 1em;
  }
</style>