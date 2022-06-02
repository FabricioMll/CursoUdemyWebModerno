<template>
  <v-container>
    <v-form>
      <v-file-input multiple chips label="Selecione os arquivos"> </v-file-input>
    </v-form>
    <div class="pills">
      <Pill v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount" />
    </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from 'electron'
import Pill from "./PillVue.vue";

export default {
  components: { Pill },
  data: function () {
    return { groupedWords: [ { name: "you", amount: 900 }, { name: "he", amount: 330 }, { name: "i", amount: 1234 } ]};
  },
  methods: { processSubtitles() { console.log(this.files); ipcRenderer.send('blabla', 'ping')}}
};
</script>

<style>
.pills { display: flex; flex-wrap: wrap; justify-content: space-between; }
</style>