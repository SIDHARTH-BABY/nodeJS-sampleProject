var db = require('../config/connection')

const bcrypt=require('bcrypt')
const collections = require('../config/collections')
const { Collection } = require('mongodb')
let objectid = require('mongodb').ObjectId

module.exports ={
    doSignUp:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            userData.Password=await bcrypt.hash(userData.Password,10);
            db.get().collection(collections.USER_collection).insertOne(userData).then((data)=>{
                resolve(data)
            })
        })
    },
    doLogin:(userData)=>{
        console.log(userData);
      
        return new Promise(async(resolve,reject)=>{
        var loginStatus = false
        let response={}
        var user = await db.get().collection(collections.USER_collection).findOne({Email:userData.Email})
        
        if(user){
            bcrypt.compare(userData.Password,user.Password).then((status)=>{
                if(status){
                    console.log("login success");
                }else{
                    console.log("login failed");

                }
            })
        }else{
            console.log("login failed");
        }

    })


}
}