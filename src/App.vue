<script setup>
import {RouterLink, RouterView} from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <component>
    <Header />
    <RouterView />
    <Footer />
  </component>
</template>

<style scoped></style>
