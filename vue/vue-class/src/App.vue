<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Textbinding from "./components/vueBasics/TextBinding.vue";
import TextDirective from "./components/vueBasics/TextDirective.vue";
import HtmlDirective from "./components/vueBasics/HtmlDirective.vue";
import AttributeBinding from "./components/vueBasics/AttributeBinding.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="My Short bio" />
    </div>
  </header>

  <main>
    <Textbinding />
    <TextDirective />
    <HtmlDirective />
    <AttributeBinding />
  </main>
</template>

<style>
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
