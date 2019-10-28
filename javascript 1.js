// quastion 1  =  F;


function sayHello () {
alert(this.name + " says hello!");
}
var alice = { name: "Alice" };
sayHello.call(alice);

//var x = 10;
var puzzle = function (amount) {
this.x += amount;
return this.x;
};

var result = 50 - puzzle(20);
 
//question3 == 20 

// question 4 == C 'Hi i ama window'

//question 5 == B 20 
var obj1 = { x: 10 };

var obj2 = Object.create(obj1);

var obj3 = Object.create(obj2);

var result = obj3.x + 10;

// question 6 == C Alice says hi after 1 seconds 
var name = "Window";
var alice = {
name: "Alice",
sayHi: function() {
alert(this.name + " says hi");
}
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi.bind(alice), 1000);

// question 7 == d DRY - don't repeat yourself(developer efficacy)
