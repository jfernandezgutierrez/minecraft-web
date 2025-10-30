<template>
  <header class="topbar">
    <h1 class="title">Minecraft Web</h1>
  </header>
</template>

<style scoped>
.topbar {
  text-align: center;
  padding: 20px 0;
  color: #c4c4c4;
  text-shadow: 2px 2px #000000;
  background-color: rgb(205, 241, 241);
  background-image: url('@/assets/img/nuve.png');
  background-repeat: repeat-x;
  background-size: 300px auto;
  background-position: 0 40px;
  animation: moverNubes 60s linear infinite;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 2;
}

.title {
  font-size: 40px;
  margin: 0;
  font-family: 'Minecraftia', sans-serif;
}

@keyframes moverNubes {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -1000px;
  }
}
</style>
