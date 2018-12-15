//node做服务器 服务协议/服务环境

//引导服务模块 
let http=require('http');

//读取文件模块
let fs =require('fs');


//arr
let arr=[
    {
        title:'这是一条大新闻',
        href:'http://www.baidu.com',
        id:1,
        time:'12.12'
    },
    {
        title:'这是2条大新闻',
        href:'http://www.baidu.com',
        id:1,
        time:'12.11'
    },
    {
        title:'这是3条大新闻',
        href:'http://www.baidu.com',
        id:1,
        time:'12.10'
    }
];


//开启服务
let app=http.createServer((req,res)=>{
    //request 请求
    //response 响应

    console.log(req.url);
    let Url=req.url;
    let path='./views';
    
    //规则  什么请求路径是请求数据的？ 
    //      什么请求路径 是请求页面的 ？
    // /api 要数据
        //get
        //post
    // /views 要页面
   // console.log();
   if(Url !='/favicon.ico'){
    let isGet=Url.includes('/api');
        if(isGet){
            //console.log('要数据了');
            res.write('{code:0,msg:"获取成功"}');
            res.end();

        }else{
            //读取文件
            fs.readFile(path+req.url,(err,data)=>{
                res.write(data);
                res.end();
            });
        }
    }

});

//监听端口
app.listen(8080);


