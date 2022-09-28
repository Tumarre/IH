<template>
  <h1>Iterating Elements</h1>

  <div id="v-for-directive">
    <!-- special syntax that the v-for requires, here names is the array that we are referencing and name is just a keyword that we use for the specific piece of the array -->

    <!-- A. La manera sencilla, iterando en base a un elemento y usando un key para asegurarnos de no tener errores al fetchear nuestra data. -->

    <!-- Using name to iterate and point as a key -->

    <div id="iterating-arrays">
      <!-- A. La manera sencilla, iterando en base a un elemento y usando un key para asegurarnos de no tener errores al fetchear nuestra data. -->

      <!-- Using name to iterate and point as a key -->
      <h3>List of football teams</h3>
      <ul>
        <li v-for="footballTeam in footballTeams" v-bind:key="footballTeam">
          {{ footballTeam }}
        </li>
      </ul>
      <!-- B. La manera que usamos para sacar el index(numero) que le corrsponde a cada elemento del array -->
      <!-- Using the index of each arrayElement -->
      <ul>
        <li v-for="(footballTeam, index) in footballTeams" v-bind:key="index">
          {{ index }}. {{ footballTeam }}
        </li>
      </ul>
    </div>

    <div id="iterating-arrays-of-objects">
      <h3>List of Yoga Practices + Times</h3>
      <ul>
        <li v-for="(yogaType, index) in yogaTypes" v-bind:key="index">
          {{ yogaType.type }} - ⏰ {{ yogaType.duration }}
        </li>
      </ul>
    </div>

    <div id="iterating-an-array-of-an-array">
      <div v-for="(actor, index) in actors" :key="index">
        <h3>{{ index }} - {{ actor.name }}</h3>
        <p v-for="(movie, index) in actor.movies" :key="index">
          {{ index }} - {{ movie }}
        </p>
      </div>
    </div>

    <div id="iterating-through-properties-of-an-object">
      <ul>
        <li v-for="value in myInfo" :key="value">
          {{ value }}
        </li>
      </ul>
      <hr />
      <ul>
        <li v-for="(value, key, index) in myInfo" :key="index">
          {{ value }} - {{ key }} - {{ index }}
        </li>
      </ul>
    </div>
    <hr />
    <div id="conditionally-rendering-ListItems-using-v-for">
      <!-- <ul>
        <li
          v-for="artist in hiphopArtists"
          :key="artist"
          v-if="artist == 'Ms. lauryn Hill'"
        >
          {{ artist }}
        </li>
        <li v-else>There is no artist with that name...</li>
      </ul> -->

      <template v-for="artist in hiphopArtists" :key="artist">
        <h2 v-if="artist === 'Ms. lauryn Hill' || artist === 'De La Soul'">
          {{ artist }}
        </h2>
        <h2 v-else>There is no artists under than name</h2>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const andreu = ref(true);

const footballTeams = ref([
  "Fc Barcelona",
  "Arsenal",
  "Real Madrid",
  "Juventus",
  "Bayern Munich",
  "Fc Barcelona",
]);

const yogaTypes = ref([
  { type: "Ashtanga", duration: "60 Mins" },
  { type: "Hatha", duration: "80 Mins" },
  { type: "Vinyasa", duration: "90 Mins" },
  { type: "Kundalini", duration: "5 Mins" },
]);

const actors = ref([
  {
    name: "Robert De Niro",
    movies: ["The Godfather II", "Casino", "Goodfellas"],
  },
  {
    name: "Daniel Day Lewis",
    movies: [
      "There will be blood",
      "The Last of the Mohicans",
      "Gangs of New York",
    ],
  },
  {
    name: "Merryl Streep",
    movies: ["The Devil wears prada", "Kramer vs Kramer", "Sophies Choice"],
  },
]);

const myInfo = ref({
  name: "Diego Z",
  school: "Ironhack",
  course: "FE Vue",
});

const hiphopArtists = ref([
  "Ms. lauryn Hill",
  "A Tribe Called Quest",
  "De La Soul",
  "Ms. lauryn Hill",
]);

console.log(hiphopArtists);
</script>

<style>
p {
  margin-left: 2rem;
}
</style>
