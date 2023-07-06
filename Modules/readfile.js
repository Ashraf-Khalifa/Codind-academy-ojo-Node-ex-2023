//num 1

// const fs = require("fs");
// const { url } = require("inspector");
// fs.readFile("text.txt",  (err, data ) => {
//     if (err) {
//         console.error(err);
//     return;
//     }
//     console.log(`file contents: ${data}`)
// })

// num 2
// fs.promises.appendFile("text.txt", "\nHello,Ashraf")

//  num 3 and 4

// const http = require("http");
// const axios = require('axios');
// const hostName = "127.0.0.1";
// const port = 8080;

// const server = http.createServer((req, res) => {

//   if (req.url === "/file") {
//     fs.readFile('file.txt', (err, data) => {
//       if (err) {
//         res.statusCode = 500;
//         res.end('Internal Server Error');
//       } else {
//         res.setHeader('Content-Type', 'text/html');
//         res.end(data);
//       }
//     });
//   } else {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello, World!");
//   }
// });

// server.listen(port, hostName, () => {
//   console.log(`Server is running on http://${hostName}:${port}`);
// });

//num 5

// const http = require("http");
// const axios = require('axios');
// const path = require('path');
// const hostName = "127.0.0.1";
// const port = 8080;

// const server = http.createServer((req, res) => {
//   if (req.url === "/file1") {
//     const filePath = path.join(__dirname, 'file1.txt');

//     fs.readFile(filePath,  (err, data) => {
//       if (err) {
//         res.statusCode = 500;
//         res.end('Internal Server Error');
//       } else {
//         res.setHeader('Content-Type', 'text/plain');
//         res.end(data);
//       }
//     });
//   } else if (req.url === "/file2") {
//     const filePath = path.join(__dirname, 'file2.txt');

//     fs.readFile(filePath,  (err, data) => {
//       if (err) {
//         res.statusCode = 500;
//         res.end('Internal Server Error');
//       } else {
//         res.setHeader('Content-Type', 'text/plain');
//         res.end(data);
//       }
//     });
//   } else {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello, World!");
//   }
// });

// server.listen(port, hostName, () => {
//   console.log(`Server is running on http://${hostName}:${port}`);
// });

//num 5

// const path = require("path");
// const filePath = path.join(__dirname, '/file1.txt');
// console.log(filePath);

//num 6
// const url1 = require("url")
// const exampleurl = "http://www.example.com:8080/path?query=value#fragment";
// const exampleparse = url1.parse(exampleurl);
// console.log(exampleparse)

//num 7
// const os = require("os")
// const home = os.homedir()
// console.log(home)
//or

// const os = require("os")
// console.log(os.homedir())

// num 8

// const crypto = require("crypto")
// const n = crypto.randomInt(0,10);
// console.log(n)

//num 9

// const hash = crypto.createHash('sha256' ,"Hello, World!").digest('hex');
// console.log(hash)

//num 10

// var querystring = require('querystring');
// var ParamsWithValue = querystring.parse("name=value&key=value2");
// console.log(ParamsWithValue);
//num 11

// const { exec } = require('child_process');

// const command = 'dir';

// exec(command, (error, stdout, stderr) => {

//   console.log(`Output:\n${stdout}`);

// });

//num 12

// const commandping = 'ping www.facebook.com';

// exec(commandping, (error, stdout, stderr) => {

//   console.log(`Output:\n${stdout}`);

// });

//num 13

// var cluster = require('cluster');

// if (cluster.isWorker) {
//   console.log('multiple processes running');
// } else {
//   console.log('I am a master');
//   cluster.fork();
//   cluster.fork();
// }

// num 14

// const dns = require("dns");
// dns.lookup('www.google.com', function (err, addresses, family) {
//   console.log(addresses);
// });

//num 15

const net = require("net");

const server = net.createServer((socket) => {
  console.log("Client connected.");

  socket.on("data", (data) => {
    console.log(`Received data from client: ${data}`);

    socket.write("Server response: Data received.");
  });

  socket.on("end", () => {
    console.log("Client disconnected.");
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`TCP server started on port ${port}`);
});

//num 16

const client = net.createConnection({ port: 3000 }, () => {
  console.log("Connected to TCP server.");

  // Send data to the server
  client.write("Hello, server!");
});

client.on("data", (data) => {
  console.log(`Received data from server: ${data}`);
});

client.on("end", () => {
  console.log("Disconnected from TCP server.");
});

client.on("error", (err) => {
  console.error(`Error with TCP client: ${err}`);
});
