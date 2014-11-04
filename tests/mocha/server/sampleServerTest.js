if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Server initialization", function(){
      it("should have a Meteor version defined", function(){
        chai.assert(Meteor.release);
      });
    });

    /*describe("Server initialization", function(){
      it("should have greater than 0 players in the db after initialization", function(){
        chai.assert(Players.find().count() > 0);
      });
    });*/
  });
}
