var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
    console.log('------------------------------------------------');
    console.log(products);
    
    res.render('admin/view-product',{products,admin:true});

  })

});

router.get('/add-product', function(req, res, next) {

  res.render('admin/add-product')

})

router.post('/add-product', function(req, res, next) {

  console.log(req.body);
  // console.log(req.files.Image);
  productHelpers.addProduct(req.body,(id)=>{
    let image = req.files.Image
    // image.mv('../public/product-images/'+id+'.jpg',(err,done)=>{
    //   if(!err){
    //     res.render("admin/add-product")

    //   }
    // })
    res.redirect("/admin/add-product")
  })



})



module.exports = router;
