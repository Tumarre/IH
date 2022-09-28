<template>
  <span className="timestamp">{{ timestamp }}</span>
</template>

<script setup>
defineProps({
  timestamp: {
    type: String,
    default: () => {
      let date = new Date();
      return date.toISOString().split("T")[0];
    },
  },
});
</script>
