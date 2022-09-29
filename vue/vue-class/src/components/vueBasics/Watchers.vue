<template>
  <div id="watcher-explanation">
    <p>
      A watcher is a special Vue.js feature that allows you to spy on one
      property of the component state, and run a function when that property
      value changes.
    </p>
    <p>
      As the name suggests, it just watches over a property for any changes.
    </p>

    <p>When to use Watchers</p>
    <ul>
      <li>
        You want to listen when a data property changes, and perform some action
      </li>
      <li>You want to listen to a prop value change</li>
      <li>
        You only need to listen to one specific property (you can’t watch
        multiple properties at the same time)
      </li>
      <li>
        You want to watch a data property until it reaches some specific value
        and then do something
      </li>
    </ul>
  </div>

  <div id="example-1">
    <h3>Example 1</h3>
    <p>My Name is what? My name is who? my name is {{ name }}</p>
    <button @click="changeName()">Change My Name</button>
  </div>

  <div id="ejemplo-2">
    <h3>Example 2</h3>
    <h3>Volume Tracker (0-20)</h3>
    <p>
      The current volume is <strong>{{ volume }}</strong>
    </p>
    <div>
      <button @click="volume -= 1">Decrease</button>
      <button @click="volume += 1">Increase</button>
    </div>
  </div>

  <div id="ejemplo-3">
    <h3>Example 3</h3>

    <!-- Mutating Arrays -->

    <!-- Since we are mutating an array, we need to add extra functionality to the watcher function, which is the deep:true -->
    <button @click="addMovie">Add Movie - push()</button>

    <!-- concat returns new array thus we can use this approach to create a new one instead of mutating them, remove the deep:true on the watcher function to test this out!  -->
    <button @click="movieList = movieList.concat(['Titanic'])">
      Add Movies - concat()
    </button>

    <h3>Movie List</h3>
    <p v-for="(movie, index) in movieList" :key="index">
      {{ movie }}
    </p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

//EXAMPLE 1 - Name Change
let name = ref("Flavio");

function changeName() {
  name.value = "Aleix";
}

watch(name, (newValue, oldValue) => {
  console.log(`New Value is ${newValue} - the old value was ${oldValue}`);
});

//EXAMPLE 2 - Volume tracker
let volume = ref(0);

//Watch Function to monitor volume change and display alert msg is user goes over 8decibels...

// V1
watch(volume, (newValue, oldValue) => {
  if (newValue > oldValue && newValue === 8) {
    alert(
      "Yo yo yo my individual, you better check your ears cause you'll be deaf in a few years!"
    );
  }
});

// V2 - Jumps alert once we go back down, not the best useCase for our users....
watch(volume, (newValue, oldValue) => {
  if (newValue === 8) {
    alert(
      "Yo yo yo my individual, you better check your ears cause you'll be deaf in a few years!"
    );
  }
});

//EXAMPLE 3 - Mutating Arrays
const movieList = ref(["Batman", "Spiderman"]);

function addMovie() {
  movieList.value.push("Saving Private Ryan");
}

// Why Deep true ?
//Using Watchers with Objects and Arrays, if you dont specify deep: true there is no way of accesing the objects or arrays elements
watch(
  movieList,
  (newValue, oldValue) => {
    console.log(`Updated List ${newValue}`);
  }
  //   { deep: true }
);
</script>

<style>
#watchers {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: olivedrab;
}
.sold-out {
  color: red;
}
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
