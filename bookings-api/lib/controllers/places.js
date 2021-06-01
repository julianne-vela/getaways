const { Router } = require('express');

const Place = require('../models/Place');

module.exports = Router()
  .get('/', async (req, res, next) => {
    const count = await Place.countDocuments();
    const { page, perPage } = req.query;

    const places = await Place.find()
      .limit(perPage * 1)
      .skip((page - 1) * perPage)
      .exec();

    res.json({
      perPage,
      totalPages: Math.ceil(count / perPage),
      places,
    });
  })
  .get('/:id', async (req, res, next) => {
    const place = await Place.findOne({ _id: req.params.id });
    res.json(place);
  });
