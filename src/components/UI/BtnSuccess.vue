<template>
  <div class="p-1 bd-highlight">
    <span class="badge rounded-pill btn__sacc">
      <slot></slot>
    </span>
  </div>
  
</template>

<script>
  export default {
    name: 'btn-success',
    
    data () {
    return {
      
      }
    },
    methods: {

      
    },
  }
</script>

<style scope>
  .btn__sacc {
    background-color: #a4ee92;
    font-size: 0.8em;
  }

  .btn__sacc:hover {
    background: rgba(0,0,0,0);
    color: #a4ee92;
    box-shadow: inset 0 0 0 2px #a4ee92;
    cursor: pointer;
    font-size: 1em;
  }
</style>