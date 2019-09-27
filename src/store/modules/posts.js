/* eslint-disable no-console */
import axios from 'axios';
import { MOVE_UP, MOVE_DOWN, FETCH_POSTS } from '../types';

const state = [];

export const getters = {
  firstFivePosts: state => state.slice(0, 5),
};

export const actions = {
  [MOVE_UP](context, post) {
     context.commit(MOVE_UP, post)
  },
  [MOVE_DOWN](context, post) {
     context.commit(MOVE_DOWN, post)
  },
  [FETCH_POSTS](context) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => context.commit(FETCH_POSTS, response.data))
      .catch(error => console.log(error));
  },
};

export const mutations = {
  [MOVE_UP](state, post) {
    const indexFrom = state.indexOf(post);
    const indexTo = indexFrom - 1;
    state.splice(indexTo, 0, state.splice(indexFrom, 1)[0]);
  },
  [MOVE_DOWN](state, post) {
    const indexFrom = state.indexOf(post);
    const indexTo = indexFrom + 1;
    state.splice(indexTo, 0, state.splice(indexFrom, 1)[0]);
  },
  [FETCH_POSTS](state, posts) {
    posts.forEach(post => state.push(post));
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
