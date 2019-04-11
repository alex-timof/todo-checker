todos = [
  { text: 'Learn JavaScript', value: '3', time: "None" , n: "false"},
  { text: 'Learn Vue', value: '1', time: "None", n: "false" },
  { text: 'Build something awesome', value: '4', time: "None", n: "false" },
]


createTask("test")
createTask("test")
createTask("test1","false")
createTask("test")
createTask("test")


function createTask(text, n = "true", date = new Date(), value=null){
  todos.push({text: text, value: null, time:date, n: n});
  //setNewTag(text);
}
