<template>
  <div id="using-v-text-directive">
    <h1>Using a v-text Directive</h1>
    <h3 v-text="favBand"></h3>
    <div v-text="favBand"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let favBand = ref("One of My favorite bands in the world is The Doors");
</script>

<style scoped></style>
