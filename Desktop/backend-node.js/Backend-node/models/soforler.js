const mongoose = require('mongoose')

const soforlerSchema = mongoose.Schema(
    {
        sofor:{
            type:String,
            required:true
        },
        plaka:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

module.exports=mongoose.model("sofor",soforlerSchema)