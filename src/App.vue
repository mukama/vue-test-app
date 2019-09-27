<template>
  <div id="app">
    <Posts />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from './store';
import posts from './store/modules/posts';
import history from './store/modules/history';
import Posts from './components/Posts.vue'

if (!store.state.posts) store.registerModule('posts', posts);
if (!store.state.history) store.registerModule('history', history);

export default {
  name: 'app',
  components: {
    Posts
  },
  computed: {
    ...mapState([
      'posts',
      'history'
    ])
  }
}
</script>

<style>
#app {
  background-image: url("./assets/bg.svg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 960px;
  margin: 60px auto 0;
}
</style>
