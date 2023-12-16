const moongose=require('mongoose')

const tirSchema=moongose.Schema(
    {
        malzemeler:{
            type:Array,
            required:true        
        },
        adetler:{
            type:Array,
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

module.exports=moongose.model("Tir",tirSchema)

