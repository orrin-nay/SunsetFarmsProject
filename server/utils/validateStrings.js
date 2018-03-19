module.exports.validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

module.exports.validatePassword = password => !(password.length < 7 || password.search(/\d/) === -1 || password.search(/[a-zA-Z]/) === -1 ||
  password.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) !== -1);

module.exports.validatePhone = (phone) => {
  phone = module.exports.cleanPhone(phone);
  return phone.length === 10;
};
module.exports.cleanPhone = phone => phone.replace(/\D/g, '');

module.exports.validateDOB = (date) => {
  date = date.replace(/\D/g, '');
  date = date.replace(/-/g, '');
  date = date.replace(/\//g, '');
  return date.length === 8;
};

module.exports.validateGender = gender => (gender === 'male' || gender === 'female');

module.exports.validateHOH = hOH => (hOH === true || hOH === false);
