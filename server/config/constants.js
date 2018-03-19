const ServerAdress = require('../../constance');


module.exports.isDeployed = true;

const nodemailer = require('nodemailer');

module.exports.transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sunsetfarmsproject@gmail.com',
    pass: 'fake',
  },
});

module.exports.hostName = `${ServerAdress}/`;
