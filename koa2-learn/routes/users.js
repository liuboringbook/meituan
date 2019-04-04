const router = require('koa-router')()
const Person =require('../dbs/modules/person')



router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.post('/addPerson',async function(ctx){
  const person =new Person({
    name: ctx.request.body.name,
    age:ctx.request.body.age
  })
  await  person.save()
  ctx.body ={
    code: 0
  }
})

module.exports = router
