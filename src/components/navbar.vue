<template lang="">
  <div class="nav">
    <v-btn elevation="2" small>
      <router-link to="/test" class="router-link">Vue Documentary</router-link>
    </v-btn>
    <v-btn elevation="2" small>
      <router-link to="/" class="router-link">Users</router-link>
    </v-btn>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.router-link {
  text-decoration: none;
}

.nav {
  margin: 10px;
}
</style>
