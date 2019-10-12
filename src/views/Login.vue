<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <LoginForm></LoginForm>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import LoginForm from '@/components/login/LoginForm.vue';
export default {
  components: {
    LoginForm
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
}
</script>