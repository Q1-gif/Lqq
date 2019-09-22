var app=new Vue({
    el:'#app',
    data:{
        math:90,
        physics:85,
        english:90,
        language:88,
    },
    computed:{
        sum:function(){
            return this.math+this.physics+this.english+this.language;
        },
        average:function(){
            return Math.round(this.sum/4)
        }
    }
})