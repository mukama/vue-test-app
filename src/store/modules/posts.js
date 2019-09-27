/* eslint-disable no-console */
import axios from 'axios';
import { MOVE_POST, FETCH_POSTS } from '../types';

const state = [];

export const getters = {
  firstFivePosts: state => state.slice(0, 5),
};

export const actions = {
  [MOVE_POST](context, post, direction) {
     context.commit(MOVE_POST, post, direction)
  },
  [FETCH_POSTS](context) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => context.commit(FETCH_POSTS, response.data))
      .catch(error => console.log(error));
  },
};

export const mutations = {
  [MOVE_POST](state, post, direction) {
    console.log(post, direction)
    state.push(post);
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
