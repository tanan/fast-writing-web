<template>
  <div>
    <v-col>
      <v-tooltip v-model="show">
        <template>
          <v-btn icon v-on="on">
            <v-icon color="blue">mdi-card</v-icon>            
          </v-btn>
        </template>
        <span>
          Lessonの登録をしよう！<br>
          ・職場の打ち合わせで使う会話<br>
          ・Sight Seeing<br>
          ・役所での手続き<br>
        </span>
      </v-tooltip>
    </v-col>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
      }
    },
  }
</script>