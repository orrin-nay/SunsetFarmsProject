const users = require('./userJSON');

const afils = [];
users.forEach((user) => {
  if (user.affiliation !== '') {
    const userAfils = user.affiliation.toString().split(',');
    userAfils.forEach((afil) => {
      if (afils.indexOf(afil) === -1) {
        afils.push(afil);
      }
    });
  }
});
console.log(afils.sort());
