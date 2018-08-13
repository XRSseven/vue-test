//实例化vue对象
Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    ',
    props: ['title']
  })
  
  new Vue({
    el: '#todo-list-example',
    data: {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  })
/* v-for */
/* var vm = new Vue({
    el: '#example-1',
    data: {
        items: [{
                message: 'Foo'
            },
            {
                message: 'Bar'
            }
        ]
    },
    methods: {

    },
    computed: {

    }
}) */
/* v-if条件 */
/* var vm = new Vue({
    el:"#vue-app",
    data:{
        error:false,
        success:false

    },
    methods:{

    },
    computed:{

    }
}) */
 /* vue-动态绑定css样式 */ 
 /* var vm = new Vue({
     el:"#vue-app",
     data:{
         changeColor:false,
         changeLength:false
     },
     methods: {
         
     },
     computed:{
         compClasses: function(){
             return{
                 changeColor:this.changeColor,
                 changeLength:this.changeLength
             }
         }
     }
 }) */
/* 计算属性compute */
   /*  new Vue ({
        el:"#vue-app",
        data:{
            a:0,
            b:0,
            age:20
        },
        methods:{
        //   AddtoA:function(){
        //         return this.a + this.age;
        //     },
        //     AddtoB:function(){
        //         return this.b + this.age;
        //     } 
        },
        computed:{
            AddtoA:function(){
                console.log("add to a");
                return this.a + this.age;
            },
            AddtoB:function(){
                console.log("add to b");
                return this.b + this.age;
            }
        }
    }) */
/*  键盘事件 */
/* 数据的双向绑定 */
  /*var vm = new Vue({
        el:"#vue-app",
        data:{
            name:"hello",
            age:""
        },
        methods:{
            logName:function(){
                // console.log("你正在输入名字！");
                // this.name = this.$refs.name.value; 
            },
            logAge:function(){
                // console.log("你正在输入年龄！");
                // this.age = this.$refs.age.value; 
            }

        }
    })  */
    /* 鼠标点击事件 */
/* var vm =  new Vue({
    el:"#event",
    data:{
        age:30,
        X:0,
        Y:0
    },
    methods:{
        add:function(inc){
            this.age += inc;

        },
        subtract:function(dec){
            this.age -= dec;
        },
        updatedXY: function(event){
            this.X = event.offsetX;
            this.Y = event.offsetY;
        },
        alert:function(){
           alert("hello World1!");
        },
       /*  stop:function (event) {
            event.stopPropagation();

          } */
 //   }
    
// }) */

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

/*Vue.component('todo-item', {
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
  })*/
//   var obj = {
//    foo: 'bar'
//   }
  
//   Object.freeze(obj)
  
//   new Vue({
//     el: '#app',
//     data: obj
//   })
/* var vm = new Vue({
    el:'#example',
    data:{
        message:'Hello'
    },
    computed:{
        reversedMessage: function() {
           return this.message.split('').reverse().join('')
        }
    }
})
 */
/* var vm = new Vue ({
    el:"#demo",
data :{
    firstName:'Foo',
    lastName:'Bar'
},
computed:{
    fullName: {
        get : function () {
        return this.firstName +' '+ this.lastName
    },
        set : function  (newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length -1]
        }
} 
}
/* computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  } */
//})
