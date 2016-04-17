Meteor.startup(function () {
   // create 200 hundreds document to test infinite scrolling
   if (!Scroll.find().count()) {
       for (var i = 0; i < 200; i++) {
        Scroll.insert({
            name: i.toString(),
            index: i
        });
      }
      console.log("200 Scroll document have been created");
   }

   if (!Meteor.users.find().count()) {
      // create two testing accounts
      Accounts.createUser(
      {
        email : 'mastermind@mastermind.com',
        username: 'mastermind',
        password : 'mastermind',
         profile: {
             firstName: 'master',
             lastName: 'mind',
         }
        });

      Accounts.createUser(
      {
        email : 'dummy@dummy.com',
        username: 'dummy',
        password : 'dummy'
         // profile: {
         //     firstName: 'dum',
         //     lastName: 'my'
         // }
       });

       let master = Meteor.users.findOne({username: 'mastermind'});
       master.roles.push('admin')
       console.log(master);
      //  Meteor.users.update(master._id, master);
       console.log("2 Users have been generated");
   }
});
