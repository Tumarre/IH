import { createRouter, createWebHistory } from "vue-router";
import CountriesList from "../components/CountriesList.vue";
import CountriesDetails from "../components/CountriesDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
  routes: [
    {
      path: "/",
      name: "list",
      component: CountriesList,
      children: [
        {
          path: "/list/:alpha3Code",
          name: "details",
          component: CountriesDetails,
        },
      ],
    },
  ],
});

export default router;
