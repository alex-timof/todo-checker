coreFolder = ""
// TODO: task in model.js
const fs = require('fs');
var todos = [];
var test = ""
const re = new RegExp('.*todo?:\s*([^\n\r]*)','i');

for (var i = 0; i < 25; i++) {
  createTask("task"+i, "/.", "somebody", (i%2==0)?"!":"",Math.log((i+1)^2));
}

function updateTasks(pathName = coreFolder+'\\'){
  var files = fs.readdirSync(pathName);
  files.forEach((fileName)=>{
    try {
        var fileText = fs.readFileSync(pathName+fileName,'utf8')
        var sentence = fileText.split("\n");
        sentence.forEach((value)=>{
          search = value.match(re);
          if(search!==null){
            createTask(search[1], pathName+fileName);
          }
        });
    }catch(err) {
      if(fileName!=='node_modules' && fileName!=='.git'){
        updateTasks(pathName+fileName+"\\");
      }
    }
  });

}

function createTask(text, path, author="admin", imp=" ", date=" "){
  todos.push({importanse:imp, text: text, date:date, path:path, author: author});
}
 // TODO: test
