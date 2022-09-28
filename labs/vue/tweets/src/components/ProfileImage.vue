<template>
  <img :src="image" className="profile" :alt="imageAlt" />
</template>

<script setup>
defineProps({
  image: {
    type: String,
    default: "https://i.imgur.com/9yw1Fyw.jpg",
  },
  imageAlt: {
    type: String,
  },
});
</script>
