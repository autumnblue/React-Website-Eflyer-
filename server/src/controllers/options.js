var consts = require('../helpers/consts');

exports.getThemes = function (req, res, next) {
  res.json(consts.FLYER_THEMES);
};

exports.getFrontCovers = function (req, res, next) {
  res.json(consts.FLYER_FRONT_COVERS);
};

exports.getInsideCovers = function (req, res, next) {
  res.json(consts.FLYER_INSIDE_COVERS);
};
