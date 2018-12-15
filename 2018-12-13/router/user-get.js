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
        pass:123
    },
    {
        name:'ccc',
        pass:123
    }
];

//注册 
//localhost:8080/user/reg
router.get('/reg',(req,res)=>{
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

//导出模块
module.exports = router;

