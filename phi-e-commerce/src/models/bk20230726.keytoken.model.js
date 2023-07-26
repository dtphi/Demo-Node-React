'use strict'

 const { Schema, model } = require('mongoose') // Erase if already required

 const DOCUMENT_NAME = 'Key'
 const COLLECTION_NAME = 'Keys'

// Declare the Schema of the Mongo model
var keyTokenSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref: 'Shop'
    },
    privateKey:{
        type:String,
        required:true
    },
    publicKey:{
        type:String,
        required:true
    },
    // Detect hacker attacks.
    refreshToken:{
        type:Array,
        default:[]
    },
}, {
    collection: COLLECTION_NAME,
    timestamps: true,
});

//Export the model
module.exports = model(DOCUMENT_NAME, keyTokenSchema)