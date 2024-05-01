const { RefPositions } = require('./refPositions.class');
const createModel = require('../../models/refPositions.model');
const hooks = require('./refPositions.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/refPositions', new RefPositions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('refPositions');

  service.hooks(hooks);
};