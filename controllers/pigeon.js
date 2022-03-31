const Pigeon = require('../models/Pigeon');
const ErrorResponse = require('../utils/errorResponse');

exports.getPigeonByRing = (req, res, next) => {
  Pigeon.find({ ring : req.params.ring })
    .then((pigeon) =>
      res.status(200).json({
        success: true,
        pigeon: pigeon,
      })
    )
  .catch((error) => next(error));
}

