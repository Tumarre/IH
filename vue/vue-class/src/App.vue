<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Textbinding from "./components/vueBasics/TextBinding.vue";
import TextDirective from "./components/vueBasics/TextDirective.vue";
import HtmlDirective from "./components/vueBasics/HtmlDirective.vue";
import AttributeBinding from "./components/vueBasics/AttributeBinding.vue";
import ConditionalRendering from "./components/vueBasics/ConditionalRendering.vue";
import IteratingElements from "./components/vueBasics/iteratingElements.vue";
import WelcomeItem from "./components/WelcomeItem.vue";
import Methods from "./components/vueBasics/Methods.vue";
import TwoWayBinding from "./components/vueBasics/TwoWayBinding.vue";
import ComputedProperties from "./components/vueBasics/ComputedProperties.vue";
import Watchers from "./components/vueBasics/Watchers.vue";
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <HelloWorld msg="Texto generico de mi prop" imgDescription="Nike Logo" />
    </div>
  </header> -->

  <main>
    <!-- <WelcomeItem />
    <hr />
    <Textbinding />
    <hr />
    <TextDirective />
    <hr />
    <HtmlDirective />
    <hr />
    <AttributeBinding />
    <hr />
    <ConditionalRendering />
    <hr />
    <IteratingElements />
    <hr />
    <Methods />
    <hr />
    <TwoWayBinding />
    <hr />
    <ComputedProperties />
    <hr /> -->
    <Watchers />
  </main>
</template>

<style>
hr {
  margin: 2rem 0;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

h1 {
  text-decoration: underline;
  font-size: 40px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
