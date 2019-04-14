new Vue({
  el: '#tasks',
  data:{
    todos: todos
  },
  methods: {
    details: function (t) {
      alert(t.text+"\n"+t.path+"\n"+t.time);
    }
  }
});
// TODO: task in vue.js
new Vue({
  el: '#path',
  methods: {
    update: function () {
      d = document.getElementById('text');
      t = this.$refs.text.value;
      x = ''
      for (var i = 0; i < t.length; i++) {
        ch = t.charAt(i);
        if(ch=='\\')
          x +='\\';
        x +=ch;
        if(i==t.length-1 && ch!=="\\")
          x +='\\';
      }
      updateTasks(x);
    }
  }
});
