<template>
  <div>
    <v-list-item @click="dialog = true">
      <v-list-item-content class="add-sentence-card">
        <v-list-item-title class="add-sentence-style">
          <v-icon class="new-icon">create</v-icon>
          New
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          カード追加
        </v-card-title>
        <v-form ref="form">
          <v-text-field v-model="jp" label="日本語" required class="edit-text"></v-text-field>
          <v-text-field v-model="en" label="English" required class="edit-text"></v-text-field>
        </v-form>
        <v-card-text>
          <v-btn color="primary" dark @click="save">Save</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import LessonService from '@/services/LessonService.js';
export default {
  props: {
    lessonId: Number
  },
  data () {
    return {
      dialog: false,
      jp: '',
      en: ''
    }
  },
  methods: {
    save () {
      let content = {
        japaneseText: this.jp,
        englishText: this.en,
      }
      console.log(content)
      let r = LessonService.createContent(content, this.lessonId, this.$store.getters['auth/getUserId'])
      console.log(r)
      this.dialog = false
      this.$store.dispatch('card/refleshEditContent')
    }
  }
}
</script>

<style scoped>
  .add-sentence-card {
    vertical-align: center;
  }
  .add-sentence-style {
    font-size: 20px;
    color: #555555;
  }
  .edit-text {
    margin: 0 10px;
  }
</style>