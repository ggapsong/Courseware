let express=require('express');

//路由
let router=express.Router();

let userArr=[
    {
        name:'aaa',
        pass:123
    },
    {
        name:'bbb',
        pass:456
    },
    {
        name:'ccc',
        pass:789
    }
];

//注册 
//localhost:8080/user/reg
router.get('/reg-get',(req,res)=>{
    //req.query 获取get数据
    console.log();

    //获取数据方式 req.query
    let obj=req.query;
    let resData={code:0,msg:""};

    if(obj.name=='' || obj.pass==''){
        resData.code=1;
        resData.msg="账户或密码为空";
    }else{
        let o = userArr.find(e=>e.name==obj.name);
        if(o){
            resData.code=2;
            resData.msg="用户已存在";
        }else{
            userArr.push({
                name:obj.name,
                pass:obj.pass
            });
            resData.code=0;
            resData.msg="注册成功";
        }

    }
    res.send(resData);
})

//post register
router.post('/reg',(req,res)=>{
    let obj=req.body;
    let resData={code:0,msg:""};
    if(obj.name=='' || obj.pass==''){
        resData.code=1;
        resData.msg="账户或密码为空";
    }else{
        let o = userArr.find(e=>e.name==obj.name);
        if(o){
            resData.code=2;
            resData.msg="用户已存在";
        }else{
            userArr.push({
                name:obj.name,
                pass:obj.pass
            });
            resData.code=0;
            resData.msg="注册成功";
        }
    }
    res.send(resData);
})

//登录
router.post('/login',(req,res)=>{
    let obj=req.body;
    let resData={code:0,msg:""};
    if(obj.name=='' || obj.pass==''){
        resData.code=1;
        resData.msg="账户或密码为空";
    }else{
        let o = userArr.find(e=>e.name==obj.name);
        if(o){
            if(o.pass==obj.pass){
                resData.code=0;
                resData.msg="登录成功";

                //存入cookie
                res.cookie('name',o.name);

            }else{
                resData.code=2;
                resData.msg="账号或密码错误";
            }
        }else{
            resData.code=3;
            resData.msg="账号不存在";
        }
    }
    res.send(resData);
})

//退出登录
router.get('/logout',(req,res)=>{
    //删除cookie
    res.cookie('name','');
    res.send('{"code":0,"msg":"退出成功"}');
});

//导出模块
module.exports = router;

