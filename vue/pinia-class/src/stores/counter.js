import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
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

  const doubleCount = computed(() => count.value * 2);

  watch(
    () => count.value,
    (newCount) => {
      if (newCount === 3) {
        alert("Wohooo! estamos pasando del numero 3!");
      }
    }
  );

  return { count, increaseCount, decreaseCount, oddOrEven, doubleCount };
});
