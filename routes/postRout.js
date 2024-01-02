const formidable = require("formidable"); 

let users = {};
function flattenObject(obj) {
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key].length > 0) {
      result[key] = obj[key][0];
    }
  }
  return result;
}

function postRouter(req, res) {
  let form = new formidable.IncomingForm();

  switch (req.url) {
    case "/api/student/add":
      form.parse(req, (err, fields) => {
        if (err) {
          res.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
          res.end(err.message);
          return;
        }
        console.log(fields);


        const flattenFields = flattenObject(fields);

        const { username, ...userData } = flattenFields;


        if (flattenFields && username && !users.hasOwnProperty(username)) {
          users[username] = userData;


          res.writeHead(301, { Location: `/` });
          res.end();
        } else {
          res.writeHead(409, { "Content-Type": "text/html; charset=utf-8" });
          res.end(`<h1>Пользователь ${username} уже существует</h1>`);
        }

        console.log(users);
        console.log("\n================================\n");
      });
      break;
  }
}

module.exports = postRouter;
