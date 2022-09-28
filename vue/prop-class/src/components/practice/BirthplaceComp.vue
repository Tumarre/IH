<template>
  <h2>{{ birthPlace }}</h2>
</template>

<script setup>
defineProps({
  birthPlace: {
    type: String,
    default: "Citizen of the damn world",
  },
});
</script>
