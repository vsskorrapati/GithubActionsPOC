const app = require("./app");
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// setInterval(() => server.getConnections(
//     (err, connections) => console.log(`${connections} connections currently open`)
// ), 1000);

// process.on('SIGTERM', shutDown);
// process.on('SIGINT', shutDown);

// function shutDown() {
//     console.log('Received kill signal, shutting down gracefully');
//     server.close(() => {
//         console.log('Closed out remaining connections');
//         connection.close();
//         process.exit(0);
//     });

//     setTimeout(() => {
//         console.error('Could not close connections in time, forcefully shutting down');
//         process.exit(1);
//     }, 10000);
// }
