//node做服务器 服务协议/服务环境

//引导服务模块 
let http=require('http');

//读取文件模块
let fs =require('fs');

//开启服务
let app=http.createServer((req,res)=>{
    //request 请求
    //response 响应

    //console.log(req.url);
    let path='./views';

    //读取文件
    fs.readFile(path+req.url,(err,data)=>{
        if(err){
            fs.readFile(path+'404.html',(err,data)=>{
                res.write(data);
                res.end();
            })
        }else{
            res.write(data);
            res.end();
        }
    });


});

//监听端口
app.listen(8080);


