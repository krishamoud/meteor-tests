Players = new Meteor.Collection("players");
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
      Meteor.call("addPlayer");

    }

  });
}

if (Meteor.isServer) {
  Meteor.methods({
    "addPlayer":function(){
      var count = Players.find().count() + 1;
      Players.insert({
        "name":"Kris" + count
      })
    }
  })
  Meteor.startup(function () {
    // code to run on server at startup
    if(Players.find().count() == 0){
      for(var i = 0; i < 10; i++){
        Players.insert({
          "name":"Kris" + i
        });
      }
    }
  });
  
}
