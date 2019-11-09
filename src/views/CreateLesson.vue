<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-form class="lesson-form" ref="form" lazy-validation>
          <h2>Lesson作成</h2>
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
export default {
  data: () => ({
    title: '',
    description: ''
  }),
  methods: {
    reset () {
      this.$refs.form.reset()
    },
    create () {
      let lesson = {
        title: this.title,
        description: this.description
      }
      LessonService.createLesson(lesson, this.$store.getters['auth/getUserId'])
        .then((r) => {
          console.log(r)
        })
    }
  }
}
</script>

<style scoped>
  .lesson-form {
    width: 100%;
  }
</style>