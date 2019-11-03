<template>
    <v-card
      class="mx-auto"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{ card.type }}</div>
          <v-list-item-title class="headline mb-1">{{ card.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ card.description }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn text><a :href="`lesson/${card.id}`">LESSON START</a></v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  method: {
    getLessonUrl (id) {
      return "/lesson/" + id
    }
  }
}
</script>