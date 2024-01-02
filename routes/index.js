const getRouter = require("./getRout"); 
const postRouter = require("./postRout");

function handler(request, response) {
  switch (request.method) {
    case "GET":
      getRouter(request, response);
      break;
    case "POST":
      postRouter(request, response);
      break;
  }
}

module.exports = handler;
