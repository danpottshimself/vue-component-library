<template>
  <div className="app">
      <h2>Word counter</h2>
      <textarea name="wordCount"
        placeholder='Enter words here'
        :value="inputText"
        @input="handleInputChange($event)"
        :rows="4"
        :cols="33"
      >
      </textarea>
      <div className="word-count">Word count: {{wordCount}}</div>
      <div className="occurance-container">
        <div>Search For: <input type="text" name="search" :value="searchTerm" @input="handleSearchTermChange($event)"/> </div>
        <div>Occurances: {{occurances}}</div>
      </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class WordCount extends Vue {
    protected wordCount: number = 0;
    protected inputText: string = '';
    protected searchTerm: string = '';
    protected occurances: number = 0;

  protected handleInputChange(e: any): void {
    this.inputText = e.target.value;
    this.wordCount = e.target.value.split(' ').length;
    this.occurances = this.searchTerm ? this.inputText.split(this.searchTerm).length - 1 : 0;
  }

  protected handleSearchTermChange(e: any): void {
    this.searchTerm = e.target.value;
    this.occurances = e.target.value ? this.inputText.split(e.target.value).length - 1 : 0;
  }

}
</script>
<style lang="less" scoped>
.app {
  text-align: center;
}

.word-count {
  margin: 20px 0;
}

.occurance-container {
  display: flex;
  flex-direction: column;
  text-align: left;
}
</style>
