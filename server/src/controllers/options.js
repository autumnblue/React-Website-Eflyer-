var consts = require('../helpers/consts');

exports.getCoverImages = function (req, res, next) {
  res.json(consts.FLYER_COVER_IMAGES);
};

exports.getInteriorImages = function (req, res, next) {
  res.json(consts.FLYER_INTERIOR_IMAGES);
};

exports.getColorSelections = function (req, res, next) {
  res.json(consts.FLYER_COLORS_SELECTIONS);
};
