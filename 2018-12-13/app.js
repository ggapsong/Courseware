//升级
//express 安装

//导入express模块
let express=require('express');

//创建服务
let app=express();

//body-parser
let bodyparser= require('body-parser');

//cookie-parser
let cookie=require('cookie-parser');

//模板引擎nunjucks.js
let nunjucks=require('nunjucks');

//配置模板引擎适用范围
nunjucks.configure('views',{ 
    autoescape: true, 
    express:app 
})


//配置POST数据解析
let encode = bodyparser.urlencoded({extended:false});

//将编码解析加入到中间件当中
app.use(encode);

//使用cookie
app.use(cookie());

//获取
// app.get('/',(req,res)=>{
//    // console.log(123);

//    //console.log(req.url,666)

//    //响应数据
//   // res.send('');
// })


app.use('/user',require('./router/user'))
app.use('/news',require('./router/news'))

//处理模板的路由
app.use('/',require('./router/template'));




//静态文件管理 确定静态文件存放位置
app.use(express.static('./views'))

//处理404路径
app.use((req,res,next)=>{
    res.render('404.html');
    next();
});

//监听端口
app.listen(8080);



