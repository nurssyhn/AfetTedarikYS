const mongoose = require('mongoose')

const isteklerSchema = mongoose.Schema(
    {
        istekmalzeme:{
            type:String,
            required:true
        },
        istekadet:{
            type:Number,
            required:true
        },
        önem:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

module.exports=mongoose.model("istekler",isteklerSchema)