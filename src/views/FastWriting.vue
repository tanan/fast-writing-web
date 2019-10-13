<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="8">
          <v-card>
            <v-subheader>Lesson {{ lessonId }}</v-subheader>
            <v-list two-line>
              <template v-for="(item, index) in items.slice(0, 6)">
                <v-divider :key="index" :inset="false"></v-divider>
                <v-list-item :key="item.title">
                  <v-list-item-content>
                    <v-list-item-title v-html="item.japanese"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.english"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      lessonId: 1,
      items: [
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', japanese: "彼は誰？", english: 'Who is he?' },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', japanese: "旅行のメインの目的はなに？", english: 'What is a main purpose for your trip?' },
      ],
    }),
  }
</script>
