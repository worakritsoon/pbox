// users.js
var faker = require('faker');

function generateUsers () {
  let users = [];

  for (var id = 0; id < 50; id++) {
    
    var user = faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}");
    var imageurl = faker.image.image()

    users.push({
      "id": id,
      "user":user,
      "imageurl": imageurl
    });
  }

  return { "users": users };
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateUsers();