<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Loader from './components/Loader.vue'
</script>

<template>
  <Loader v-if="$store.state.isLoading"/>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  },
  methods: {

  },
  async mounted() {
    this.$store.state.isLoading = true;
    // Must be: /.netlify/functions/api
    const result = await fetch('http://localhost:3001/getAllUsers', {
      method: 'POST',
      body: JSON.stringify({
        action: 'getAllUsers'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const allUsers = (await result.json()).users;
    console.log(allUsers);
    this.$store.state.allUsers = allUsers;
    this.$store.state.isLoading = false;
  }
}
</script>

<style scoped>

</style>
