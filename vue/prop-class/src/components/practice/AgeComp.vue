<template>
  <h2>{{ age }}</h2>
</template>

<script setup>
defineProps({
  age: {
    type: [Number, String],
  },
});
</script>
