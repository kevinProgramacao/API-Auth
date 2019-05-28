const nodemailer                            = require('nodemailer');
const { mailServer, userMail, passMail }    = require('../config/default.json');

const transport = nodemailer.createTransport({
    host: mailServer,
    port: 587,
    secure: false,
    auth: { user: userMail, pass: passMail },
    tls:{
        rejectUnauthorized:false
    }
});

module.exports = transport;