import { queryList } from '../services/api';

export default {
  namespace: 'links',

  state: {
    list: [],
  },

  effects: {
    *fetchList(_, { call, put }) {
      const response = yield call(queryList, { sql: 'Link' });
      console.log('response----', response);
      yield put({
        type: 'saveList',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },

  reducers: {
    saveLinks(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
