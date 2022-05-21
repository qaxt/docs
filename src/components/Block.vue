<template>
  <section>
    <div class="text">
      <slot></slot>
    </div>
    <div class="graphics">
      <slot name="g"></slot>
    </div>
  </section>
</template>

<script>
  
</script>

<style scoped>
  .text {
    display: flex;
    flex-direction: column;
  }
</style>