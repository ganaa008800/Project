const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { headers, url, method } = req;

  res.setHeader("content-type", "text/html");

  if (url === "/") {
    fs.readFile("./src/index.html", "utf8", (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.write("<h1>Error!</h1>");
        res.end();
      } else {
        res.statusCode = 200;
        res.write(data);
        res.end();
      }
    });
  } else if (url === "/login") {
    // Login form html butsaana
    fs.readFile("./src/login.html", "utf8", (error, data) => {
      res.statusCode = 200;
      res.write(data);
      res.end();
    });
  } else if (url === "/logincheck" && method === "POST") {
    // login hiisnii daraa usreh heseg
    // DATA ===> CHUNK1 ===> CHUNK2 ===> CHUNK3
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const password = parsedBody.split("=")[2];
      if (password === "456") {
        // login successful
        res.statusCode = 302;
        res.setHeader("Location", "./home");
        res.end();
      } else {
        //login failed
        res.statusCode = 302;
        res.setHeader("Location", "./error");
        res.end();
      }
      // console.log("password =========>", password);
      // fs.writeFileSync("logininfo.txt", parsedBody);
      // res.write("za huleej avlaa");
      // res.end();
    });
  } else if (url === "/home") {
    // login hiisnii daraa usreh heseg
    fs.readFile("./src/home.html", "utf8", (error, data) => {
      res.statusCode = 200;
      res.write(data);
      res.end();
    });
  } else if (url === "/error") {
    // login hiisnii daraa usreh heseg
    fs.readFile("./src/error.html", "utf8", (error, data) => {
      res.statusCode = 200;
      res.write(data);
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.write("<h1>404 not found</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("http сэрвэр 5000 порт дээр аслаа...");
});
