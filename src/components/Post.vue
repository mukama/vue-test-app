<template>
  <div class="post">
    <div>{{index}} {{ post.title }}</div>
    <div>
      <button @click="moveUp(post)" class="up" v-if="index > 0">Up</button>
      <button @click="moveDown(post)" class="down" v-if="index < 4">Down</button>
    </div>
    <hr>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { MOVE_UP, MOVE_DOWN } from '../store/types';

export default {
  name: "Post",
  props: {
    post: Object,
    index: Number,
  },
  methods: {
    ...mapActions({
      moveUp: MOVE_UP,
      moveDown: MOVE_DOWN,
    })
  },
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
