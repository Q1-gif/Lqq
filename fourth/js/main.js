;(function(){
    'use strick';
    function copy(obj){
        return Object.assign({},obj);
    }
    new Vue({
        el:'#main',
        data:{
            list:[],
            current:{}
        },
        mounted: function(){
            this.list=msg.get('list')||this.list;
        },
        methods:{
            add:function(){
                var is_update,id;
                var is_update =id =this.current.id;
                if(is_update){
                    var index=this.find_index(id);
                    Vue.set(this.list,index,copy(this.current));
                    console.log('this.list:',this.list);
                }else{
                    var title=this.current;
                    if(!title && title !==0)return;
                    var tode=copy(this.current);
                    tode.id=this.next_id();
                    this.list.push(tode);
                    console.log('this.list:',this.list);
                }
                this.reset_current();
            },
            remove:function(id){
                var index=this.find_index(id);
                this.list.splice(index,1);
            },
            next_id:function(){
                return this.list.length +1;
            },
            set_current:function(tode){
                this.current=copy(tode);
            },
            reset_current:function(){
                this.set_current({});
            },
            find_index:function(id){
                return this.list.findIndex(function(item){
                    return item.id=id;
                })
            }
        },
        watch:{
            list:{
                deep:true,
                handler:function(new_val,old_val){
                    if(new_val){
                        msg.set('list',new_val);
                    }else{
                        msg.set('list',[]);
                    }
                }
            }
        }
    });
})();