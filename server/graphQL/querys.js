const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

const config = require('../config/database');
const User = require('../models/user');
const Skill = require('../models/skills');
const validateStrings = require('../utils/validateStrings');
const jwt = require('jsonwebtoken');
const each = require('async/each');
const _ = require('lodash');
const { skills, isDeployed, transporter } = require('../config/constants');

// const accountSid = 'fake';
// const authToken = 'fake';
// const client = require('twilio')(accountSid, authToken);

// Import Types
const {
  UserType,
  LoginType,
  ErrorSuccessType,
  SearchForUsersType,
  FilterResultsType,
  SkillsListType,
  MessagesListType,
} = require('./types');

verifyFilterArgs = async (user) => {
  if (user.gender !== undefined) {
    if (user.gender !== 'male' && user.gender !== 'female') {
      return {
        error: 'Gender Must Be Male or Female',
      };
    }
  }
  if (user.hOH !== undefined) {
    if (user.hOH !== 'yes' && user.hOH !== 'no') {
      return {
        error: 'Head Of Househole Must Be Yes Or NO',
      };
    }
  }
  if (user.skills !== undefined) {
    const skillsList = await Skill.getSkills();
    const skills = [];
    skillsList.forEach((element) => {
      skills.push(element.item);
    });
    if (
      user.skills.some((skill) => {
        if (skills.indexOf(skill) === -1) {
          return true;
        }
        return false;
      })
    ) {
      return {
        error: 'Must be a registered skill',
      };
    }
  }

  if (user.dates !== undefined) {
    if (
      user.dates.some((date) => {
        if (
          !(
            parseInt(date, 0) <= new Date().getUTCFullYear() &&
            parseInt(date, 0) > 1900
          )
        ) {
          return true;
        }
        return false;
      })
    ) {
      return {
        error: 'All Dates Must be from 1900 to current year',
      };
    }
  }
};

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    Login: {
      type: LoginType,
      args: {
        password: {
          type: new GraphQLNonNull(GraphQLString),
        },
        email: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parentValue, args) {
        if (
          args.email === undefined ||
          args.password === undefined ||
          args.email === '' ||
          args.password === ''
        ) {
          return {
            error: 'Missing Arguments',
          };
        }
        if (!validateStrings.validateEmail(args.email)) {
          return {
            error: 'User not found',
          };
        }
        const email = args.email;
        const password = args.password;
        return new Promise((resolve) => {
          User.getUserByEmail(email, (err, user) => {
            if (err) {
              resolve({
                error: 'User not found',
              });
              return;
            }
            if (!user) {
              resolve({
                error: 'User not found',
              });
            } else {
              if (!user.password) {
                resolve({
                  error: 'User not found',
                });
                return;
              }
              User.comparePassword(
                password,
                user.password,
                (comPassErr, isMatch) => {
                  if (comPassErr) {
                    resolve({
                      error: 'Wrong password',
                    });
                  }
                  if (isMatch) {
                    const token = jwt.sign(
                      {
                        user: _.pick(user, ['id', 'admin']),
                      },
                      config.secret,
                      {
                        expiresIn: 604800, // 1 week
                      },
                    );

                    resolve({
                      authToken: token,
                      user,
                    });
                  } else {
                    resolve({
                      error: 'Wrong password',
                    });
                  }
                },
              );
            }
          });
        });
      },
    },
    GetUsers: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args, context) {
        if (context.user.admin === true) {
          return new Promise((resolve, reject) => {
            // TODO filter by password to see if they are registered
            User.find((err, users) => {
              if (err) {
                reject(err);
                return true;
              }
              resolve(users);
              return true;
            });
          });
        }
        return {};
      },
    },
    FilterResultsNumber: {
      type: ErrorSuccessType,
      args: {
        gender: {
          type: GraphQLString,
        },
        hOH: {
          type: GraphQLString,
        },
        skills: {
          type: new GraphQLList(GraphQLString),
        },
        dates: {
          type: new GraphQLList(GraphQLString),
        },
        names: {
          type: new GraphQLList(GraphQLString),
        },
      },
      async resolve(parentValue, args, context) {
        const user = args;
        if (context.user.admin !== true) {
          return {
            error: 'Must Be Admin',
          };
        }

        const errMsg = await verifyFilterArgs(user);

        if (errMsg) {
          return {
            error: errMsg,
          };
        }

        return new Promise((resolve) => {
          // TODO filter by password to see if they are registered
          User.getNumberOfUsersByFilters(
            user.gender,
            user.hOH,
            user.skills,
            user.dates,
            user.names,
            (err, num) => {
              if (err) {
                resolve({
                  error: 'Somthing Went Wrong',
                });
                return;
              }
              resolve({
                success: num,
              });
            },
          );
        });
      },
    },
    FilterResults: {
      type: FilterResultsType,
      args: {
        gender: {
          type: GraphQLString,
        },
        hOH: {
          type: GraphQLString,
        },
        skills: {
          type: new GraphQLList(GraphQLString),
        },
        dates: {
          type: new GraphQLList(GraphQLString),
        },
        names: {
          type: new GraphQLList(GraphQLString),
        },
      },
      async resolve(parentValue, args, context) {
        const user = args;
        if (context.user.admin !== true) {
          return {
            error: 'Must Be Admin',
          };
        }

        const errMsg = await verifyFilterArgs(user);

        if (errMsg) {
          return {
            error: errMsg,
          };
        }
        return new Promise((resolve) => {
          // TODO filter by password to see if they are registered
          User.getUsersByFilters(
            user.gender,
            user.hOH,
            user.skills,
            user.dates,
            user.names,
            (err, num) => {
              if (err) {
                resolve({
                  error: 'Somthing Went Wrong',
                });
                return;
              }
              resolve({
                success: num,
              });
            },
          );
        });
      },
    },
    SendMessage: {
      type: ErrorSuccessType,
      args: {
        gender: {
          type: GraphQLString,
        },
        hOH: {
          type: GraphQLString,
        },
        skills: {
          type: new GraphQLList(GraphQLString),
        },
        dates: {
          type: new GraphQLList(GraphQLString),
        },
        names: {
          type: new GraphQLList(GraphQLString),
        },
        subject: {
          type: new GraphQLNonNull(GraphQLString),
        },
        message: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      async resolve(parentValue, args, context) {
        const user = args;
        if (context.user.admin !== true) {
          return {
            error: 'Must Be Admin',
          };
        }
        if (user.subject === undefined || user.subject === '') {
          return {
            error: 'Must Provide Subject',
          };
        }
        if (user.message === undefined || user.message === '') {
          return {
            error: 'Must Provide Message',
          };
        }
        const errMsg = await verifyFilterArgs(user);

        if (errMsg) {
          return {
            error: errMsg,
          };
        }

        return new Promise((resolve) => {
          // TODO filter by password to see if they are registered
          User.getUsersByFilters(
            user.gender,
            user.hOH,
            user.skills,
            user.dates,
            user.names,
            (err, users) => {
              if (err) {
                resolve({
                  error: 'Somthing Went Wrong',
                });
                return;
              }
              resolve({
                success: 'Messages Are Sending',
              });
              if (isDeployed) {
                // users.forEach((dbuser, index) => {
                //   setTimeout(() => {
                //     client.messages
                //       .create({
                //         body: `${user.subject}\n${user.message}`,
                //         to: dbuser.phone,
                //         from: '14354146499',
                //       })
                //       .then(message =>
                //         console.log(
                //           `${message.sid
                //           } ${
                //             index + 1
                //           } of ${
                //             users.length}`,
                //         ),
                //       );
                //   }, index * 2000);
                // });
                // const binding = users.reduce((accumulator, dbuser) => {
                //   if (dbuser.phone) {
                //     accumulator.push({
                //       binding_type: "sms",
                //       address: dbuser.phone
                //     });
                //   }
                // });
                // client.notify
                //   .services(notifyServiceSid)
                //   .notifications.create({
                //     toBinding: JSON.stringify(binding),
                //     body: `${user.subject}\n${user.message}`
                //   })
                //   .then(notification => console.log(notification.sid))
                //   .catch(error => console.log(error));

                // setTimeout(() => {
                //   each(users, (dbuser) => {
                //     try {
                //       if (dbuser.email) {
                //         const mailOptions = {
                //           from: "sunsetfarmproject@gmail.com",
                //           to: dbuser.email,
                //           subject: user.subject,
                //           text: user.message
                //         };
                //         transporter.sendMail(mailOptions, (error, info) => {
                //           if (error) {
                //             console.log(error);
                //           } else {
                //             console.log(`Email sent: ${info.response}`);
                //           }
                //         });
                //       }
                //     } catch (error) {
                //       console.log(error);
                //     }
                //   });
                // });
              }
            },
          );
        });
      },
    },
    SearchUser: {
      type: SearchForUsersType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parentValue, args, context) {
        const user = args;
        if (context.user.admin !== true) {
          return {
            error: 'Must Be Admin',
          };
        }
        if (user.name === undefined || user.name === '') {
          return {
            error: 'Must Provide Name To Search',
          };
        }

        return new Promise((resolve) => {
          User.getUsersByNameSearch(user.name, (err, userList) => {
            const resultsList = [];
            userList.some((userFromList) => {
              resultsList.push(userFromList.name);
            });
            resolve({
              results: resultsList,
            });
          });
        });
      },
    },
    GetSkills: {
      type: SkillsListType,
      async resolve(parentValue, args, context) {
        if (!context.user.id) {
          return {
            error: 'Not Logged In',
          };
        }
        const skillsList = await Skill.getSkills();
        if (!skillsList) {
          return {
            error: 'Somthing went worng',
          };
        }
        const skills = [];

        skillsList.forEach((element) => {
          skills.push(element.item);
        });
        return {
          skills,
        };
      },
    },
    getMessages: {
      type: MessagesListType,
      args: {
        to: {
          type: GraphQLString,
        },
        from: {
          type: GraphQLString,
        },
        dateSentAfter: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, args, context) {
        if (context.user.admin !== true) {
          return {
            error: 'Must Be Admin',
          };
        }
        if (!args.to && !args.from) {
          return {
            error: 'Must Provide to or from',
          };
        }
        // if(!args.dateSentAfter){
        //     return { error: 'Must Provide dateSentAfter',};
        // }
        return new Promise((resolve) => {
          client.messages.list((err, response) => {
            if (err) {
              console.log(err);
            }
            console.log(err);
            console.log(args);
            console.log(response);
            resolve({
              messages: response.data,
            });
          });
          console.log('hello');
        });
      },
    },
  },
});
