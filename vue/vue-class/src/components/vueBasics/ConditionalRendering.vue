<template>
  <h1>Conditional Rendering using v-if, v-else-if, v-else directives :)</h1>
  <div id="conditional-rendring-part-1">
    <!-- Simple Approach using a v-if  directive first -->
    <h2 v-if="number === 0">The number is Zero</h2>
    <!-- Expanding our initial condition by adding a v-else directive -->
    <h2 v-else>Wu Tang is for the children</h2>
  </div>
  <!-- RULES: v-else or v-else-if must be placed after initially putting a v-if directive, if not you will get an error. -->`
  <div id="conditional-rendering-part-2">
    <h2 v-if="number === 0">The number is zero</h2>
    <h2 v-else-if="number < 0">This number is a negative number</h2>
    <h2 v-else-if="number > 0">This number is a positive number</h2>
    <h2 v-else>This is not a number</h2>
  </div>

  <div id="conditional-rendering-part-3">
    <!-- What if we want to conditonally render more than one element in the same condition -->

    <!-- possible solutions -->

    <!-- 1. add a v-if to each element, we have duplication of code and as programmers we should avoid this! -->
    <!-- <h2 v-if="display">Kendrick Lamar</h2>
    <h2 v-if="display">Outkast</h2>
    <h2 v-if="display">Lil John</h2> -->

    <!-- 2. Wrap all of the elements inside of a div in order to simplify -->
    <!-- <div v-if="display">
      <h2>Kendrick Lamar</h2>
      <h2>Outkast</h2>
      <h2>Lil John</h2>
    </div> -->

    <!-- 3. Using a template tag to avoid inyecting extra elements into the DOM and also, the eelemtns are inyected without a parent tag that is invisible inside the HTML.  -->
    <template v-if="display">
      <h2>Kendrick Lamar</h2>
      <h2>Outkast</h2>
      <h2>Lil John</h2>
    </template>
  </div>

  <div id="conditional-rendering-part-4">
    <!-- Using a v-show directive -->
    <h2 v-show="showElement">Using v-show directive</h2>
    <h2 v-if="showElement">Using a v-if directive</h2>
  </div>
</template>

<script setup>
import { ref } from "vue";

const number = ref(-8);

const display = ref(true);

const showElement = ref(false);
</script>

<style></style>
