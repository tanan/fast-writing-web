<template>
  <div>
    <v-col>
      <div class="container">
        <div class="title">
          <h2>Lesson作成</h2>
        </div>
        <div class="tool">
          <v-tooltip right class="tooltip" v-model="show">
            <template v-slot:activator="{ on }">
              <v-icon class="tool-icon" @mouseover="show = true" @mouseleave="show = false">info</v-icon>
            </template>
            <span>
              Lessonの登録をしよう！<br>
              例1) 職場の打ち合わせで使う会話<br>
              例2) sightseeing in tokyo<br>
            </span>
          </v-tooltip>
        </div>
      </div>
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
    methods: {
      on () {
        this.show = !this.show
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    padding-left: 0px;
  }
  .tool {
    position: relative;
    top: 2px;
    left: 5px;
  }
  .tooltip {
    position: absolute;

  }
</style>