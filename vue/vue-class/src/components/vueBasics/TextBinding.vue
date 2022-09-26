<template>
  <div id="binding-text">
    <h1>Text binding</h1>
    <p>Using text-interpolation with the infamous MOUSTACHE SYNTAX</p>
    <div id="using-moustache-syntax">
      <!-- Correct way, siempre nos acatamos a apuntar a un tipo de texto primitivo/no-primitivo dentro de un solo BIGOTE :) -->
      <h2>Hello {{ jarko }} y {{ aleix }}</h2>

      <!-- Odd way but it works -->
      <!-- Funciona aunque esto no es el principio de como usamos este syntax, preferible desprender siempre lo que necesitas usar dentro de un BIGOTE:)  -->
      <h2>{{ (jarko, aleix) }}</h2>
    </div>
  </div>
</template>

<script setup>
// 1. si queremos usar un tipo de dato primitivo o no primitivo dentro del composition API tenemos que activar lo que viene siendo algo que se llama reactividad. Esta rectividiad nos habilita el uso de nuestros datos primitivos/no-primitivos dentro del template mediante este metodo que se llama "ref"

// 2. Importamos el metodo ref mediante una destructuracion que vemos en la linea de abajo { ref } desee la carpeta de vue que vive en los node-modules
import { ref } from "vue";

// Usamos la regla, de el syntax de bigotes para poder acceder a nuestra data dentro del templateTag que es nuestro HTML.
let jarko = ref("Jarko");
let aleix = ref("Aleix");
</script>

<style scoped></style>
