const express = require('express');
const tirModel = require('../models/tir');
const IstekModel = require('../models/istekler');

const asyncHandler = require('express-async-handler');

exports.createIstek = asyncHandler(async (req, res) => {
    const { istekmalzeme,istekadet,önem } = req.body;
    console.log(istekmalzeme,istekadet,önem);
    const istek = await IstekModel.create({ istekmalzeme,istekadet,önem });
    res.status(201).json(istek);
}
);


exports.getIstek= asyncHandler(async (req, res) => {
    const istekler = await IstekModel.find({});
    res.json(istekler);
}
)

