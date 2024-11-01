<template>
  <footer class="w-full font-semibold py-4 mt-0 md:mt-36 pb-10 text-center">
    <p class="text-sm">&copy; {{ translate('built by', 'ucfirst') }} Nickolas Alvaro Bini</p>
    <p class="text-sm">2024</p>
  </footer>
</template>

<script setup>
  import { translate } from '@/composables/translate';
</script>
<style scoped></style>