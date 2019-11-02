<template>
  <div>
    <v-card class="elevation-12">
      <v-toolbar
        color="primary"
        dark
        flat
      >
        <v-toolbar-title>Signup form</v-toolbar-title>
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
        <v-col md="6"><v-btn color="primary" @click="register">Sign up</v-btn></v-col>
      </v-card-actions>
      <router-link to="/login">Do you already have an account? Login.</router-link>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SignupForm',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('auth/register', {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>
