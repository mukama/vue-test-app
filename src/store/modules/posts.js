/* eslint-disable no-console */
import axios from 'axios';
import { MOVE_UP, MOVE_DOWN, FETCH_POSTS } from '../types';

const state = [];

export const getters = {
  posts: state => state,
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

export const mutations = {
  [MOVE_UP](state, index) {
    const indexTo = index - 1;
    state.splice(indexTo, 0, state.splice(index, 1)[0]);
  },
  [MOVE_DOWN](state, index) {
    const indexTo = index + 1;
    state.splice(indexTo, 0, state.splice(index, 1)[0]);
  },
  [FETCH_POSTS](state, posts) {
    posts.slice(0, 5).forEach(post => state.push(post));
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
