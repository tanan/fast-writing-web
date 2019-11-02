<template>
  <v-app>
    <v-app-bar app>
      <router-link to="/" class="button">
        <v-toolbar-title class="headline text-uppercase">
          <v-btn color="white" target="_blank" class="title">
            <span>Brush up</span>
          </v-btn>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <router-link v-if="!this.$store.getters['auth/loggedIn']" to="/login" class="button">
        ログイン
      </router-link>
      <button v-else type="button" class="logoutButton" @click="logout">
        ログアウト
      </button>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  }),
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
    }
  }
};
</script>

<style scoped>
  .button {
    text-decoration: none;
    background-color: white;
  }
</style>