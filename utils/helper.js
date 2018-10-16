'use strict'

const crypto = require('crypto')

exports.generateRamdomString = function generateRamdomString (length) {
  const base = 'abcdefghigklmnopqrstuvwxyz';
  let str = ''
  for (let i = 0; i < length; i++) {
    str += base[parseInt(Math.random() * base.length)]
  }
  return str
}

exports.sha1 = function sha1 (str) {
  const hash = crypto.createHash('sha1')
  hash.update(str)
  return hash.digest('hex')
}

exports.promisify = function (nodeFunction) {
  return function(...args) {
      return new Promise((resolve, reject) => {
          nodeFunction.call(this, ...args, (err, data) => {
              if(err) {
                  reject(err);
              } else {
                  resolve(data);
              }
          });
      });
  };
};
