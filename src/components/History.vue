<template>
  <div class="history bg-gray-400 rounded shadow-lg">
    <h2 class="text-lg font-bold bg-gray-300 rounded-t px-4 py-2">List of actions commited</h2>
    <div class="p-2">
      <div class="bg-white rounded">
        <div v-for="(item, index) in history" v-bind:key="index" class="list-item flex p-2">
          Moved post {{ item.postId }} from index {{ item.indexFrom }} to index {{ item.indexTo }}
          <button class="hover:bg-green-400 text-blue-900 font-medium text-xs ml-auto py-1 px-2 rounded" @click="undo(index)">Time travel</button>
        </div>
      </div>
      <div class="text-center italic" v-if="history.length === 0">No actions found</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { UNDO } from '../store/types';

export default {
  name: "History",
  computed: {
    ...mapGetters([
      'history',
    ])
  },
  methods: {
    ...mapActions({
      undo: UNDO
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-item {
  border-bottom: 1px solid #e2e8f0
}
.list-item:last-child {
  border-bottom: none;
}
button {
  background: #00ff86;
  transition: all 400ms;
}
</style>
