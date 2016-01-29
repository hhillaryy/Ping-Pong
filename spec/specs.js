
describe("userNumber", function() {

  it("counts up from one to the number the user enters", function() {
    expect(userNumber(2)).to.eql([1,2]);
  });

  it("replaces multipes of 3 with ping", function() {
    expect(userNumber(3)).to.eql([1,2,"ping"]);
    });

  it("replaces multipes of 5 with pong", function() {
    expect(userNumber(5)).to.eql([1,2,"ping",4,"pong"]);
    });

  it("replaces multiples of 15 (5 and 3) with pingpong", function () {
    expect(userNumber(15)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong", 11, "ping", 13, 14, "pingpong"])
    });
});
