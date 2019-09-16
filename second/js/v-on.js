var app = new Vue({
    el:"#app",
   methods:{
       onClick:function(){
           console.log("点击成功！");
       },
       onEnter:function(){
           console.log("移动进来了!");
       },
       onOut:function(){
           console.log("我出来了！");
       },
       onSubmit:function(){
           console.log("提交成功");
       },
       onKeyUp:function(){
           console.log("键盘点击成功");
       },
       onKeyEnter:function(){
           console.log("点击回车成功");
       }


   }
})