import * as actions from '../actions/proj';
import * as MutationTypes from '../constants/mutationTypes';

const initState = {
    base: {},
    detail: [],
    highlight: {},
};

const getters = {

};

const mutations = {

  [MutationTypes.SET_PROJ_BASE](state, content) {
    state.base = content;
  },
  [MutationTypes.SET_PROJ_DETAIL](state, content) {
    state.detail = content;
  },
  [MutationTypes.SET_PROJ_HIGHLIGHT](state, content) {
    state.highlight = content;
  },
};

export default {
    state: initState,
    getters,
    actions,
    mutations,
};
