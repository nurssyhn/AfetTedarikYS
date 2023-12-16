const express=require("express")
const router=express.Router()

const soforlerController=require("../controllers/soforlerController")


router.post("/sofor",soforlerController.createSofor)
router.get("/sofor",soforlerController.getSofor)
router.get("/getsoforler/:plaka",soforlerController.getSoforByPlaka)



module.exports=router