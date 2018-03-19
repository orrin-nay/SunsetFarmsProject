const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  email: {
    type: String,
    required: false,
    unique: false,
    dropDups: false
  },
  password: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    unique: false
  },
  // date Of Birth
  dOB: {
    type: String
  },
  gender: {
    type: String
  },
  // head of house
  hOH: {
    type: Boolean
  },
  skills: {
    type: [String]
  },
  admin: {
    type: Boolean,
    require: false
  }
});
const User = mongoose.model("User", UserSchema);
module.exports = User;

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.getUserByEmail = function(email, callback) {
  const query = { email };
  User.findOne(query, callback);
};

module.exports.registerUser = function(newUser, callback) {
  bcrypt.genSalt(10, (saltErr, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.setPassword = function(thisUser, password, callback) {
  bcrypt.genSalt(10, (saltErr, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      thisUser.password = hash;
      thisUser.save(callback);
    });
  });
};
module.exports.addUser = function(newUser, callback) {
  newUser.save(callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};
module.exports.getUsers = function(callback) {
  User.find(callback);
};

module.exports.changeEmail = function(user, newEmail, callback) {
  user.email = newEmail;
  user.save(callback);
};

module.exports.changePhone = function(user, phone, callback) {
  user.phone = phone;
  user.save(callback);
};

module.exports.changedOB = function(user, dOB, callback) {
  user.dOB = dOB;
  user.save(callback);
};

module.exports.changeGender = function(user, gender, callback) {
  user.gender = gender;
  user.save(callback);
};

module.exports.changehOH = function(user, hOH, callback) {
  user.hOH = hOH;
  user.save(callback);
};
module.exports.changeAdmin = function(user, admin, callback) {
  user.admin = admin;
  user.save(callback);
};

module.exports.removeSkill = function(user, skillIndex, callback) {
  user.skills.splice(skillIndex, 1);
  user.save(callback);
};

module.exports.addSkill = function(user, skill, callback) {
  try {
    if (user.skills.indexOf(skill) === -1) {
      user.skills.push(skill);
    }
  } catch (err) {
    user.skills = [];
    user.skills.push(skill);
  }
  user.save(callback);
};

function buildParamatersForFilters(gender, hOH, skills, dates, names) {
  const paramaters = [];
  if (gender !== undefined) {
    paramaters.push({ gender });
  }

  if (hOH !== undefined) {
    paramaters.push({ hOH });
  }

  if (dates !== undefined) {
    dates.forEach(date => {
      paramaters.push({ dOB: new RegExp(`^${date}`, "i") });
    }, this);
  }

  if (names !== undefined) {
    names.forEach(nameNew => {
      paramaters.push({ name: nameNew });
    }, this);
  }

  if (skills !== undefined) {
    paramaters.push({ skills: { $in: skills } });
  }
  return paramaters;
}
module.exports.getNumberOfUsersByFilters = function(
  gender,
  hOH,
  skills,
  dates,
  names,
  callback
) {
  const paramaters = buildParamatersForFilters(
    gender,
    hOH,
    skills,
    dates,
    names
  );
  const query = {};
  if (paramaters.length === 0) {
    User.count({}, callback);
  } else {
    query.$or = paramaters;
    User.count(query, callback);
  }
};
module.exports.getUsersByFilters = function(
  gender,
  hOH,
  skills,
  dates,
  names,
  callback
) {
  const paramaters = buildParamatersForFilters(
    gender,
    hOH,
    skills,
    dates,
    names
  );

  const query = {};
  if (paramaters.length === 0) {
    User.find({}, callback);
  } else {
    query.$or = paramaters;
    User.find(query, callback);
  }
};
module.exports.removeAffiliation = async function(affiliation) {
  const query = { skills: affiliation };
  const users = await User.find(query);
  users.forEach(user => {
    user.skills.splice(user.skills.indexOf(affiliation), 1);
    user.save();
  });
};
module.exports.getUsersByNameSearch = function(name, callback) {
  User.find({ name: new RegExp(`^${name}`, "i") }, callback)
    .select("name _id")
    .limit(3);
};
