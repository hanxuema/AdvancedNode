var event = require("events");
var util = require("util");

var emitter = new event.EventEmitter();

var person = function(name) {
  this.name = name;
};

util.inherits(person, event.EventEmitter);

var john = new person("john");
var mary= new person("mary");
var peter = new person("peter");

var people = [john, mary, peter];

people.forEach(function (per) {
    per.on("speak", function(msg, person){
            console.log(per.name + " said "  + msg);
            if (person !== undefined) {   
                person.emit("speak", "hahaha", peter);
            }
    })
});

john.emit("speak", "hi", mary);
mary.emit("speak", "dude");
peter.emit("speak", "morning");