<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="8">
          <v-card>
            <v-subheader><span class="lesson-title">Lesson {{ lessonId }}</span> {{ title }}</v-subheader>
            <v-list two-line>
              <template v-for="(item, index) in items">
                <div :key="index" v-if="item.jpShow">
                  <v-divider :key="index" :inset="false"></v-divider>
                  <WritingCard :key="`card${index}`" :item="item"></WritingCard>
                </div>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import WritingCard from '@/components/writing/WritingCard.vue';
import LessonService from '@/services/LessonService.js';
import _ from 'lodash'

export default {
  components: {
    WritingCard
  },
  data: () => ({
    lessonId: undefined,
    title: '',
    count: 0,
    waitSec: undefined,
    items: [
      { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', japanese: "彼は誰？", english: 'Who is he?' },
      { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', japanese: "旅行のメインの目的はなに？", english: 'What is a main purpose for your trip?' },
    ],
  }),
  created () {
    this.lessonId = !isNaN(this.$route.params.id) ? parseInt(this.$route.params.id, 10) : 1
    this.waitSec = !isNaN(this.$route.query.ns) ? parseInt(this.$route.query.ns, 10) : 2000
    this.initLesson(this.lessonId)
  },
  mounted () {
    this.pollData()
  },
  methods: {
    initLesson (id) {
      LessonService.getLesson(id)
        .then((r) => {
          this.title = r.data.title
          let items = _.map(r.data.contents, (v) => {
            v.jp = v.jp_text
            v.en = v.en_text
            v.jpShow = false
            v.enShow = false
            return v
          })
          items = _.shuffle(items)
          items[0].jpShow = true
          this.items = items
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was a problem get cards:' + error.message
          }
          this.$store.dispatch('notification/add', notification, { root: true})
        })  
    },
    pollData: function () {
      var self = this
      this.intervalId = setInterval(function () {
        self.items = self.updateCard(self.items, self.count)
        self.count++
      }, self.waitSec)
    },
    updateCard: function (items, count) {
      console.log(items)
      if (items.length - 1 < count) {
        this.complete()
      } else if (items.length - 1 === count) {
        items[count].enShow = true
      } else {
        items[count].enShow = true
        items[count + 1].jpShow = true
      }
      return items
    }
  },
}
</script>

<style>
.lesson-title {
  color: #555555;
  padding-right: 12px;
}
</style>