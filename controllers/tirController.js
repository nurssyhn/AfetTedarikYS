const express = require('express');
const tirModel = require('../models/tir');
const asyncHandler = require('express-async-handler');

exports.createTir = asyncHandler(async (req, res) => {
    const { malzemeler, adetler, plaka } = req.body;
    console.log(malzemeler, adetler, plaka);
    const tir = await tirModel.create({ malzemeler, adetler, plaka });
    res.status(201).json(tir);
}
);


exports.getTirlar= asyncHandler(async (req, res) => {
    const tirlar = await tirModel.find({});
    res.json(tirlar);
}
)



//exports.getTirByplaka= asyncHandler(async (req, res) => {
  //  const tir = await tirModel.findById(req.params.id);
   // if (tir) {
     //   res.json(tir);
   // } else {
     //   res.status(404);
       // throw new Error('Tir bulunamadı');
  //  }
//})


exports.getTirByPlaka=asyncHandler(async (req,res)=>{

    const tir = await tirModel.findOne({ plaka: req.params.plaka });
    
    if (tir) {
        res.json(tir);
    } else {
        res.status(404);
        throw new Error('Tir bulunamadı');
    }
})
