const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})
//文本类型
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})
//json数据格式类型
router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/testAsync',async(ctx) =>{
  global.console.log('start',new Date().getTime())
  const a =await new Promise((resolve,reject) =>{
    setTimeout(function(){
      global.console.log('async a',new Date().getTime())
      resolve('a')
    },1000);
  })
  const b =await new Promise((resolve,reject) =>{
    setTimeout(function(){
      global.console.log('async a',new Date().getTime())
      resolve('b')
    },1000);
  })
  ctx.body ={
    a,
    b
  }
})




module.exports = router
