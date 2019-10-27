<template>
  <div>
    <div v-for="card in cards" :key="card.id">
      <LessonCard :card="card"></LessonCard>
    </div>
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