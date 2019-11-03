<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4" class="signup-form">
          <SignupForm></SignupForm>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import SignupForm from '@/components/account/SignupForm.vue';
export default {
  components: {
    SignupForm
  },
  props: {
    source: String,
  }
}
</script>

<style scoped>
  .signup-form {
    max-width: 480px;
  }
</style>