<template>
  <div>
    <v-list-item @click="dialog = true">
      <v-list-item-content>
        <v-list-item-title v-html="item.jp"></v-list-item-title>
        <v-list-item-subtitle class="subtitle" v-html="item.en"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          Dialog 2
        </v-card-title>
        <v-form ref="form">
          <v-text-field v-model="jp" label="日本語" required class="edit-text"></v-text-field>
          <v-text-field v-model="en" label="English" required class="edit-text"></v-text-field>
        </v-form>
        <v-card-text>
          <v-btn color="primary" dark @click="save(contentId)">Save</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import LessonService from '@/services/LessonService.js';
export default {
  props: {
    lessonId: Number,
    contentId: Number,
    item: Object
  },
  data () {
    return {
      dialog: false,
      jp: this.item.jp,
      en: this.item.en
    }
  },
  methods: {
    save (contentId) {
      let content = {
        japaneseText: this.jp,
        englishText: this.en,
      }
      console.log(content)
      LessonService.createContent(contentId, content, this.lessonId, this.$store.getters['auth/getUserId'])
        .then((r) => {
          console.log(r)
        })
    }
  }
}
</script>

<style scoped>
  .edit-text {

  }
</style>