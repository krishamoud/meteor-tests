if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Click the button", function(){
      it("should respect increase the counter by 1", function(){
      	var currentCount = Session.get("counter");
      	console.log(currentCount);
      	$("button").click();
        chai.assert.equal(Session.get("counter"),currentCount + 1);
      });
    });
  });
}
