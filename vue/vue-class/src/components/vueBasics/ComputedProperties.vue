<template>
  <div id="computed-explana">
    <h2>
      Explanation
      <br />
      Computed properties are also functions but they are different from
      methods. They run only once per page load, and it will re-run only if any
      of it’s dependent variable changes.
    </h2>
  </div>

  <div id="example-1">
    <!-- without using any type of computed properties -->
    <p>Guitarrist - {{ firstName }} {{ lastName }}</p>

    <!-- Using a computed property inside the function favGuitarrist -->
    <p>Guitarrist - {{ favGuitarrist }}</p>
    <button @click="changeFavGuitarrist">Change fav guitarrist</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const firstName = ref("Gustavo");
const lastName = ref("Cerati");

// basic template for computed function
// const template = computed(() => {}) - Use for reference

// Computed property arrowFunction
const favGuitarrist = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});

// regular function to trigger computedPropertyFunction and change the name of the guitarrist to something new!
const changeFavGuitarrist = () => {
  favGuitarrist2.value = "Eric Clapton";
};

const favGuitarrist2 = computed({
  // Monitors / READ
  get() {
    return `${firstName.value} ${lastName.value}`;
  },
  // WRITE, UPDATE, DELETE
  set(value) {
    const names = value.split(" ");
    firstName.value = names[0];
    lastName.value = names[1];
  },
});

// GET & SET inner functions
// We are going to expand the use of a computedProperty by using their respective methods that are associated with such computedProperty. Which are getters & setters
// get() - Its monitors for anything type of data that can change. We can read/watch/monitor
//set() - Takes whatever we are monitoring and changes the data for us. We can either write, update, delete

// const functionUsingSetAndGetTemplate = computed({
//   get() {},
//   set() {}
// })
// A real example can be observed in line 40 function name "favGuitarrist2()"
</script>

<style>
h1 {
  font-size: 16px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

p {
  font-size: 2rem;
}
</style>
