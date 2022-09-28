<template>
  <h2>{{ currentLocation }}</h2>
</template>

<script setup>
defineProps({
  currentLocation: {
    type: String,
    default: "Barna",
  },
});
</script>
