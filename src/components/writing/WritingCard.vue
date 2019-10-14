<template>
  <div>
    <v-list-item @click="test">
      <v-list-item-content>
        <v-list-item-title v-html="item.jp"></v-list-item-title>
        <v-list-item-subtitle class="subtitle" v-if="item.enShow" v-html="item.en"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    test () {
      console.log('TODO: 手伝ってくれる人募集')
    }
  }
}
</script>

<style scoped>
.subtitle {
  color: rgba(255, 91, 91, 1) !important;
}
</style>