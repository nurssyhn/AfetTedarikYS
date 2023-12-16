const express = require('express');
const soforModel = require('../models/soforler');


const asyncHandler = require('express-async-handler');
const soforler = require('../models/soforler');

exports.createSofor = asyncHandler(async (req, res) => {
    const { sofor,plaka } = req.body;
    console.log(sofor,plaka);
    const soffor = await soforModel.create({ sofor,plaka });
    res.status(201).json(soffor);
}
);


exports.getSofor= asyncHandler(async (req, res) => {
    const soforler = await soforModel.find({});
    res.json(soforler);
}
)



exports.getSoforByPlaka=asyncHandler(async (req,res)=>{

    const sofor = await soforModel.findOne({ plaka: req.params.plaka });
    
    if (sofor) {
        res.json(sofor);
    } else {
        res.status(404);
        throw new Error('Aranan Söför bulunamadı');
    }
})