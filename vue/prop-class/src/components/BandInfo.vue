<template>
  <div class="p-5">
    <h2 class="card-title">{{ props.bandInfo.name }}</h2>
    <h5 class="card-p-genre">{{ props.bandInfo.genre }}</h5>
  </div>
</template>

<script setup>
const props = defineProps({
  bandInfo: Object,
});
</script>
