import { stringify } from 'qs';
import assign from 'lodash/assign';
import request from '../utils/request';
import config from '../common/config';

export async function queryAllList(params) {
  return request(
    `${config.api}/api/common/gets?${stringify(
      assign(params, {
        token: config.token,
      })
    )}`
  );
}

export async function queryDetail(params) {
  return request(
    `${config.api}/api/common/get?${stringify(
      assign(params, {
        token: config.token,
      })
    )}`
  );
}

export async function createItem(params) {
  return request(
    `${config.api}/api/common/post?${stringify({
      token: config.token,
      sql: params.sql,
    })}`,
    {
      method: 'POST',
      body: params,
    }
  );
}

export async function createList(params) {
  return request(
    `${config.api}/api/common/posts?${stringify({
      token: config.token,
      sql: params.sql,
    })}`,
    {
      method: 'POST',
      body: {
        data: params.data,
      },
    }
  );
}

export async function updateDetail(params) {
  return request(
    `${config.api}/api/common/update?${stringify({
      token: config.token,
      sql: params.sql,
    })}`,
    {
      method: 'POST',
      body: params,
    }
  );
}

export async function deleteItem(params) {
  return request(
    `${config.api}/api/common/delete?${stringify({
      token: config.token,
      sql: params.sql,
    })}`,
    {
      method: 'POST',
      body: params,
    }
  );
}

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}
