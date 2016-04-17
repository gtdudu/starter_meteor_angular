Meteor.publish("post", function (id) {
   check(id, Match.OneOf(String, undefined));

   if (id) {
      return Post.find({_id: id});
   }
   else {
      return Post.find({});
   }
});

Meteor.methods({
  'insertPost': function (data) {

     if (!this.userId) {
      state.go('/login');
      return;
     }


    var exist = Post.findOne( {name: data.name });
    var user = Meteor.users.findOne({_id: this.userId});


    if (!exist){
      Post.insert(data);
    }
  }
});
