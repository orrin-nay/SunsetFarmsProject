const users = require('./userJSON');
const User = require('..//models/user');
const mongoose = require('mongoose');
const config = require('../config/database');

let i = 0;
const size = Object.keys(users).length;
function addNewUser() {
  if (size > i) {
    const user = users[i];
    if (user.phone) {
      const query = { name: `${user.firstName} ${user.lastName}` };
      User.findOne(query, (usererr, newuser) => {
        if (usererr) {
          console.log(usererr);
        }
        if (newuser) {
          User.changePhone(newuser, user.phone.toString().replace(/\D/g, ''), (err) => {
            if (err) {
              console.log(err);
              console.log(newuser);
            }
            console.log(`uploaded ${newuser.name}`);
            console.log(`${i + 1} of ${size}`);
            i++;
            process.nextTick(() => {
              addNewUser();
            });
          });
        } else {
          console.log('user Not found');
        }
      });
    } else {
      i++;
      process.nextTick(() => {
        addNewUser();
      });
    }
  } else {
    console.log('done');
  }
}


// Connect To Database
mongoose.connect(config.database, { useMongoClient: true });

// On Connection
mongoose.connection.on('connected', () => {
  console.log(`Connected to database ${config.database}`);

  addNewUser();
  // dummyInfo(20000);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log(`Database error: ${err}`);
});

