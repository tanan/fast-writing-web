<template>
  <div>
    <v-card class="elevation-12">
      <v-toolbar
        color="primary"
        dark
        flat
      >
        <v-toolbar-title>Login form</v-toolbar-title>
        <div class="flex-grow-1"></div>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Username"
            name="username"
            v-model="username"
            prepend-icon="person"
            type="text"
          ></v-text-field>

          <v-text-field
            id="password"
            label="Password"
            name="password"
            v-model="password"
            prepend-icon="lock"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-row justify="center">
          <v-btn color="primary" @click="login">Sign in</v-btn>
        </v-row>
      </v-card-actions>
      <v-row justify="center">
        <router-link to="/signup">Don't have an account? Register.</router-link>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('auth/login', {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>
