<template>
  <button class="button" @click="$emit('miSegundoEmit')">Click me</button>
</template>

<script setup>
function myButton() {
  console.log("Hello World");
}

// We declare the custom emit here in order to be used anywhere we want :)
defineEmits(["miSegundoEmit"]);
</script>

<style></style>
