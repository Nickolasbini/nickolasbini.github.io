<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import { RouterView } from "vue-router";

</script>

<template>
  <div class="bg-deep-sea text-silver font-semibold">
    <HeaderComponent />

    <section class="mt-5">
      <RouterView />
    </section>

    <FooterComponent />
  </div>
</template>
