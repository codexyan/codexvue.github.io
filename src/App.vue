<script setup>
import { RouterView } from "vue-router";

// Component
import Navbar from "./components/layouts/Navbar.vue";
</script>

<template>
  <header>
    <div>
      <Navbar/>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/css/styles.css";
</style>