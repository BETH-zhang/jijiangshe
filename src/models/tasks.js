import { queryAllList } from '../services/api';
import { arrayToObjectByField } from '../utils/utils';

export default {
  namespace: 'tasks',

  state: {
    list: {},
  },

  effects: {
    *fetchTasks(_, { call, put }) {
      const response = yield call(queryAllList, { sql: 'Todo' });
      const tasks = arrayToObjectByField(response.data.slice(0), 'id');
      yield put({
        type: 'saveTasks',
        payload: tasks,
      });
    },
  },

  reducers: {
    saveTasks(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
