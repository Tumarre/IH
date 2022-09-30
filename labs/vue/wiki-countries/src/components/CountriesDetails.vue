<template>
  <!-- Using individual data properties to store data from api -->
  <!-- <div>
      <img
        v-bind:src="`https://flagcdn.com/w320/${alpha2Code.toLowerCase()}.png`"
        alt=""
        class="mb-5"
      />
      <h1>{{ name }}</h1>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <p class="fw-bold">Capital</p>
          <p class="me-5">{{ capital }}</p>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <p class="fw-bold">Area</p>
          <p class="me-5">{{ area }} km2</p>
        </li>
        <li class="list-group-item">
          <p class="fw-bold">Borders:</p>
          <p v-if="borders.length === 0">
            This country has no borders <br />
            Who needs a border when you got the Wu Tang Clan. <br />
            <strong>Wu Tang, unifying societies since 1992!</strong>
          </p>
          <p v-else v-for="(border, index) in borders" :key="index">
            <router-link :to="`/list/${border}`">{{ border }}</router-link>
          </p>
        </li>
      </ul>
    </div> -->

  <!-- Using an object to store all data properties and use it on template -->
  <div v-if="countryInfo">
    <img
      v-bind:src="`https://flagcdn.com/w320/${countryInfo.alpha2Code.toLowerCase()}.png`"
      alt=""
      class="mb-5"
    />
    <h1>{{ countryInfo.name.common }}</h1>
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <p class="fw-bold">Capital</p>
        <p class="me-5">{{ countryInfo.capital[0] }}</p>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <p class="fw-bold">Area</p>
        <p class="me-5">{{ countryInfo.area }} km2</p>
      </li>
      <li class="list-group-item">
        <p class="fw-bold">Borders:</p>
        <p v-if="countryInfo.borders.length === 0">
          This country has no borders <br />
          Who needs a border when you got the Wu Tang Clan. <br />
          <strong>Wu Tang, unifying societies since 1992!</strong>
        </p>
        <p v-else v-for="(border, index) in countryInfo.borders" :key="index">
          <router-link :to="`/list/${border}`">{{ border }}</router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive, watch, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const name = ref("");
const capital = ref("");
const alpha3Code = ref("");
const area = ref("");
const borders = ref([]);
const alpha2Code = ref("");
const countryInfo = ref(null);

// const countryData = reactive({
//   name: "",
//   capital: "",
//   alpha3Code: "",
//   area: "",
//   borders: [],
//   alpha2Code: "",
// });

//Constante para usar el route del vue-router dentro de mi archivo
const route = useRoute();

// Esto es la manera de como importamos metodos/usamos el method{} del options api en el comp

const getCountryByAlphaCode = async () => {
  const alpha3Code = route.params.alpha3Code;

  const response = await fetch(
    `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
  );

  const finalResponse = await response.json();

  console.log(finalResponse);

  const name = finalResponse.name.common;
  const capital = finalResponse.capital[0];
  const area = finalResponse.area;
  const borders = finalResponse.borders;
  const alpha2Code = finalResponse.alpha2Code;

  countryInfo.value = finalResponse;

  return { name, capital, area, borders, alpha2Code, countryInfo };
};

//Usando el mounted() que pasa a ser onMounted() en el composition API
onMounted(() => {
  getCountryByAlphaCode();
});

//Usando el computed method nativo de vue en el composition api
const countryCode = computed(() => {
  return route.params.alpha3Code;
});

watch(countryCode, (newCountryCode) => {
  getCountryByAlphaCode();
});
</script>
