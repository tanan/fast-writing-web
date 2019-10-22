<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Brush up</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="/login"
        target="_blank"
      >
        <span class="mr-2">ログイン</span>
      </v-btn>
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
};
</script>
