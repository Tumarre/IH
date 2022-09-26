<template>
  <div id="using-v-html-directive">
    <h1>Using a v-html Directive</h1>
    <div v-html="juditsFavBand" />
    <div v-html="bindingHtmlCrossside"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let juditsFavBand = ref(`<div>
    <h1>Judit's Fav band: Imagine Dragons</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus
      sapiente et, placeat ea iusto facilis ratione quae, mollitia itaque
      laboriosam laudantium sunt temporibus maiores consequatur alias dolorem
      ipsa tempora.
    </p>
    <img
        class="imagine"
      src="https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg"
      alt=""
    />
  </div>`);

const bindingHtmlCrossside = ref(
  `<a href="#" onClick="alert('Yo yo yo you have been hacked by the wu tang clan')">Win a prize by clicking here!</a>`
);
</script>

<style>
.imagine {
  width: 500px;
  height: 300px;
}
</style>
