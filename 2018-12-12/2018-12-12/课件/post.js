let http=require('http');
let fs=require('fs');

let userArr=[
    {
        name:'aaa',
        pass:123
    },
    {
        name:'bbb',
        pass:123
    },
    {
        name:'ccc',
        pass:123
    }
]

let app=http.createServer((req,res)=>{

    let Url=req.url;
    let path='./views';
    if(Url.includes('/api')){
        
        if(Url.includes('/getUserList')){

            console.log(666);
            //请求用户列表
            res.write(JSON.stringify(userArr));
            res.end();

            return;
        }

        //数据请求
        //post方式 
        let str='';
        //数据存储过程
        req.on('data',(data)=>{
            str+=data;
        })
        //数据全部获取完成 最后执行（只执行一次）
        req.on('end',()=>{
            let data = JSON.parse(str);

            //验证账号密码是否为空
            if(data.name == '' || data.pass == ''){
                res.write('{"code":1,"msg":"账号或密码为空"}')
                res.end();
            }else{
                let o=userArr.find(e=>e.name==data.name);
                if(o){
                    res.write('{"code":2,"msg":"账号已被占用"}')
                    res.end();
                }else{
                    userArr.push({
                        name:data.name,
                        pass:data.pass
                    });
                    res.write('{"code":0,"msg":"注册成功"}')
                    res.end();
                }
            }
        })


    }else{
        //只需要传递路径
       try{
        let data=fs.readFileSync(path+Url);
        res.write(data);
        res.end();
       }catch(e){
        let data=fs.readFileSync(path+'/404.html');
        res.write(data);
        res.end(); 
       }
    }

});

app.listen(8080);

