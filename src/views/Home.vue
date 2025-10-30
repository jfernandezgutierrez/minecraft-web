<template>
  <v-container class="mt-10 text-center">
    <!-- 🏠 Título principal -->
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="main-title">Bienvenido al Mundo Minecraft</h1>
        
      </v-col>
    </v-row>

    <!-- 🔮 Sección Encantamientos -->
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="6" lg="4">
        <v-card
          class="encantamientos-card pa-6 d-flex flex-column align-center justify-center"
          elevation="8"
          @click="$router.push('/enchantments')"
        >
          <v-img
            src="/src/assets/img/icons/Enchanting_Table.gif"
            alt="Encantamientos"
            width="150"
            height="150"
            class="mb-4"
          ></v-img>
          <h2 class="encantamientos-title">Encantamientos</h2>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* 🎮 Título principal */
.main-title {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 3px 3px #000000;
  color: #ffffff;
  margin-top: 60px;
  font-family: 'Minecraftia', sans-serif;
}

/* 🔮 Cuadro encantamientos */
.encantamientos-card {
  background-color: rgba(43, 43, 43, 0.9);
  border: 3px solid #4caf50;
  border-radius: 12px;
  
  transition: all 0.3s ease;
}

.encantamientos-card:hover {
  background-color: rgba(76, 175, 80, 0.2);
  transform: scale(1.05);
}

.encantamientos-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #e0e0e0;
  text-shadow: 2px 2px #000;
  font-family: 'Minecraftia', sans-serif;
}
</style>
