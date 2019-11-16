<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-form class="lesson-form" ref="form" lazy-validation>
          <Lessontips></Lessontips>
          <v-text-field v-model="title" label="Title" required></v-text-field>
          <v-text-field v-model="description" label="Description" required></v-text-field>
          <v-btn color="info" @click="create">Add Lesson</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LessonService from '@/services/LessonService.js';
import Lessontips from '@/components/lesson/Tooltips.vue';
export default {
  components: {
    Lessontips
  },
  data: () => ({
    title: '',
    description: ''
  }),
  methods: {
    reset () {
      this.$refs.form.reset()
    },
    async create () {
      let lesson = {
        title: this.title,
        description: this.description
      }
      let r = await LessonService.createLesson(lesson, this.$store.getters['auth/getUserId'])
      console.log(r)
      this.$router.push('/lesson')
    }
  }
}
</script>

<style scoped>
  .lesson-form {
    width: 100%;
  }
</style>