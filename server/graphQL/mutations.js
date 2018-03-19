const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLBoolean,
} = require('graphql');


const config = require('../config/database');
const User = require('../models/user');
const validateStrings = require('../utils/validateStrings');
const jwt = require('jsonwebtoken');
// const _ = require('lodash');
// const { transporter, hostName } = require('../config/constants');

// Import Types
const { ErrorSuccessType } = require('./types');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: ErrorSuccessType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
      },
      resolve(parentValue, args, context) {
        if (context.user.admin === true) {
          if (args.name === undefined || args.name === '') {
            return {
              error: 'Missing Arguments',
            };
          }
          if ((args.email === undefined || args.email === '') &&
          (args.phone === undefined || args.phone === '')) {
            return {
              error: 'Missing Arguments',
            };
          }
          const newUser = new User({
            name: args.name,
          });
          if (args.email) {
            if (!validateStrings.validateEmail(args.email)) {
              return {
                error: 'Invalid Email',
              };
            }
            newUser.email = args.email;
          }
          if (args.phone) {
            newUser.phone = args.phone;
          }

          return new Promise((resolve) => {
            User.addUser(newUser, (err) => {
              if (err) {
                if (err.toJSON().code === 11000) {
                  resolve({ error: 'Email already registered' });
                } else {
                  resolve({ error: 'Somthing Went wrong' });
                  console.log(err.toJSON());
                }
              } else {
                // const token = jwt.sign({
                //   user: _.pick(user, ['id', 'name', 'email']),
                // }, config.secret, {
                //   expiresIn: 604800, // 1 week
                // });

                // setTimeout(() => {
                //   const mailOptions = {
                //     from: 'sunsetfarmsproject@gmail.com',
                //     to: user.email,
                //     subject: 'Sunset Farms Project',
                //     html: `<p>${user.name} you have been <b>added</b> to the Sunset Farms Project. <a href="${hostName}register/${token}">Finish your registration here.</a></p>`,
                //   };

                //   transporter.sendMail(mailOptions, (error, info) => {
                //     if (error) {
                //       console.log(error);
                //     } else {
                //       console.log(`Email sent: ${info.response}`);
                //     }
                //   });
                // });
                resolve({ success: 'User Added' });
              }
            });
          });
        }
        return null;
      },
    },
    Register: {
      type: ErrorSuccessType,
      args: {
        token: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
        dOB: { type: new GraphQLNonNull(GraphQLString) },
        gender: { type: new GraphQLNonNull(GraphQLString) },
        hOH: { type: new GraphQLNonNull(GraphQLBoolean) },
        skills: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
      },
      resolve(parentValue, args) {
        if (args.token === undefined || args.token === ''
        || args.password === undefined || args.password === ''
        || args.phone === undefined || args.phone === ''
        || args.dOB === undefined || args.dOB === ''
        || args.gender === undefined || args.gender === ''
        || args.hOH === undefined || args.hOH === ''
        || args.skills === undefined || args.skills === '' ||
      args.skills.length === 0) {
          return {
            error: 'Missing Arguments',
          };
        }
        if (!validateStrings.validatePassword(args.password)) {
          return {
            error: 'Password must contain a number, a letter, and a special character',
          };
        }
        if (!validateStrings.validatePhone(args.phone)) {
          return {
            error: 'Invalid phone',
          };
        }
        if (!validateStrings.validateDOB(args.dOB)) {
          return {
            error: 'Invalid date',
          };
        }
        if (!validateStrings.validateGender(args.gender)) {
          return {
            error: 'Gender must be male or female',
          };
        }
        if (!validateStrings.validateHOH(args.hOH)) {
          return {
            error: 'hOH must be true or false',
          };
        }
        args.skills.forEach((skill) => {
          if (skills.indexOf(skill) === -1) {
            return {
              error: 'Invalid Skill',
            };
          }
        }, this);
        return new Promise((resolve) => {
          jwt.verify(args.token, config.secret, (err, head) => {
            if (err) {
              resolve({
                error: 'Invalid token',
              });
              return;
            }
            const user = head.user;
            if (!user.id) {
              resolve({
                error: 'Invalid token',
              });
              return;
            }
            User.getUserById(user.id, (getUserErr, dbuser) => {
              if (getUserErr) {
                resolve({
                  error: 'User Not Added',
                });
                return;
              }
              if (!dbuser) {
                resolve({
                  error: 'User Not Added',
                });
                return;
              }
              if (dbuser.password) {
                resolve({
                  error: 'Acount Already Exists Login',
                });
                return;
              }
              dbuser.phone = args.phone;
              dbuser.dOB = args.dOB;
              dbuser.gender = args.gender;
              dbuser.hOH = args.hOH;
              dbuser.skills = args.skills;
              User.setPassword(dbuser, args.password, (setPwordErr) => {
                if (setPwordErr) {
                  resolve({
                    error: 'Somthing Went Wrong',
                  });
                  return;
                }
                resolve({
                  success: 'Successfully registerd, you can now login!',
                });
              });
            });
          });
        });
      },
    },
    ChangeEmail: {
      type: ErrorSuccessType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context) {
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.email === undefined || args.email === '') {
          return {
            error: 'Must Provide Email',
          };
        }
        if (!validateStrings.validateEmail(args.email)) {
          return {
            error: 'Invalid Email',
          };
        }
        return new Promise((resolve) => {
          User.getUserById(context.user.id, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.getUserByEmail(args.email, (getUserError, userEmailTest) => {
              if (userEmailTest) {
                resolve({
                  error: 'Email In Use',
                });
                return;
              }
              User.changeEmail(user, args.email, (changeEmailErr) => {
                if (changeEmailErr) {
                  resolve({
                    error: 'Invalid User',
                  });
                  return;
                }
                resolve({
                  success: 'Email Successfully Changed',
                });
              });
            });
          });
        });
      },
    },
    ChangePhone: {
      type: ErrorSuccessType,
      args: {
        phone: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context) {
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.phone === undefined || args.phone === '') {
          return {
            error: 'Must Provide Phone',
          };
        }
        if (!validateStrings.validatePhone(args.phone)) {
          return {
            error: 'Invalid Phone',
          };
        }
        args.phone = validateStrings.cleanPhone(args.phone);
        return new Promise((resolve) => {
          User.getUserById(context.user.id, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.changePhone(user, args.phone, (changedOBErr) => {
              if (changedOBErr) {
                resolve({
                  error: 'Invalid User',
                });
                return;
              }
              resolve({
                success: 'Phone Successfully Changed',
              });
            });
          });
        });
      },
    },
    ChangeDOB: {
      type: ErrorSuccessType,
      args: {
        dOB: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context) {
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.dOB === undefined || args.dOB === '') {
          return {
            error: 'Must Provide Date Of Birth',
          };
        }
        if (!validateStrings.validateDOB(args.dOB)) {
          return {
            error: 'Invalid Date Of Birth',
          };
        }
        return new Promise((resolve) => {
          User.getUserById(context.user.id, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.changedOB(user, args.dOB, (changedOBErr) => {
              if (changedOBErr) {
                resolve({
                  error: 'Invalid User',
                });
                return;
              }
              resolve({
                success: 'Date Of Birth Successfully Changed',
              });
            });
          });
        });
      },
    },
    ChangeGender: {
      type: ErrorSuccessType,
      args: {
        gender: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context) {
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.gender === undefined || args.gender === '') {
          return {
            error: 'Must Provide Gender',
          };
        }
        if (!validateStrings.validateGender(args.gender)) {
          return {
            error: 'Invalid Gender',
          };
        }
        return new Promise((resolve) => {
          User.getUserById(context.user.id, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.changeGender(user, args.gender, (changegenderErr) => {
              if (changegenderErr) {
                resolve({
                  error: 'Invalid User',
                });
                return;
              }
              resolve({
                success: 'Gender Successfully Changed',
              });
            });
          });
        });
      },
    },
    ChangeHOH: {
      type: ErrorSuccessType,
      args: {
        hOH: { type: new GraphQLNonNull(GraphQLBoolean) },
      },
      resolve(parentValue, args, context) {
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.hOH === undefined || args.hOH === '') {
          return {
            error: 'Must Provide If They Are Head Of Household',
          };
        }
        if (!validateStrings.validateHOH(args.hOH)) {
          return {
            error: 'Invalid Head Of Household',
          };
        }
        return new Promise((resolve) => {
          User.getUserById(context.user.id, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.changehOH(user, args.hOH, (changedOBErr) => {
              if (changedOBErr) {
                resolve({
                  error: 'Invalid User',
                });
                return;
              }
              resolve({
                success: 'Head Of Household Successfully Changed',
              });
            });
          });
        });
      },
    },
    ChangePassword: {
      type: ErrorSuccessType,
      args: {
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context) {
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.password === undefined || args.password === '') {
          return {
            error: 'Must Provide A Password',
          };
        }
        if (!validateStrings.validatePassword(args.password)) {
          return {
            error: 'Invalid Head Of Password',
          };
        }
        return new Promise((resolve) => {
          User.getUserById(context.user.id, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.setPassword(user, args.password, (changedPasswordErr) => {
              if (changedPasswordErr) {
                resolve({
                  error: 'Invalid User',
                });
                return;
              }
              resolve({
                success: 'Password Successfully Changed',
              });
            });
          });
        });
      },
    },
    RemoveSkill: {
      type: ErrorSuccessType,
      args: {
        skill: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context) {
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.skill === undefined || args.skill === '') {
          return {
            error: 'Must Provide A Skill',
          };
        }
        if (skills.indexOf(args.skill) === -1) {
          return {
            error: 'Invalid Skill',
          };
        }
        return new Promise((resolve) => {
          User.getUserById(context.user.id, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.removeSkill(user, args.skill, (removeSkillErr) => {
              if (removeSkillErr) {
                resolve({
                  error: 'Invalid User',
                });
                return;
              }
              resolve({
                success: 'Skill Removed',
              });
            });
          });
        });
      },
    },
    AddSkill: {
      type: ErrorSuccessType,
      args: {
        skill: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context) {
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.skill === undefined || args.skill === '') {
          return {
            error: 'Must Provide A Skill',
          };
        }
        if (skills.indexOf(args.skill) === -1) {
          return {
            error: 'Invalid Skill',
          };
        }
        return new Promise((resolve) => {
          User.getUserById(context.user.id, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.addSkill(user, args.skill, (removeSkillErr) => {
              if (removeSkillErr) {
                resolve({
                  error: 'Invalid User',
                });
                return;
              }
              resolve({
                success: 'Skill Added',
              });
            });
          });
        });
      },
    },
    ChangeEmailAdmin: {
      type: ErrorSuccessType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context) {
        if (!context.user.admin) {
          return {
            error: 'Must Be Admin',
          };
        }
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.email === undefined || args.email === '') {
          return {
            error: 'Must Provide Email',
          };
        }
        if (!validateStrings.validateEmail(args.email)) {
          return {
            error: 'Invalid Email',
          };
        }
        return new Promise((resolve) => {
          User.getUserById(args.userId, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.getUserByEmail(args.email, (getUserError, userEmailTest) => {
              if (userEmailTest) {
                resolve({
                  error: 'Email In Use',
                });
                return;
              }
              User.changeEmail(user, args.email, (changeEmailErr) => {
                if (changeEmailErr) {
                  resolve({
                    error: 'Invalid User',
                  });
                  return;
                }
                resolve({
                  success: 'Email Successfully Changed',
                });
              });
            });
          });
        });
      },
    },
    ChangePhoneAdmin: {
      type: ErrorSuccessType,
      args: {
        phone: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context) {
        if (!context.user.admin) {
          return {
            error: 'Must Be Admin',
          };
        }
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.phone === undefined || args.phone === '') {
          return {
            error: 'Must Provide Phone',
          };
        }
        if (!validateStrings.validatePhone(args.phone)) {
          return {
            error: 'Invalid Phone',
          };
        }
        args.phone = validateStrings.cleanPhone(args.phone);
        return new Promise((resolve) => {
          User.getUserById(args.userId, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.changePhone(user, args.phone, (changedOBErr) => {
              if (changedOBErr) {
                resolve({
                  error: 'Invalid User',
                });
                return;
              }
              resolve({
                success: 'Phone Successfully Changed',
              });
            });
          });
        });
      },
    },
    ChangeDOBAdmin: {
      type: ErrorSuccessType,
      args: {
        dOB: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context) {
        if (!context.user.admin) {
          return {
            error: 'Must Be Admin',
          };
        }
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.dOB === undefined || args.dOB === '') {
          return {
            error: 'Must Provide Date Of Birth',
          };
        }
        if (!validateStrings.validateDOB(args.dOB)) {
          return {
            error: 'Invalid Date Of Birth',
          };
        }
        return new Promise((resolve) => {
          User.getUserById(args.userId, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.changedOB(user, args.dOB, (changedOBErr) => {
              if (changedOBErr) {
                resolve({
                  error: 'Invalid User',
                });
                return;
              }
              resolve({
                success: 'Date Of Birth Successfully Changed',
              });
            });
          });
        });
      },
    },
    ChangeGenderAdmin: {
      type: ErrorSuccessType,
      args: {
        gender: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context) {
        if (!context.user.admin) {
          return {
            error: 'Must Be Admin',
          };
        }
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.gender === undefined || args.gender === '') {
          return {
            error: 'Must Provide Gender',
          };
        }
        if (!validateStrings.validateGender(args.gender)) {
          return {
            error: 'Invalid Gender',
          };
        }
        return new Promise((resolve) => {
          User.getUserById(args.userId, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.changeGender(user, args.gender, (changegenderErr) => {
              if (changegenderErr) {
                resolve({
                  error: 'Invalid User',
                });
                return;
              }
              resolve({
                success: 'Gender Successfully Changed',
              });
            });
          });
        });
      },
    },
    ChangeHOHAdmin: {
      type: ErrorSuccessType,
      args: {
        hOH: { type: new GraphQLNonNull(GraphQLBoolean) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context) {
        if (!context.user.admin) {
          return {
            error: 'Must Be Admin',
          };
        }
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.hOH === undefined || args.hOH === '') {
          return {
            error: 'Must Provide If They Are Head Of Household',
          };
        }
        if (!validateStrings.validateHOH(args.hOH)) {
          return {
            error: 'Invalid Head Of Household',
          };
        }
        return new Promise((resolve) => {
          User.getUserById(args.userId, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.changehOH(user, args.hOH, (changedOBErr) => {
              if (changedOBErr) {
                resolve({
                  error: 'Invalid User',
                });
                return;
              }
              resolve({
                success: 'Head Of Household Successfully Changed',
              });
            });
          });
        });
      },
    },
    ChangeAdminPrivilege: {
      type: ErrorSuccessType,
      args: {
        admin: { type: new GraphQLNonNull(GraphQLBoolean) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context) {
        if (!context.user.admin) {
          return {
            error: 'Must Be Admin',
          };
        }
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.admin === undefined || args.admin === '') {
          return {
            error: 'Must Provide If They Are Admin',
          };
        }
        return new Promise((resolve) => {
          User.getUserById(args.userId, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.changeAdmin(user, args.admin, (changedOBErr) => {
              if (changedOBErr) {
                resolve({
                  error: 'Invalid User',
                });
                return;
              }
              resolve({
                success: 'Privlage Level Successfully Changed',
              });
            });
          });
        });
      },
    },
    RemoveSkillAdmin: {
      type: ErrorSuccessType,
      args: {
        skill: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context) {
        if (!context.user.admin) {
          return {
            error: 'Must Be Admin',
          };
        }
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.skill === undefined || args.skill === '') {
          return {
            error: 'Must Provide A Skill',
          };
        }
        if (skills.indexOf(args.skill) === -1) {
          return {
            error: 'Invalid Skill',
          };
        }
        return new Promise((resolve) => {
          User.getUserById(args.userId, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.removeSkill(user, args.skill, (removeSkillErr) => {
              if (removeSkillErr) {
                resolve({
                  error: 'Invalid User',
                });
                return;
              }
              resolve({
                success: 'Skill Removed',
              });
            });
          });
        });
      },
    },
    AddSkillAdmin: {
      type: ErrorSuccessType,
      args: {
        skill: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context) {
        if (!context.user.admin) {
          return {
            error: 'Must Be Admin',
          };
        }
        if (context.user.id === undefined || context.user.id === '') {
          return {
            error: 'Not Loged In',
          };
        }
        if (args.skill === undefined || args.skill === '') {
          return {
            error: 'Must Provide A Skill',
          };
        }
        if (skills.indexOf(args.skill) === -1) {
          return {
            error: 'Invalid Skill',
          };
        }
        return new Promise((resolve) => {
          User.getUserById(args.userId, (getUserErr, user) => {
            if (getUserErr) {
              resolve({
                error: 'Invalid User',
              });
              return;
            }
            User.addSkill(user, args.skill, (removeSkillErr) => {
              if (removeSkillErr) {
                resolve({
                  error: 'Invalid User',
                });
                return;
              }
              resolve({
                success: 'Skill Added',
              });
            });
          });
        });
      },
    },
  },
});
