<template>
  <div class="posts">
    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 px-4">
        <h2 class="text-lg">Sortable Post List</h2>
        <Post :title="post.title" v-for="post in firstFivePosts" v-bind:key="post.id" />
      </div>
      <div class="w-full sm:w-1/2 px-4 sm:mt-0 mt-16">
        <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Message</button>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import Post from './Post'
import { FETCH_POSTS } from '../store/types';

export default {
  name: "Posts",
  components: {
    Post
  },
  created() {
    this.fetchPosts();
  },
  computed: {
    ...mapGetters([
      'firstFivePosts',
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
.posts {
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
