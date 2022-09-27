<template>
  <h1>Using a v-bind directive</h1>
  <div id="binding-attributes">
    <!-- Si queremos bindear atributos dentro de nuestro codigo no podemos usar el syntax de los bigotes!, El euqipo de vue a creado tags especificos para poder bindear esto tipos de atributos.  -->

    <div id="binding-ids">
      <!-- Binding with an ID Attribute -->
      <h2 v-bind:id="headingIdExample">Heading - with a binding attribute</h2>
      <!-- Binding with an ID Attribute - USING A SHORTHAND -->
      <h2 :id="headingIdExample">
        Heading - wigh a SHORTAND property that binds an attribute to this h2
      </h2>
    </div>

    <div id="binding-reservedKeywords">
      <!-- Binding to a reserved keyword with a Boolean Value -->
      <!-- Case 1 - Binding a value via a variable that is reactive and a boolean value by default -->
      <button :disabled="isDisabled">Heading - Binding a boolean value</button>

      <!-- Case 2 - Same Binding as above with the exepction that we are taking into account the OPPOSITE value of the boolean variable via the "!" exclamation sign -->
      <button :disabled="!isDisabled">Heading - Binding a boolean value</button>
    </div>

    <div id="binding-classes">
      <!-- Binding with a Class Attribute - Using a shorthand property ":" -->
      <h2 :class="status">Underline Text - Binding a class attribute</h2>

      <!-- Binding with a Class Attribute - With more than one class -->
      <h2 class="underline" :class="twoClassesBinding">
        Underline Text Via regular class and we change the color through binding
        - Binding a class attribute
      </h2>
    </div>

    <div id="binding-conditional-attributes">
      <h1>Using a conditional to bind class</h1>

      <!-- Conditionally binding a class attribute to an element depending if the dataProperty = true || false  -->
      <h2 v-bind:class="isPromoted && 'promoted'">Promoted Movies</h2>

      <!-- Operador ternario - Ternary Operator -->
      <!-- This checks for both conditions -->
      <!-- Breakdown del ternario, el ternario esta compuesto por 2 condiciones. la primera condicion se asigna mediante apuntando a la propiedad booleanica, que quermeos apuntar, ej[isSoldOut] seguido por el signo de interrogacion que validad si esa propieda es verdadera, si esa condicion es correcta, se ejecuta la clase ene ste ejemplo en particular para asignarle la clase [sold-out]. Si la condicion es falsa, se ejecutala 2nda parte del ternario que se especifica despues de los 2 puntos [:] seguida por la clase que queremos asignalre mientras la condicion sea falsa.  -->

      <h2 v-bind:class="isSoldOut ? 'sold-out' : 'available'">Avatar</h2>

      <!-- Binding an array of classes  -->
      <h2 v-bind:class="['promoted', 'underline']">
        Binding an Array of classes
      </h2>

      <!-- Conditionally attaching classes by combing expressions within the array -->
      <!-- 1st. This is 2 block array with two different conditions that at the end of the 2nd condition we are binding a class if the booleanic variable "isSoldOut" is true/false.  -->
      <h2
        v-bind:class="[
          isPromoted && 'promoted',
          isSoldOut ? 'sold-out' : 'available',
        ]"
      >
        Array of Conditional classes
      </h2>
      <!-- 2st. This is 2 block array with two different conditions that at the end of the 2nd condition we are NOT binding a class if the booleanic variable "isSoldOut" is false. This way we only bind the 1st  block of the conditonal array -->
      <h2
        v-bind:class="[isPromoted && 'promoted', isSoldOut ? 'sold-out' : '']"
      >
        Array of Conditional classes
      </h2>
      <!-- 3rd. This is 2 block array with a condition that checks for only one instance of the booleanic value  on both sections of the array -->
      <h2 v-bind:class="[isPromoted && 'promoted', isSoldOut && 'available']">
        Array of Conditional classes - XAVI
      </h2>
    </div>

    <div id="binding-styles">
      <h1>Binding Styles</h1>
      <!-- Dynamically binding inline attributes by using an object directly into the HTML -->

      <h2
        v-bind:style="{
          textDecoration: 'underline',
          color: textColor,
          fontSize: textSize + 'px',
        }"
      >
        Inline Styling through an object approach
      </h2>

      <!-- Dynamically bind an object fetched from the  script tag -->
      <h2 v-bind:style="objectProperty">
        Object added to style from the script tag
      </h2>

      <h2 v-bind:style="[objectArrayCase1, objectArrayCase2]">
        Injecting an array of objects inside the style tag via binding through
        the script tag
      </h2>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let headingIdExample = ref("ramons-heading");
let isDisabled = ref(false);
const status = ref("danger");
const twoClassesBinding = ref("bindingExtraClasses");

const isPromoted = ref(true);

const isSoldOut = ref(false);

const textColor = ref("red");
const textSize = ref(20);

const objectProperty = ref({
  color: "orange",
  fontSize: "25px",
  textDecoration: "underline",
});

const objectArrayCase1 = ref({
  color: "yellow",
  fontSize: "25px",
  textDecoration: "underline",
});
const objectArrayCase2 = ref({
  marginLeft: "2rem",
});
</script>

<style scoped>
#binding-reservedKeywords,
#binding-ids,
#binding-classes {
  margin: 2rem 0;
}

.underline {
  text-decoration: underline;
}

.danger {
  color: red;
  text-decoration: underline;
}

.bindingExtraClasses {
  color: yellow;
}

.promoted {
  font-style: italic;
  color: blue;
}

.sold-out {
  text-decoration: line-through;
  color: red;
}

.available {
  color: green;
  text-decoration: underline;
}

.underline {
  font-size: 16px;
}
</style>
