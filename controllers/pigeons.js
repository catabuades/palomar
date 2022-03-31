const Pigeon = require('../models/Pigeon');
const ErrorResponse = require('../utils/errorResponse');

exports.getAllPigeons = (req, res, next) => {
  Pigeon.find()
    .then((pigeons) =>
      res.status(200).json({
        success: true,
        movies: pigeons,
      })
    )
    .catch((error) => next(error));
};

exports.searchByRing = (req, res, next) => {
  const ringDecode = decodeURIComponent(req.query.ring)
  Pigeon.find({ ring: ringDecode })
  .then((pigeon) =>
    res.status(200).json({
      success: true,
      pigeon: pigeon,
    })
  )
  .catch((error) => {
    next(error)
  });
}


