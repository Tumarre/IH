<script setup>
import Actions from "./Actions.vue";
import Message from "./Message.vue";
import User from "./User.vue";
import Timestamp from "./Timestamp.vue";
import ProfileImage from "./ProfileImage.vue";

defineProps({
  message: {
    type: String,
  },
  timestamp: {
    type: String,
  },
  user: {
    type: Object,
  },
  image: {
    type: String,
  },
  imageAlt: {
    Type: String,
  },
});
</script>

<template>
  <div className="tweet">
    <!-- <ProfileImage :image="user.image" :imageAlt="user.name" /> -->
    <ProfileImage :image="image" :imageAlt="`${user.name} - Profile Image`" />
    <div className="body">
      <div className="top">
        <!-- Iteration 1 -->
        <User :user="user" />
        <Timestamp :timestamp="timestamp" />

        <!-- Iteration 2 -->
        <!-- <User :user="user" :timestamp="timestamp" /> -->
      </div>

      <Message :message="message" />
      <Actions />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
