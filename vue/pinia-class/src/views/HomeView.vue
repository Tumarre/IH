<script setup>
import { ref, computed } from "vue";
import { useCounterStore } from "../stores/counter";
import Button from "../components/Button.vue";
import Button2 from "../components/Button2.vue";
import Cristina from "../components/Cristina.vue";

const count = ref(0);

function increaseCount() {
  count.value++;
}

function decreaseCount() {
  count.value--;
}

const oddOrEven = computed(() => {
  if (count.value % 2 === 0) return "Even";
  else return "Odd";
});

// USE OF STORE HERE :)

//Lets store the value of the counter.js import as a variable :)
const storeCounter = useCounterStore();

// Emits
function myEmitedLogic() {
  alert(
    "Hello, el click de ete button vive en su componente pero la logica vive en el archivo del homeView.vue"
  );
}

function cristinasFunction() {
  alert("Hola Cristina :)");
}
</script>

<template>
  <div class="count">
    {{ count }}
  </div>
  <div class="count">
    {{ storeCounter.count }}
  </div>
  <p>Not Using Store</p>
  <div class="buttons">
    <button class="button" @click="decreaseCount">Decrease</button>
    <button class="button" @click="increaseCount">Increase</button>
  </div>
  <p>Using Store</p>
  <div class="buttons">
    <button class="button" @click="storeCounter.decreaseCount">Decrease</button>
    <button class="button" @click="storeCounter.increaseCount">Increase</button>
  </div>
  <div class="computed">
    <div class="count">{{ oddOrEven }}</div>
  </div>

  <div class="layout">
    <Button @miPrimerEmit="myEmitedLogic" />
    <Button2 @miSegundoEmit="increaseCount" />
    <h1>{{ count }}</h1>
  </div>

  <div>
    <Cristina @cristinaFirstEmit="cristinasFunction" />
  </div>
</template>

<style>
.count {
  font-size: 40px;
  margin: 30px;
  text-align: center;
}

.title {
  font-size: 40px;
  margin: 30px;
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: center;
}

.layout {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  font-size: 24px;
  margin: 20px;
  padding: 1rem 3rem;
  border-radius: 8px;
}
</style>
