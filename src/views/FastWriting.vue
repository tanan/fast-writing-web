<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="start" justify="center">
        <v-col cols="12" sm="6" md="6">
          <h2>瞬間英作文</h2>
          <p class="sentence">表示される日本語を英語で表現してみよう</p>
          <v-select
            class="d-inline-flex"
            v-model="title"
            :items="titles"
            label="Lesson"
            type="text"
          ></v-select>
          <v-select
            class="d-inline-flex pa-2"
            v-model="selectedSec"
            :items="sec"
            label="秒数"
            type="Number"
          ></v-select>
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
  data () {
    return {
      lessonId: undefined,
      title: '',
      count: 0,
      waitSec: undefined,
      selectedSec: undefined,
      sec: [1, 3, 5, 7, 9],
      items: [],
      titles: ["Going to America", "Hoge"]
    }
  },
  created () {
    this.lessonId = !isNaN(this.$route.params.id) ? parseInt(this.$route.params.id, 10) : 1
    this.waitSec = !isNaN(this.$route.query.ns) ? parseInt(this.$route.query.ns, 10) : 5000
    this.initLesson(this.lessonId)
  },
  mounted () {
    this.pollData(this.waitSec)
  },
  methods: {
    initLesson (id) {
      LessonService.getLesson(id, this.$store.getters['auth/getToken'])
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
    pollData: function (v) {
      var self = this
      if (this.intervalId !== undefined) {
        this.complete(this.intervalId)
      }
      this.intervalId = setInterval(function () {
        self.items = self.updateCard(self.items, self.count)
        self.count++
      }, v)
    },
    updateCard: function (items, count) {
      if (items.length - 1 < count) {
        this.complete(this.intervalId)
      } else if (items.length - 1 === count) {
        items[count].enShow = true
      } else {
        items[count].enShow = true
        items[count + 1].jpShow = true
      }
      return items
    },
    complete: function (v) {
      clearInterval(v)
    },
  },
  watch: {
    selectedSec: function (v) {
      this.pollData(v*1000)
    }
  }
}
</script>

<style>
.lesson-title {
  color: #555555;
  padding-right: 12px;
}
h2 {
  font-size: 18px;
}
p {
  font-size: 14px;
}
</style>