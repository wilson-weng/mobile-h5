import * as actions from '../actions/company';
import * as mutationTypes from '../constants/mutationTypes';

const initState = {
  company_list: [{
    id: 1,
    company_thumbnail: 'http://www.jdwl.com/resource/images/logo.png',
    company_name: '昆山A劳务',
    company_desc: '',
    service_type: '半年免费试用',
    start_time: '2018年9月1日',
  },{
    id: 2,
    company_thumbnail: 'http://www.foxconn.com.cn/GW-WEB-YT/logo.gif',
    company_name: '天津B人力资源公司',
    company_desc: '',
    service_type: '半年免费试用',
    start_time: '2018年9月1日',
  }],
};

const getters = {

};

const mutations = {
  [mutationTypes.SET_COMPANY_LIST](state, obj) {
    state.company_list = obj;
  },
};


export default {
  state: initState,
  getters,
  actions,
  mutations,
};
