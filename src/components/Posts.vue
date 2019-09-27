<template>
  <div class="posts">
    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 px-4">
        <h2 class="text-lg">Sortable Post List</h2>
        <Post v-for="(post, index) in posts" v-bind:key="post.id" :post="post" :index="index" />
      </div>
      <div class="w-full sm:w-1/2 px-4 sm:mt-0 mt-16">
        <History />
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import Post from './Post';
import History from './History';
import { FETCH_POSTS } from '../store/types';

export default {
  name: "Posts",
  components: {
    Post,
    History,
  },
  created() {
    this.fetchPosts();
  },
  computed: {
    ...mapGetters([
      'posts',
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
