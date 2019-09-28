<template>
  <div class="posts">
    <h2 class="text-lg text-white font-bold mb-4">Sortable Post List</h2>
    <Post v-for="(post, index) in posts" v-bind:key="post.id" :post="post" :index="index" :slideInUp="index === indexToMoveUp"  :slideInDown="index === indexToMoveDown" />
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
      'indexToMoveUp',
      'indexToMoveDown',
    ])
  },
  methods: {
    ...mapActions({
      fetchPosts: FETCH_POSTS,
    })
  }
};
</script>

