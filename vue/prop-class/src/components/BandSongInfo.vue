<template>
  <p class="card-p">
    {{ props.bandSongInfo }}
  </p>
  <button @click="helloWorld">click me</button>
</template>

<script setup>
const props = defineProps({
  bandSongInfo: String,
});

const emit = defineEmits(["myFirstEmit"]);

function helloWorld() {
  emit("myFirstEmit");
}
</script>
