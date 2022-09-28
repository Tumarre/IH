<!-- <template>
  <span className="user">
    <span className="name">{{ user.name }}</span>
    <span className="handle">{{ user.handle }}</span>
  </span>
</template> -->

<template>
  <!-- Iteration 1 -->
  <span className="user">
    <span className="name">{{ user.name }}</span>
    <span className="handle">{{ user.handle }}</span>
  </span>

  <!-- Iteration 2 -->
  <!-- <div className="top">
    <span className="name">{{ user.name }}</span>
    <span className="handle">{{ user.handle }}</span>
    <Timestamp :timestamp="timestamp" />
  </div> -->
</template>

<script setup>
import Timestamp from "./Timestamp.vue";
defineProps({
  user: {
    type: Object,
    default: () => ({
      name: "Diego Zito",
      handle: "@diego",
    }),
  },
  timestamp: {
    type: String,
  },
});
</script>
