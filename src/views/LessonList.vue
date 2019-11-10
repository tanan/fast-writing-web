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
    async getLessonCards () {
      let preRes = await LessonService.getLessons()
      let preCards = _.map(preRes.data, (v) => {
        return {
          id: v.id,
          title: v.title,
          label: v.title,
          value: v.id,
          description: v.description,
          type: "PREDEFINED"
        }
      })
      this.cards = this.cards.concat(preCards)
      let userRes = await LessonService.getLessonsByUserId(this.$store.getters['auth/getUserId'])
      let userCards = _.map(userRes.data, (v) => {
        return {
          id: v.id,
          title: v.title,
          label: v.title,
          value: v.id,
          description: v.description,
          type: "USER"
        }
      })
      if (userCards.length != 0) {
        console.log(userCards.length)
        this.cards = this.cards.concat(userCards)
      }
    }
  }
}
</script>

<style>
.col {
  flex-basis: auto
}
</style>