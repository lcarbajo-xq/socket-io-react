class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      socket.on("new-message", (data) => {
        console.log(data);

        this.io.emit("notify-new-message", data);
      });
    });
  }
}

module.exports = Sockets;
