<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default:
      " https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x900.png",
  },
  imgDescription: {
    type: String,
    default: "Some text here..",
  },
  text: {
    type: String,
    required: true,
    default: "My written text",
  },
});

const post = {
  id: 1,
  title: "My Journey with Vue",
};
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <img :src="img" :alt="imgDescription" />
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.greetings img {
  width: 24rem;
  height: 24rem;
  object-fit: contain;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
