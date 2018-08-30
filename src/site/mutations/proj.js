import * as actions from '../actions/proj';
import * as MutationTypes from '../constants/mutationTypes';

const initState = {
    projs: [],
    pluginCats: [],
    plugins: {},
    curPlugins: [],
    curProjId: 0,
};

const getters = {

};

const mutations = {
    [MutationTypes.GET_PLUGIN_QUERY](state, content) {
        state.plugins = content;
        Object.values(state.plugins).map(plugin=>{
        state.pluginCats.indexOf(plugin.category) < 0 && state.pluginCats.push(plugin.category);
      })
    },
    [MutationTypes.GET_PROJ_PLUGINS](state, content) {
        state.projs = content.map(m=>{
            m.plugins.map(p=>{
                p.key = p.id;
            })
            return m;
        });
    },
  [MutationTypes.SET_CURRENT_PLUGIN](state, content) {
    state.curPlugins = content;
  },
  [MutationTypes.SET_CURRENT_PROJ](state, content) {
    state.curProjId = content.curProjId;
    state.curPlugins = content.curPlugins;
  },
};

export default {
    state: initState,
    getters,
    actions,
    mutations,
};
