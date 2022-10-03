<template>
  <button class="button" @click="$emit('miPrimerEmit')">Click me</button>
</template>

<script setup>
function myButton() {
  console.log("Hello World");
}

// We declare the custom emit here in order to be used anywhere we want :)
defineEmits(["miPrimerEmit"]);
</script>

<style></style>
