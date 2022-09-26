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
  </div>
</template>

<script setup>
import { ref } from "vue";

let headingIdExample = ref("ramons-heading");
let isDisabled = ref(false);
const status = ref("danger");
const twoClassesBinding = ref("bindingExtraClasses");
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
</style>
