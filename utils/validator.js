exports.isEmpty = function(data, keys, rules) {
  let error = null;
  keys.forEach((item) => {
    if (rules[item] && !data[item]) {
      error = `${item} ${rules[item]}`;
    }
  });
  return error;
}