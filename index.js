Vue.component('todo-item',{
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

var app2 = new Vue({
  el: '#app',
  filters : {
    strip : function(value){
      if(!value) return ''
      
      return value.split('http://')[1]
    }
  },
  data: {
    todos: [
      { id : 0, text : "JS"},
      { id : 1, text : "Java"},
      { id : 2, text : "Python"}
    ],
    url : 'http://google.com'
  }
  /*methods: {
    reverseMessage : function(){
      this.message = this.message.split('').reverse().join('')
    }
  }*/
})
