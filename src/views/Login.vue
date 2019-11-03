<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4" class="login-form">
          <LoginForm></LoginForm>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import LoginForm from '@/components/account/LoginForm.vue';
export default {
  components: {
    LoginForm
  },
  props: {
    source: String,
  }
}
</script>

<style scoped>
  .login-form {
    max-width: 480px;
  }
</style>