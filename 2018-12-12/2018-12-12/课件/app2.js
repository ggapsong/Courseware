//node做服务器 服务协议/服务环境

//引导服务模块 
let http=require('http');

//开启服务
let app=http.createServer((req,res)=>{
    //request 请求
    //response 响应

    //console.log('进来了');
    //响应数据
    res.write('<div>123<h1>666</h1></div>');
    res.end();

});

//监听端口
app.listen(8080);


