var express = require('express');
var router = express.Router();
const productHelpers = require('../helpers/product-helpers');
const userHelpers = require('../helpers/user-helpers');

/* GET home page. */
router.get('/', function(req, res, next) {

  productHelpers.getAllProducts().then((products)=>{
    console.log('------------------------------------------------');
    console.log(products);
    
    res.render('user/view-products',{products});

  })

});

router.get('/user-login',(req,res)=>{
  res.render('user/user-login')
})

router.get('/signup',(req,res)=>{
  res.render('user/signup')
})

router.post('/signup',(req,res)=>{

  userHelpers.doSignUp(req.body).then((response)=>{
    console.log(response);
   

  })

})

router.post('/user-login',(req,res)=>{
 
  userHelpers.doLogin(req.body);
   
})

module.exports = router;
