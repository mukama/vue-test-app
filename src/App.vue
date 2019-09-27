<template>
  <div id="app">
    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 px-4">
        <Posts />
      </div>
      <div class="w-full sm:w-1/2 px-4 sm:mt-0 mt-16">
        <History />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from './store';
import posts from './store/modules/posts';
import history from './store/modules/history';
import Posts from './components/Posts';
import History from './components/History'

if (!store.state.posts) store.registerModule('posts', posts);
if (!store.state.history) store.registerModule('history', history);

export default {
  name: 'app',
  components: {
    Posts,
    History
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
body {
  background-image: url("./assets/images/bg.svg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100% 200px;
  background-color: #edf2f7;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  max-width: 960px;
  margin: 60px auto 0;
}
</style>
