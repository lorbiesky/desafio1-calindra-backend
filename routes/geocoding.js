module.exports = (app) => {
  app.route('/geocoding').get(app.apis.geocoding.getGeocoding);
};
