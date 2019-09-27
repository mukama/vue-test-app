<template>
  <div class="history">
    <h2 class="text-lg">List of actions commited</h2>
    <ul>
      <li v-for="(item, index) in history" v-bind:key="index">
        Moved post {{ item.postId }} from index {{ item.indexFrom }} to index {{ item.indexTo }}
        <button class="bg-green-500 hover:bg-green-700 text-blue-900 font-bold py-2 px-4 rounded" @click="undo(index)">Time travel</button>
      </li>
    </ul>
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
h3 {
  margin: 40px 0 0;
}
button {
}
.up {
}
.down {
}
</style>
