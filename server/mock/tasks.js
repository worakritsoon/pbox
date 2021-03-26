
var faker = require('faker');

function generateTasks () {
  let tasks = [];

  for (var id = 0; id < 50; id++) {
    
    var title = faker.name.jobTitle();
    var usercard = faker.helpers.userCard();
    var description = faker.lorem.paragraph();

    tasks.push({
      "id": id,
      "title":title,
      "usercard":usercard,
      "description":description
    });
  }

  return { "tasks": tasks };
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateTasks();