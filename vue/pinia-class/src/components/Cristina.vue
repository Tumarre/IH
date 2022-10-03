<template>
  <img
    src="https://www.shbarcelona.com/blog/en/wp-content/uploads/2017/08/Sunrise-810x530.jpg"
    alt=""
    @click="$emit('cristinaFirstEmit')"
  />
</template>

<script setup>
const emit = defineEmits(["cristinaFirstEmit"]);
</script>

<style>
img {
  width: 400px;
  height: 400px;
}
</style>
