<template>
  <Toast position="top-right" class="fixed-top" style="z-index: 10000" />
  <div>
    <RouterView />
  </div>
</template>

<script setup>
  import Toast from "primevue/toast";
  import { RouterView } from "vue-router";
</script>
