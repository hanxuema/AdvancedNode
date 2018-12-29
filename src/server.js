const EventEmitter = require("events");

class Server extends EventEmitter {
  constructor(client) {
    super();
    process.nextTick(() => {
      this.emit("response", "Type a command (Help to list commands)");
    });
    client.on("command", (command,args) => {
      console.log("command", command);
      switch (command) {
        case "help":
        case "add":
        case "ls":
        case "delete":
          this[command](args);
          break;

        default:
          this.emit("response", "Unknown command...");
          break;
      }
    });
  }

  help() {
    this.emit("response", "help ...");
  }
  add() {
    this.emit("response", args.join(' '));
  }
  ls() {
    this.emit("response", "ls ...");
  }
  delete() {
    this.emit("response", "delete ...");
  }
}

module.exports = client => new Server(client);
