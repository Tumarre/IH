<script setup>
import { ref } from "vue";
import BandCard from "./components/BandCard.vue";
import MyBio from "./components/MyBio.vue";

const bands = ref([
  {
    bandInfo: {
      name: "The Doors",
      image:
        "https://ballesterockmusicdotcom.files.wordpress.com/2016/04/the-doors-logo.jpeg?w=640",
      genre: "Rock n Roll",
    },
    popularSong: "L.A Woman",
    popularSongInfo:
      "L.A. Woman is the sixth studio album by the American rock band the Doors, released on April 19, 1971, by Elektra Records. It is the last to feature lead singer Jim Morrison during his lifetime due to his death three months after the album's release, though he would posthumously appear on the 1978 album An American Prayer. Even more so than its predecessors, the album is heavily influenced by blues. It was recorded without record producer Paul A. Rothchild after he fell out with the group over the perceived lack of quality of their studio performances. Subsequently, the band co-produced the album with longtime sound engineer Bruce Botnick.",
  },
  {
    bandInfo: {
      name: "Led Zeppelin",
      image:
        "https://ballesterockmusicdotcom.files.wordpress.com/2016/04/the-doors-logo.jpeg?w=640",
      genre: "Rock n Roll",
    },
    popularSong: "Whole Lotta love",
    popularSongInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa, consequuntur provident blanditiis facere, aliquid, est nemo repellendus et laudantium tempora iste. Aperiam, ab quasi fugiat dignissimos incidunt quae maxime!",
  },
]);
</script>

<template>
  <!-- <div class="background">
    <BandCard
      v-for="(band, index) in bands"
      :key="index"
      :bandInfo="band.bandInfo"
      :bandSong="band.popularSong"
      :bandSongInfo="band.popularSongInfo"
    />
  </div> -->
  <MyBio
    name="Diego Z"
    age="31"
    birthplace="Valencia"
    currentLocation="Barcelona, España"
  />
</template>

<style>
.background {
  @apply flex h-screen items-center justify-center bg-indigo-50 px-4;
}

.background-card {
  @apply max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl;
}

.card-img {
  @apply h-auto w-full;
}

.card-title {
  @apply font-bold text-gray-700;
}
.card-p {
  @apply font-light mb-5 text-gray-700;
}
.card-p-genre {
  @apply font-medium underline text-green-600;
}
</style>
