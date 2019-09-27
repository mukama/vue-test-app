/* eslint-disable no-console */
import axios from 'axios';
import { MOVE_UP, MOVE_DOWN, FETCH_POSTS } from '../types';
import state from '../state';

export const getters = {
  posts: state => state.posts,
};

export const actions = {
  [MOVE_UP](context, index) {
     context.commit(MOVE_UP, index)
  },
  [MOVE_DOWN](context, index) {
     context.commit(MOVE_DOWN, index)
  },
  [FETCH_POSTS](context) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => context.commit(FETCH_POSTS, response.data))
      .catch(error => console.log(error));
  },
};

const move = (state, index, movingUp) => {
  const indexTo = movingUp ? index - 1 : index + 1;
  const postId = state.posts[index].id;
  state.history.unshift({
    posts: [...state.posts],
    indexFrom: index,
    postId,
    indexTo,
  });
  state.posts.splice(indexTo, 0, state.posts.splice(index, 1)[0]);
}

export const mutations = {
  [MOVE_UP](state, index) {
    move(state, index, true);
  },
  [MOVE_DOWN](state, index) {
    move(state, index, false);
  },
  [FETCH_POSTS](state, posts) {
    posts.slice(0, 5).forEach(post => state.posts.push(post));
  },
};

export default {
  state: state,
  getters,
  actions,
  mutations,
};
