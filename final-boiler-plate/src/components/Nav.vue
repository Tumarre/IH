<template>
  <div>
    Nav Component
    <button @click="signOut">Sign out</button>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user';

const signOut = async () => {
  try {
    await useUserStore().signOut()
    window.location.reload()
  } catch (error) {
    console.log("this is my error", error)
  }
}
//constant to save a variable that will hold the use router method

// constant to save a variable that will get the user from store with a computed function imported from vue

// constant that calls user email from the useUSerStore

// constant that saves the user email and cleans out the @client from the user

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
</script>

<style></style>
