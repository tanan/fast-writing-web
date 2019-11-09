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
      <router-link to="/lesson" class="button">
        <v-btn text><v-icon>list_alt</v-icon>Lesson一覧</v-btn>
      </router-link>
      <router-link to="/user/lesson/create" class="button">
        <v-btn text><v-icon>playlist_add</v-icon>Lesson作成</v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link v-if="!this.$store.getters['auth/loggedIn']" to="/login" class="button">
        Login
      </router-link>
      <button v-else type="button" class="logoutButton" @click="logout">
        Logout
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