let express=require('express');

//路由
let router=express.Router();

router.get('/',(req,res)=>{
   res.render('index.html',{
      name:req.cookies.name
   })
})

//导出模块
module.exports = router;

