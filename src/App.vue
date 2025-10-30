<template>
  <v-app class="app">
     
    <div class="main-area">
      <TopBar />
      <v-main class="main-content">
        <v-container fluid class="pa-0">
          <router-view />
        </v-container>
      </v-main>
    </div>

    <!-- 🔘 Sidebar flotante fuera del flujo -->
   <SidebarMenu />
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue'
import SidebarMenu from '@/components/SidebarMenu.vue'
import TopBar from '@/components/TopBar.vue'


</script>

<style scoped>

/* 🌍 Estructura general */
.app {
  display: flex;
  min-height: 100vh;
 
}

.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: transparent;
}

.main-content {
  flex: 1;
  position: relative;
  background: url('@/assets/img/dirt_bg.png') repeat;
  background-size: cover;
  z-index: 1;
  min-height: calc(100vh - 80px); /* resta la altura del TopBar */
  color: white;
}
.v-input,
.v-field,
.v-text-field {
  position: relative !important;
  overflow: visible !important;
  transform: none !important;
  cursor: text !important;
  color: white !important;
}
</style>
