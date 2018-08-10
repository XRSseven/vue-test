//实例化vue对象 
 /*new Vue({
    el:"vue-app",//需要获取的元素
    data:{
        name:"徐荣霜" 
    }//用于数据存储
});*/
/*var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })*/
 /*var app = new Vue({
    el:"#app",//需要获取的元素，一定是html的根容器元素
    data:{
        name:"Jenny！" ,
        job:"webk开发!",
        webseit:"http:www.baidu.com",
        webseiteTag:"<a href='http://www.baidu.com'>baidu</a>"
        
    },//用于数据存储
    //data-binding:给属性绑定对应的值
    methods:{
        greet:function(time){
            return "Good " + time + ""+ this.name +"!";
        }
    }
});//用于存储各种方法*/
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其它什么人吃的东西' }
      ]
    }
  })