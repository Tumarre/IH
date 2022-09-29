<template>
  <div>
    <div id="computed-one">
      <h1>Guitarrist - {{ firstName }}{{ lastName }}</h1>
      <h1>Computed Guitarrist - {{ favGuitarrist }}</h1>
      <!-- <h2>
      Total - {{ items.reduce((total, curr) => (total = total + curr.price), 0) }}
      </h2> -->
      <button @click="changeFavGuittarrist">Change Favorite Guitarrist</button>
      <button @click="items.push({ id: 4, title: 'Keyboard', price: 50 })">
        Add item
      </button>

      <h2>Computed Total - {{ total }}</h2>
      <h2>Method Total - {{ getTotal() }}</h2>
    </div>
    <div id="computed-v-for">
      <template v-for="item in items" :key="item.id">
        <!-- <h2 v-if="item.price > 40">{{ item.title }} - {{ item.price }}</h2> -->
        <h2 v-if="item.id === 1">{{ item.title }} - {{ item.price }}</h2>
      </template>
      <h2>Expensive items:</h2>
      <h2 v-for="item in expensiveItems" :key="item.id">
        {{ item.title }} - {{ item.price }}
      </h2>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const firstName = ref("Gustavo");
const lastName = ref("Cerati");
const items = ref([
  {
    id: 1,
    title: "TV",
    price: 100,
  },
  {
    id: 2,
    title: "Phone",
    price: 200,
  },
  {
    id: 3,
    title: "Laptop",
    price: 300,
  },
]);

function getTotal() {
  console.log("getTotal method");
  return items.value.reduce((total, curr) => (total = total + curr.price), 0);
}

function changeFavGuittarrist() {
  favGuitarrist2.value = "John Mayer";
}

/*   function addKeyboard() {
    items.value.push({ id: 4, title: 'Keyboard', price: 50 });
  }; */

const favGuitarrist = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});

const favGuitarrist2 = computed({
  //  READ
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

/*   const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(' ')
  }
}) */

const total = computed(() => {
  console.log("total computed property");
  return items.value.reduce((total, curr) => (total = total + curr.price), 0);
});

const expensiveItems = computed(() => {
  return items.value.filter((item) => item.price > 100);
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
</style>
