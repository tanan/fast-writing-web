<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-form class="lesson-form" ref="form" lazy-validation>
          <h2>Lesson編集</h2>
          <v-text-field readonly v-model="title" label="Title" required></v-text-field>
          <v-text-field readonly v-model="description" label="Description" required></v-text-field>
          <v-btn color="info" @click="create">Add Content</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LessonService from '@/services/LessonService.js';
import _ from 'lodash';
export default {
  data () {
    return {
      lessonId: !isNaN(this.$route.params.id) ? parseInt(this.$route.params.id, 10) : undefined,
      title: '',
      description: '',
      jp: '',
      en: '',
      items: []
    }
  },
  created () {
    this.init(this.lessonId)
  },
  methods: {
    init(lessonId) {
      this.initLessonContents(lessonId)
    },
    reset () {
      this.$refs.form.reset()
    },
    create () {
      let content = {
        jp_text: this.jp,
        en_text: this.en,
      }
      LessonService.createContent(content, this.lessonId, this.$store.getters['auth/getUserId'])
        .then((r) => {
          console.log(r)
        })
    },
    initLessonContents (id) {
      LessonService.getCardsByIdAndUserId(id, this.$store.getters['auth/getUserId'])
        .then((r) => {
          console.log(r.data)
          this.title = r.data.title
          this.description = r.data.description
          this.items = _.map(r.data.contents, (v) => {
            v.jp = v.jp_text
            v.en = v.en_text
            return v
          })
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was a problem get cards:' + error.message
          }
          this.$store.dispatch('notification/add', notification, { root: true})
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