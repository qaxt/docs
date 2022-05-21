<template>
  <div class="page">
    <div class="banner">
      <h1 id="quxt">Qaxt</h1>
      <p id="info">
        A JavaScript module that shortens your code, makes life easier, and makes development faster!
      </p>
    </div>
  </div>
</template>

<script>
  
</script>

<style scoped>
  .banner {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    max-width: calc(100vw - 5vw);
    min-width: calc(100vw - 20vw);
    align-items: center;
    width: 100%;
    height: 100vh;
    background: var(--blue-light);
    user-select: none;
  }

  .page {
    display: flex;
    padding: 0;
  }
  
  #login {
    color: white;
    padding: 0.75vw 1.5vw;
    border-radius: 0.25vw;
    background: var(--darker);
  }
  
  #login:hover {
    color: white;
    background: var(--blurple);
  }

  #quxt {
    
  }

  #info {
    width: 40vw;
    text-align: center;
  }
</style>