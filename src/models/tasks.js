import { message } from 'antd';
import { queryAllList, createList } from '../services/api';

export default {
  namespace: 'tasks',

  state: {
    list: {},
    addTask: false,
    data: {},
  },

  effects: {
    *fetchTasks(_, { call, put }) {
      const response = yield call(queryAllList, { sql: 'Todo' });
      yield put({
        type: 'saveTasks',
        payload: response.data,
      });
    },
    *fetchAddTask(_, { call, put, select }) {
      const {
        tasks: { data },
      } = yield select();
      const response = yield call(createList, { sql: 'Todo', data });
      if (response) {
        message.info('添加成功');
        yield put({
          type: 'addTask',
          payload: false,
        });
        yield put({
          type: 'cancelAddTask',
        });
        yield put({
          type: 'tasks/fetchTasks',
        });
      }
    },
  },

  reducers: {
    cancelAddTask(state) {
      return {
        ...state,
        data: {},
      };
    },
    addData(state, action) {
      console.log(state, action.payload);
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    },
    addTask(state, action) {
      return {
        ...state,
        addTask: action.payload,
      };
    },
    saveTasks(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
