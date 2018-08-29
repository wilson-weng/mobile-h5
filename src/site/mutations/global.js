import * as actions from '../actions/global';
import * as mutationTypes from '../constants/mutationTypes';

const initState = {
  current_company: {},
  current_user: {}
};

const getters = {

};

const mutations = {
  [mutationTypes.SET_CUR_COMPANY](state, obj) {
    state.current_company = obj;
  },
  [mutationTypes.SET_CUR_USER](state, obj) {
    state.current_user = obj;
  },
};


export default {
  state: initState,
  getters,
  actions,
  mutations,
};
