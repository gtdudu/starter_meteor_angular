Meteor.startup(function () {

   //minimum config for email package otherwise all mails sent will log in server console only.
  //  smtp = {
  //     username: 'your@mail.com',
  //     password: 'yourPassword',
  //     server:   'yourSmtp',
  //  }
   //
  //  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username)
  //                          + ':' + encodeURIComponent(smtp.password) + '@'
  //                          + encodeURIComponent(smtp.server) + ':' + smtp.port;

   // without it the link starts with /#/ and router just ignores it...
   Accounts.emailTemplates.resetPassword.text = function (user, url) {
      url = url.replace('#/', '')
      return "Click this link to reset your password: " + url
   };

   if (Meteor.settings.public.verifyEmail == true) {
      // without it the link starts with /#/ and router just ignores it...
      Accounts.emailTemplates.verifyEmail.text = function (user, url) {
         url = url.replace('#/', '')
         return "Click this link to verify your email: " + url
      };
   }

});

// How to send an email 101 :

// var to = 'dummy@gmail.com';
// var from = 'dummy@gmail.com';
// var subject = 'Testing';
// var text = 'Shazam';
// Email.send({
//   to: to,
//   from: from,
//   subject: subject,
//   text: text
// });
//
