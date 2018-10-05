import * as mutation from '../constants/mutationTypes';
import * as urls from '../constants/urls';
import * as Utils from '../utils';


export const getProjBaseInfo = ({ commit }, proj_id) => {
  return fetch(`${urls.PROJ_BASE}?proj_id=${proj_id}`, {
    method: 'GET',
    credentials: 'include',
    headers: Utils.getFormHeader(),
  })
    .then(response => response.json())
    .then(result => {
      if(result.status == 'ok'){
        commit(mutation.SET_PROJ_BASE, result.content);
        return result;
      }
      else{
        return result;
      }
    });
}

export const getProjContent = ({ commit }, proj_id) => {
  return fetch(`${urls.PROJ_CONTENT}?proj_id=${proj_id}`, {
    method: 'GET',
    credentials: 'include',
    headers: Utils.getFormHeader(),
  })
    .then(response => response.json())
    .then(result => {
      if(result.status == 'ok'){
        commit(mutation.SET_PROJ_DETAIL, result.detail);
        commit(mutation.SET_PROJ_HIGHLIGHT, result.highlight);
        return result;
      }
      else{
        return result;
      }
    });
}

