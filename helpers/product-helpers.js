const { Collection } = require('mongodb')
var db = require('../config/connection')
var collection =require('../config/collections')




module.exports={
     addProduct :(product,callback)=>{

        db.get().collection('water').insertOne(product).then((data)=>{
          
          // callback(data.ops[0]._id)
          callback(data.insertedId)
        })

     },
     getAllProducts :()=>{
      return  new Promise(async(resolve,reject)=>{
      let products =await db.get().collection('water').find().toArray()
      resolve(products)
     })















     }

}