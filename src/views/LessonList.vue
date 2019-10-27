<template>
  <div>
    <v-container>
      <v-row class="grey lighten-5">
        <v-col lg=3 md=12 sm=12 xs=12 v-for="card in cards" :key="card.id">
          <LessonCard :card="card"></LessonCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LessonCard from '@/components/lesson/Card.vue';
import LessonService from '@/services/LessonService.js';
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
      LessonService.getLessons(this.$store.getters['auth/getToken'])
        .then((r) => {
          console.log(r.data)
          this.cards = r.data
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