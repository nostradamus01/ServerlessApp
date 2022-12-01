<template>
  <main>
    <!-- <TheWelcome /> -->
  </main>
</template>

<script>
export default {
  methods: {
    getUserCookie() {
      const cookies = document.cookie.split(';');
      const userCookie = cookies.find((cookie) => {
        return cookie.indexOf('username=') >= 0;
      });
      if (userCookie) {
        const value = userCookie.split('=')[1];
        const valueSet = value.split('&');
        return {
          username: valueSet[0],
          alreadyLogined: valueSet[1]
        }
      }
      return null;
    }
  },
  mounted() {
    const userCookie = this.getUserCookie();
    if (userCookie === null || !userCookie.alreadyLogined) {
      this.$router.replace({name: 'login'});
    }
  }
}
</script>
