<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title v-html="item.jp"></v-list-item-title>
        <v-list-item-subtitle v-html="item.en"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
}
</script>