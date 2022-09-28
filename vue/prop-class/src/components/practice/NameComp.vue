<template>
  <h1>{{ name }}</h1>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
