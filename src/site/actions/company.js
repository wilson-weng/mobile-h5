import * as mutationTypes from '../constants/mutationTypes';
import * as urls from '../constants/urls';
import * as Utils from '../utils';

export const getCompanyList = ({ commit }, params) => {
  return fetch(`${urls.CRUD_COMPANY}?page=${params.page}`, {
    method: 'GET',
    credentials: 'include',
    headers: Utils.getFormHeader(),
  })
    .then(response => response.json())
    .then(result => {
      if(result.status == 'ok'){
        commit(mutationTypes.SET_COMPANY_LIST, result.content.result);
      }
      return result;
    });
}
