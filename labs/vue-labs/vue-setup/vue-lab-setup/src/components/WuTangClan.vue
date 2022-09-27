<template>
  <section>
    <img :src="wuTangUrl" alt="" />
    <h1>{{ wuTangText }}</h1>
  </section>
  <div>
    <button v-on:click="wuTangClan">Function Expression</button>
    <button @click="wuTangClan2">Function Declaration</button>
  </div>
  <a href=""></a>
</template>

<script setup>
import { ref } from "vue";

const wuTangUrl = ref(
  "https://www.iamrap.es/media/iamrap/images/2022/05/15/2022051520332082997.png"
);

const wuTangText = ref("Wu Tang Clan is for the children");

// FunctionExpressions
function wuTangClan() {
  console.log("Wu Tang is for the children");
  alert("Wu Tang is for the children");
}

//FunctionDeclarations
const wuTangClan2 = () => {
  console.log("Wu Tang is for the children");
  alert("Wu Tang is for the children");
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

h1 {
  text-align: center;
}

button {
  padding: 1rem 2rem;
  border-radius: 10px;
}

div {
  display: flex;
  justify-content: space-around;
}
</style>
