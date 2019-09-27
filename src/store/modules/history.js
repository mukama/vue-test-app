import { UNDO } from '../types';
import state from '../state';

export const getters = {
  history: state => state.history,
};

export const actions = {
  [UNDO](context, steps) {
    context.commit(UNDO, steps);
  },
};

export const mutations = {
  [UNDO](state, steps) {
    state.posts.splice(0, state.posts.length);
    state.history[steps].posts.forEach(post => state.posts.push(post));
    state.history.splice(0, steps + 1);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
