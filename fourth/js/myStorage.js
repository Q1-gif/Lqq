;(function(){
    window.msg={
        set:set,
        get:get,
    }
    function set(key,val){
        var json=localStorage.getItem(key);
        if(json){
            return JSON.parse(json);
        }
    }
})();