<template>
  <h1>{{ name }}</h1>
  <h2>{{ age }}</h2>
  <h3>{{ birthplace }}</h3>
  <h4>{{ currentLocation }}</h4>
  <hr />
  <NameComp :name="name" />
  <AgeComp :age="age" />
  <BirthplaceComp :birthplace="birthPlace" />
  <CurrentLocation :currentLocation="currentLocation" />
</template>

<script setup>
import { ref } from "vue";
import NameComp from "./practice/NameComp.vue";
import BirthplaceComp from "./practice/BirthplaceComp.vue";
import AgeComp from "./practice/AgeComp.vue";
import CurrentLocation from "./practice/CurrentLocation.vue";

defineProps({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  birthplace: {
    type: String,
  },
  currentLocation: {
    type: String,
  },
});
</script>

<style>
hr {
  margin: 2rem 0;
}
</style>
