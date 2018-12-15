let express=require('express');

//路由
let router=express.Router();

router.get('/newList',(req,res)=>{
   res.send('666');
})

//导出模块
module.exports = router;

