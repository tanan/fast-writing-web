<template>
  <div>
    <v-container>
      <v-row class="grey lighten-5">
        <v-col lg=3 md=12 sm=12 xs=12 v-for="card in cards" :key="`${card.type}-${card.id}`">
          <LessonCard :card="card"></LessonCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LessonCard from '@/components/lesson/Card.vue';
import LessonService from '@/services/LessonService.js';
import _ from 'lodash';
export default {
  components: {
    LessonCard
  },
  data: () => ({
    cards: [],
  }),
  created () {
    this.getLessonCards()
  },
  methods: {
    getLessonUrl (id) {
      return "/lesson/" + id
    },
    getLessonCards () {
      LessonService.getLessons()
        .then((r) => {
          let t = _.map(r.data, (v) => {
            return {
              id: v.id,
              title: v.title,
              label: v.title,
              value: v.id,
              description: v.description,
              type: "PREDEFINED"
            }
          })
          this.cards = this.cards.concat(t)
        })
      LessonService.getLessonsByUserId(this.$store.getters['auth/getUserId'])
        .then((r) => {
          let t = _.map(r.data, (v) => {
            console.log(v)
            return {
              id: v.id,
              title: v.title,
              label: v.title,
              value: v.id,
              description: v.description,
              type: "USER"
            }
          })
          if (t.length != 0) {
            console.log(t.length)
            this.cards = this.cards.concat(t)
          }
        })
    }
  }
}
</script>

<style>
.col {
  flex-basis: auto
}
</style>