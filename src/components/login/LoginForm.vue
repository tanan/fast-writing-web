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
        <v-col md="3" offset-md="3"><v-btn class="pl-3 pr-3" color="green white--text" @click="login">Sign Up</v-btn></v-col>
        <v-col md="3"><v-btn class="pl-3 pr-3" color="primary" @click="login">Sign in</v-btn></v-col>
      </v-card-actions>
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
      this.$router.push('/lesson/1')
    }
  },
  created: function () {
    if (this.$store.state.auth.userId) {
      this.$router.push('/')
    }
  }
}
</script>
