<template>
  <div class="posts">
    <h2 class="text-lg">Sortable Post List</h2>
    <Post v-for="(post, index) in posts" v-bind:key="post.id" :post="post" :index="index" :slideInUp="index === indexUp"  :slideInDown="index === indexDown" />
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import Post from './Post';
import { FETCH_POSTS } from '../store/types';

export default {
  name: "Posts",
  components: {
    Post,
  },
  created() {
    this.fetchPosts();
  },
  computed: {
    ...mapGetters([
      'posts',
      'indexUp',
      'indexDown',
    ])
  },
  methods: {
    ...mapActions({
      fetchPosts: FETCH_POSTS,
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 0 0 30px;
  color: #FFF;
}
</style>
