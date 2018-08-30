import * as mutation from '../constants/mutationTypes';
import * as urls from '../constants/urls';
import * as Utils from '../utils';
import * as mutationTypes from 'src/site/constants/mutationTypes'


export const getProjList = ({ commit }, params) => {
  return fetch(`${urls.GET_PROJ_PLUGINS}?page=${params.page}&company_id=${params.company_id}`, {
    method: 'GET',
    credentials: 'include',
    headers: Utils.getFormHeader(),
  })
    .then(response => response.json())
    .then(result => {
      if(result.status == 'ok'){
        commit(mutation.GET_PROJ_PLUGINS, result.content.result);
        return result;
      }
      else{
        return result;
      }
    });
}


export const getPlugins = ({ commit }) => {
  return fetch(`${urls.GET_PLUGINS}`, {
    method: 'GET',
    credentials: 'include',
    headers: Utils.getFormHeader(),
  })
    .then(response => response.json())
    .then(result => {
      if(result.status == 'ok'){
        commit(mutation.GET_PLUGIN_QUERY, result.content);
        return result;
      }
      else{
        return result;
      }
    });
}

export function updatePlugin({ commit }, params){
  return fetch(`${urls.PROJ_PlUGIN_UPDATE}`,{
    method: 'POST',
    credentials: 'include',
    headers: Utils.getFormHeader(),
    body: Utils.getPostParams(params)
  })
    .then(response => response.json())
    .then(result => {
      if(result.status == 'ok' && result.content){
        commit(mutation.SET_CURRENT_PLUGIN, result.content);
        return result;
      }
      else{
        return result;
      }
    });
}


export const setCurrentProj = ({ commit }, proj) => {
  commit(mutationTypes.SET_CURRENT_PROJ, proj);
}
