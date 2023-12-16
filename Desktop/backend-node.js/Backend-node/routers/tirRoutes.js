const express=require("express")
const router=express.Router()

const tirController=require("../controllers/tirController")


router.post("/tir",tirController.createTir)

router.get("/getTirlar",tirController.getTirlar)

router.get("/getTir/:plaka",tirController.getTirByPlaka)


module.exports=router