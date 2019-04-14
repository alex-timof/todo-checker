coreFolder = ""
// TODO: task in model.js
const fs = require('fs');
var todos = [];
var test = ""
const re = new RegExp('.*todo?:\s*([^\n\r]*)','i');

function updateTasks(pathName = coreFolder+'\\'){
  var files = fs.readdirSync(pathName);
  files.forEach((fileName)=>{
    try {
        var fileText = fs.readFileSync(pathName+fileName,'utf8')
        var sentence = fileText.split("\n");
        sentence.forEach((value)=>{
          search = value.match(re);
          if(search!==null){
            createTask(search[1], fs.statSync(pathName+fileName)['birthtime'], pathName+fileName);
          }
        });
    }catch(err) {
      if(fileName!=='node_modules' && fileName!=='.git'){
        updateTasks(pathName+fileName+"\\");
      }
    }
  });

}

function createTask(text, date, path){
  todos.push({text: text, time:date, path:path});
}
