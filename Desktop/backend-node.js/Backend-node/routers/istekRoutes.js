const express=require("express")
const router=express.Router()

const isteklerController=require("../controllers/isteklerController")


router.post("/istekler",isteklerController.createIstek)

router.get("/getistekler",isteklerController.getIstek)



module.exports=router