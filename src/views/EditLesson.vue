<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-form class="lesson-form" ref="form" lazy-validation>
          <h2>Lesson編集</h2>
          <v-text-field readonly v-model="title" label="Title" required></v-text-field>
          <v-text-field readonly v-model="description" label="Description" required></v-text-field>
          <v-card>
            <v-subheader><span class="lesson-title">Lesson {{ lessonId }}</span> {{ title }}</v-subheader>
            <v-list two-line>
              <template v-for="(item, index) in items">
                <v-divider :key="index" :inset="false"></v-divider>
                <EditCard :contentId="item.id" :lessonId="lessonId" :key="`card${index}`" :item="item"></EditCard>
              </template>
              <template>
                <v-divider :inset="false"></v-divider>
                <NewCard :lessonId="lessonId"></NewCard>
              </template>
            </v-list>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditCard from '@/components/writing/EditCard.vue';
import NewCard from '@/components/writing/NewCard.vue';
import LessonService from '@/services/LessonService.js';
import _ from 'lodash';
export default {
  components: {
    EditCard,
    NewCard
  },
  data () {
    return {
      lessonId: !isNaN(this.$route.params.id) ? parseInt(this.$route.params.id, 10) : undefined,
      title: '',
      description: '',
      jp: '',
      en: '',
      items: [],
      newItem: {
        jp: '日本語文を新規追加',
        en: 'add new sentence in English',
      }
    }
  },
  created () {
    this.init()
  },
  computed: {
    shouldReflesh() {
      return this.$store.getters['card/reflesh']
    }
  },
  watch: {
    shouldReflesh(v) {
      if (v) {
        this.initLessonContents(this.lessonId)
        this.$store.dispatch('card/finishEditContent')
      }
    }
  },
  methods: {
    init() {
      this.initLessonContents(this.lessonId)
    },
    reset () {
      this.$refs.form.reset()
    },
    async initLessonContents (id) {
      let r = await LessonService.getCardsByIdAndUserId(id, this.$store.getters['auth/getUserId'])
      this.title = r.data.title
      this.description = r.data.description
      this.items = _.map(r.data.contents, (v) => {
        v.jp = v.jp_text
        v.en = v.en_text
        return v
      })
        // .catch(error => {
        //   const notification = {
        //     type: 'error',
        //     message: 'There was a problem get cards:' + error.message
        //   }
        //   this.$store.dispatch('notification/add', notification, { root: true})
        // })  
    }
  }
}
</script>

<style scoped>
  .lesson-form {
    width: 100%;
  }
</style>