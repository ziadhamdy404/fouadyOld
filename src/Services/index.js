import React from 'react';

import utils from '../utils';
async function getAccount() {
  return await utils.get('account');
}
async function setAccount(data) {
  return await utils.set('account', data);
}

async function getFirst() {
  return await utils.get('first');
}
async function setFirst(data) {
  return await utils.set('first', data);
}
async function logout() {
  return await utils.set('account', null);
}

export default {
  
};
