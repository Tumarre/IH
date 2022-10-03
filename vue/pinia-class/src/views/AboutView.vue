<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ storeCounter.count }}</h2>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
