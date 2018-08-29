import * as mutationTypes from '../constants/mutationTypes';

export const setCurrentCompany = ({ commit }, currentCompany) => {
  commit(mutationTypes.SET_CUR_COMPANY, currentCompany);
}


export const setPasswordChange = ({ commit }) => {
  return new Promise();
}

export const checkLoginUser = ({ commit }, params) => {
  return new Promise((resolve)=>{
    if(params.account === 'laowujia' || params.password === 'baimagongyu') {
      let result = {
        status: 'ok',
        content: {
          'id': 1,
          'real_name': '管理员',
          'email': '845272203@qq.com',
          'role_id': 999
        }};
      commit(mutationTypes.SET_CUR_USER, result);
      resolve(result);
    }else{
      resolve({status: 'fail', msg: '用户名或密码错误！'})
    }
  });
}
