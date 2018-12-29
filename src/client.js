const EventEmitter = require('events');
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter();
const server = require('./server')(client);
server.on('response', (resp)=>{
    console.log("Resp",resp);
    // process.stdout.write("Resp",resp);
    // process.stdout.write("\n\> ");
})

let command, args;
rl.on('line', (input)=>{
    [command,...args] = input.split(' ');
    console.log(input);
    client.emit('command', command,args);
})