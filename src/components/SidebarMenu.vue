<template>
  <!-- 🔘 Botón flotante totalmente independiente -->
  <button
  class="menu-btn"
  :class="{ open: menuOpen }"
  @click="toggleMenu"
>
  <span v-if="!menuOpen">☰</span>
  <span v-else>✖</span>
</button>

  <!-- 🔹 Contenedor del panel lateral -->
  <div class="sidebar-wrapper" :class="{ open: menuOpen }">
    <aside class="menu">
      <ul>
        <li
          v-for="item in items"
          :key="item.name"
          @click="navigate(item)"
        >
          <img :src="item.icon" alt="" />
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </aside>
  </div>

  <!-- 🔹 Fondo oscuro -->
  <div v-if="menuOpen" class="overlay" @click="toggleMenu"></div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const menuOpen = ref(false);
  const router = useRouter();

  const items = [
    { name: 'Inicio', path: '/', icon: '/src/assets/img/icons/dirt.gif' },
    { name: 'Encantamientos', path: '/enchantments', icon: '/src/assets/img/icons/Enchanting_Table.gif' }
  ];

  function toggleMenu() {
    menuOpen.value = !menuOpen.value;
    // 🔸 Emite evento al componente padre (App.vue) si quieres mover el contenido
    const event = new CustomEvent('menu-toggle', { detail: menuOpen.value });
    window.dispatchEvent(event);
  }

  function navigate(item) {
    router.push(item.path);
    menuOpen.value = false;
    const event = new CustomEvent('menu-toggle', { detail: false });
    window.dispatchEvent(event);
  }
</script>

<style scoped>
/* 🔘 Botón flotante siempre visible arriba a la izquierda */
.menu-btn {
  position: fixed;
  top: 15px;
  left: 15px;
  background-color: #6b8e23;
  border: 2px solid #2e2e2e;
  color: white;
  font-size: 22px;
  padding: 6px 12px;
  cursor: pointer;
  z-index: 9999;
  border-radius: 6px;
  transition: transform 0.2s;
}

.menu-btn:hover {
  transform: scale(1.1);
}

/* 🌒 Panel lateral superpuesto */
.sidebar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 260px;
  transform: translateX(-100%);
  background: url('@/assets/img/stone.png');
  background-size: cover;
  border-right: 4px solid #2e2e2e;
  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.6);
  overflow-y: auto;
  z-index: 3000;
  transition: transform 0.3s ease;
}

/* 👇 Cuando está abierto */
.sidebar-wrapper.open {
  transform: translateX(0);
}

/* 🔹 Lista del menú */
.menu {
  height: 100%;
  padding: 20px;
}

.menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-bottom: 6px;
  border-bottom: 2px solid #2e2e2e;
  cursor: pointer;
  color: #e0e0e0;
  transition: background 0.2s;
}

.menu li:hover {
  background-color: #6b8e23;
}

.menu img {
  width: 24px;
  height: 24px;
}

/* 🌓 Fondo semitransparente cuando el menú está abierto */
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2999;
}
.menu-btn.open {
  left: 280px; /* ancho del panel (260px) + margen */
  transition: left 0.3s ease;
}
</style>
