<template>
    <button class="btn btn-primary" @click="$emit('click')">
      {{ label }}
    </button>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      label: { type: String, required: true },
    },
  });
  </script>