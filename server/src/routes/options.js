var authHelper = require('../helpers/auth-helper');
var optionsController = require('../controllers/options');

module.exports = function (router) {

  router.route('/options/cover-images')
    .get(authHelper.checkAuth(), optionsController.getCoverImages);
  router.route('/options/interior-images')
    .get(authHelper.checkAuth(), optionsController.getInteriorImages);
  router.route('/options/color-selections')
    .get(authHelper.checkAuth(), optionsController.getColorSelections);

};
