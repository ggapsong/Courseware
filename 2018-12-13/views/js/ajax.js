function ajax(
        {data={},type='get',url=null,success=()=>{}}
    ){
        if(!url){ alert('请传入url'); return}
        let ajax=new XMLHttpRequest;

        //name=123&pass=456
        let str='';
        for(item in data){
            str+=item +'='+ data[item]+'&'
        }
        str=str.substring(0,str.length-1);
        if(type=='get'){
            //api/addUser?name=123&pass=566
            ajax.open(type,url+'?'+str); 
            ajax.send();
        }else{
            ajax.open(type,url);
            //请求头
            ajax.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            ajax.send(str);
        }
        ajax.onload=function(){
            success(ajax.responseText);
        }
    }
