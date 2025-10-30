<template>
  <!-- 📦 Contenedor principal -->
  <v-container class="pa-6 cont">
    <!-- 🧭 Título -->
    <v-row>
      <v-col cols="12">
        <h1 class="titulo-principal">Lista de Encantamientos</h1>
        <p class="subtitulo">
          Consulta todos los encantamientos, sus niveles máximos y los ítems compatibles.
        </p>
      </v-col>
    </v-row>

    <!-- 🔍 Buscador -->
    <v-row justify="center">
  <v-col cols="12" md="6">
    <v-text-field
      
      label="Buscar encantamiento..."
    />
  </v-col>
</v-row>

    <!-- 🧱 Tarjetas de encantamientos -->
    <v-row justify="center" class="cards-row">
      <v-col
        v-for="enc in filteredEnchantments"
        :key="enc.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
       class="card-col"
      >
        <v-card class="encantamiento-card " elevation="8">
          <v-card-title class="nombre-encantamiento">
            {{ enc.name }} (Nivel {{ enc.maxLevel }})
          </v-card-title>

          <v-card-text class="descripcion">
            <p>{{ enc.description }}</p>

            <div class="iconos-items">
              <v-tooltip
                v-for="item in getItems(enc.items)"
                :key="item.id"
                location="top"
                :text="item.name"
              >
                <template #activator="{ props }">
                 
                </template>
              </v-tooltip>
            </div>
          </v-card-text>
        </v-card>
  
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import items from '@/assets/data/erramientas.json'
import enchantments from '@/assets/data/encantamientos.json'

const search = ref('')


// 🔍 Filtro de búsqueda
const filteredEnchantments = computed(() => {
  if (!search.value) return enchantments
  const term = search.value.toLowerCase()
  return enchantments.filter(
    (e) =>
      e.name.toLowerCase().includes(term) ||
      e.description.toLowerCase().includes(term)
  )
})

// 🔗 Relación ítems ↔ encantamientos
const getItems = (ids) => items.filter((i) => ids.includes(i.id))
</script>

<style scoped>
.cont {
  
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
}

/* 🧭 Título */
.titulo-principal {
  font-size: 2.4rem;
  font-weight: bold;
  color: #4caf50;
  text-shadow: 2px 2px #000;
  margin-bottom: 8px;
  font-family: 'Minecraftia', monospace;
}

.subtitulo {
  color: #ccc;
  font-size: 1rem;
  margin-bottom: 24px;
}



/* 🪄 Tarjetas */
.cards-row {  
  justify-content: center; 
  flex-wrap: wrap;
  gap: 24px; 
}

.encantamiento-card {
  background-color: rgba(25, 25, 25, 0.95);
  border: 2px solid #4caf50;
  border-radius: 12px;
  color: white;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  padding: 12px 16px;
  /* ✅ altura mínima visible */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* mantiene proporciones */
}

.encantamiento-card:hover {
  transform: scale(1.04);
  box-shadow: 0 0 14px #4caf50aa;
}

/* 🪄 Nombre */
.nombre-encantamiento {
  font-weight: bold;
  font-size: 1.3rem;
  color: #ffeb3b;
  margin-bottom: 8px;
}

/* 📜 Descripción */
.descripcion {
  color: #ddd;
  font-size: 0.95rem;
  flex: 1; /* ✅ llena el espacio vertical */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 🧱 Ítems */
.iconos-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center; /* ✅ centrados */
  margin-top: 10px;
}

.icono-item {
  width: 42px;
  height: 42px;
  border: 2px solid #2e7d32;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.3);
  image-rendering: pixelated;
  transition: transform 0.15s ease, border-color 0.15s ease;
  cursor: pointer;
}

.icono-item:hover {
  transform: scale(1.15);
  border-color: #81c784;
}
</style>
