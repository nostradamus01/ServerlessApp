<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Loader from './components/Loader.vue'
</script>

<template>
  <Loader v-if="isLoading" />
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  },
  async mounted() {
    this.isLoading = true;
    const result = await fetch('/.netlify/functions/api', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        action: 'getAllUsers'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const allUsers = await result.json().users;
    this.isLoading = false;
  }
}
</script>

<style scoped>

</style>
