<template>
  <div id="computed-explana">
    <p>
      Explanation
      <br />
      Computed properties are also functions but they are different from
      methods. They run only once per page load, and it will re-run only if any
      of it’s dependent variable changes.
    </p>
    <p>
      Computed properties are properties that can be linked to the template,
      similar to data properties.<br />
      They are used to compose new data from existing sources.
      <br />
      A very important point about them is that they have high performance since
      they are basically cached computations that are only updated when their
      dependencies change now this description seems more complex than it really
      is so let's go back to the code vs and understand all about computed
      properties in the view
    </p>

    <strong>IMPORTANT</strong>
    <p>When not to use computed properties</p>
    <p>
      1. Do not use computed properties for asynchronous operations <br />
      2. If your computed property does not contain any reactive dependencies (a
      fancy way of saying, whether any data depends on this computed property to
      reflect in the UI), there is no point for that to be computed.
    </p>
  </div>
  <hr />

  <div id="example-1">
    <p><strong>Example 1</strong></p>
    <!-- without using any type of computed properties -->
    <p>Guitarrist - {{ firstName }} {{ lastName }}</p>

    <!-- Using a computed property inside the function favGuitarrist -->
    <p>Guitarrist - {{ favGuitarrist }}</p>
    <button @click="changeFavGuitarrist">Change fav guitarrist</button>
  </div>

  <div id="example-2">
    <p>
      Computed Function Total - <strong>{{ total }}</strong>
    </p>
    <!-- <p>
      Regular Function Total - <strong>{{ totalRegular() }}</strong>
    </p> -->
    <button @click="addItem">Add item</button>

    <!-- Ejemplo con unn condicional sencillo -->
    <!-- <h3>Our Shopping List</h3>
    <div class="shopping" v-for="(item, index) in items" :key="index">
      <div v-if="item.price > 200">
        <ul>
          <li>{{ item.title }} - €{{ item.price }}</li>
        </ul>
      </div>
    </div> -->

    <!-- Ejemplo con unn condicional sencillo -->
    <h3>Our Shopping List</h3>
    <div class="shopping" v-for="(item, index) in items" :key="index">
      <div>
        <ul>
          <li>{{ item.title }} - €{{ item.price }}</li>
        </ul>
      </div>
    </div>

    <!-- Ejemplo con una propiedad computada que se encarga de filtrar los items en la lista por nosotros -->
    <h3>Our Expensive Computed Shopping List</h3>
    <div class="shopping" v-for="(item, index) in expensiveItems" :key="index">
      <div>
        <ul>
          <li>{{ item.title }} - €{{ item.price }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// EXAMPLE 1
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

//EXAMPLE 2

const items = ref([
  { id: 1, title: "TV", price: 100 },
  { id: 2, title: "Iphone", price: 600 },
  { id: 3, title: "Computer", price: 300 },
  { id: 4, title: "Monitor", price: 700 },
  { id: 5, title: "Mercadona", price: 100 },
]);

// Regular Function
// const totalRegular = () => {
//   console.log(
//     "Total exceuted normally[regularfunction], cannot be used freely inside moustacheSyntax, that means we need to call the method completely"
//   );
//   return items.value.reduce((total, curr) => (total = total + curr.price), 0);
// };

// Computed Function
const total = computed(() => {
  console.log("Total Computed via Computed Property");
  return items.value.reduce((total, curr) => (total = total + curr.price), 0);
});

//Function to addItem to list
const addItem = () => {
  items.value.push({ id: 4, title: "Headphones", price: 80 });
};

//Computed Function to conditionally rendering items who are more expensive than 200
const expensiveItems = computed(() => {
  return items.value.filter((item) => item.price > 200);
});
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

.shopping {
  padding: 0 2rem;
  border: 1px black solid;
}

li {
  font-size: 24px;
}
</style>
