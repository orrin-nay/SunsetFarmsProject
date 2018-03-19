const users = require('./userJSON');
const User = require('..//models/user');
const mongoose = require('mongoose');
const config = require('../config/database');

// Connect To Database
mongoose.connect(config.database, { useMongoClient: true });

// On Connection
mongoose.connection.on('connected', () => {
  console.log(`Connected to database ${config.database}`);
  // // enable for dummyinfo
  // dummyInfo(20000);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log(`Database error: ${err}`);
});


let i = 0;
const size = Object.keys(users).length;
function addNewUser() {
  const user = users[i];
  const newuser = new User();
  newuser.gender = user.gender;
  newuser.name = `${user.firstName} ${user.lastName}`;
  newuser.email = user.email;
  newuser.phone = user.phones;
  if (user.affiliation) {
    const userAfils = user.affiliation.toString().split(',');
    userAfils.forEach((afil) => {
      newuser.skills.push(afil.trim());
    });
  }

  User.addUser(newuser, (err) => {
    if (err) {
      console.log(err);
      console.log(newuser);
    }
    console.log(`uploaded ${newuser.name}`);
    if (size > i + 1) {
      i++;
      console.log(`${i} of ${size}`);
      addNewUser();
    } else {
      console.log('done');
    }
  });
}
addNewUser();

