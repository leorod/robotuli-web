<template>
  <div class="container mt-5">
    <h1 class="text-primary">Bienvenido a la app Vue 3 + TypeScript + Bootstrap!</h1>
    <BaseButton label="Contar" @click="increment" />
    <p>Contador: {{ counterStore.count }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounterStore } from '../stores/counterStore';
import BaseButton from '../components/BaseButton.vue';

export default defineComponent({
  components: { BaseButton },
  setup() {
    const counterStore = useCounterStore();
    const increment = () => {
      counterStore.increment();
    };

    return { counterStore, increment };
  },
});
</script>