<template>
  <div id="computed-part-one">
    <h1>Guitarrist - {{ firstName }} {{ lastName }}</h1>
    <h1>Computed Property - Guitarrist {{ favGuitarrist }}</h1>

    <button @click="changeFavGuitarrist">Change Favorite Guitarrist</button>
  </div>
  <div id="computedpart-two-diff-between-methods&computed">
    <button @click="items.push({ id: 5, title: 'coffee', price: 400 })">
      Add Item
    </button>

    <h1>Using a conventional method - {{ getTotal() }}</h1>
    <h1>Using a computed method - {{ total }}</h1>
    <div>
      <input type="text" v-model="country" />
    </div>
  </div>
  <div id="computed-part-3-using-vFor-directive">
    <h1>Using a conventional method</h1>
    <template v-for="item in items" :key="item.id">
      <h1 v-if="item.price < 100">{{ item.title }} - {{ item.price }}</h1>
    </template>

    <h1>Using a computed method</h1>
    <template v-for="(item, index) in computedItemsList" :key="index">
      <h1>{{ item.title }} - {{ item.price }}</h1>
    </template>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const firstName = ref("Gustavo");
const lastName = ref("Cerati");
const items = ref([
  { id: 1, title: "Monitor Portatil", price: 200 },
  { id: 2, title: "Airpods", price: 100 },
  { id: 3, title: "A comfy sweater", price: 50 },
  { id: 4, title: "Blue Light Glasses", price: 80 },
]);

const country = ref("");

function changeFavGuitarrist() {
  favGuitarrist2 = "John Frusciante";
}

function getTotal() {
  conosle.log("getTotal function - not computed");
  return items.value.reduce((total, curr) => (total = total + curr.price), 0);
}

const favGuitarrist = computed(() => {
  return `${firstName} ${lastName}`;
});

const favGuitarrist2 = computed({
  get() {
    return `${firstName} ${lastName}`;
  },
  set(value) {
    const name = value.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
  },
});
</script>

<style></style>
