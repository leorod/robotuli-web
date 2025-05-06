<template>
  <div class="container py-5 d-flex flex-wrap justify-content-center gap-4">
    <div
      v-for="button in buttons"
      :key="button.id"
      class="metro-tile d-flex flex-column justify-content-center align-items-center text-center"
      :style="{ backgroundColor: button.color }"
    >
      <h4 class="text-light">{{ button.name }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { getButtonList, ButtonItem } from '../services/BotoneraService';

export default defineComponent({
  setup() {
    const buttons = ref<ButtonItem[]>([]);

    onMounted(async () => {
      buttons.value = await getButtonList();
    });

    return { buttons };
  },
});
</script>

<style scoped>
.metro-tile {
  width: 150px;
  height: 150px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.metro-tile:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.5);
}
</style>
