new Vue({
  // TODO: one more time
  el: '#tasks',
  data:{
    todos: todos,
    currentSort:'',
    currentSortDir:'asc',
    pageSize:5,
    currentPage:1,
    search: '',
    options:[
      {value:"text"},
      {value:"author"},
      {value:"date"},
    ],
    selected:'text'
  },
  methods: {
    details: function (t) {
      alert(t.importanse +" - "+ t.text+"\n"+t.path+"\n"+t.author+"\n"+t.time);
    },
    sort:function(s) {
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
    },
    nextPage:function() {
      if((this.currentPage*this.pageSize) < this.todos.length) this.currentPage++;
    },
    prevPage:function() {
      if(this.currentPage > 1) this.currentPage--;
    }
  },
  computed:{
    sorted:function() {
      return this.todos.filter((row) => {
        if(this.search=='')       //i don't know you value key.. so just picking first property
          return String(row[this.selected]).indexOf(' ');
        else
          return String(row[this.selected]).indexOf(this.search)>=0;
      }).sort((a,b) => {
    		let modifier = 1;
    		if(this.currentSortDir === 'desc') modifier = -1;
    		if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
    		if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
    		return 0;
    	}).filter((row, index) => {
    		let start = (this.currentPage-1)*this.pageSize;
    		let end = this.currentPage*this.pageSize;
    		if(index >= start && index < end) return true;
    	})
    }
  },
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
