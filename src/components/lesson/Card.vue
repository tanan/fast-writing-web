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
        <v-btn text><a :href="lessonUrl">LESSON START</a></v-btn>
        <v-btn v-if="isUserCard()" text><a :href="editUrl">EDIT</a></v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  data () {
    return {
      lessonUrl: '',
      editUrl: undefined
    }
  },
  created () {
    if (this.card.type == "USER") {
      this.lessonUrl = "/user/lesson/" + this.card.id
      this.editUrl = '/user/lesson/edit/' + this.card.id
    } else {
      this.lessonUrl = "/lesson/" + this.card.id
    }
  },
  methods: {
    isUserCard () {
      return this.card.type == "USER" ? true : false
    }
  }
}
</script>