<template>
  <img :src="props.bandImage" alt="" class="card-img" />
</template>

<script setup>
const props = defineProps({
  bandImage: String,
});
</script>
