/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'get /': 'AppController.index',

  // Contract Controller Routes
  'post /activate': 'ContractController.activate',
  'post /deactivate': 'ContractController.deactivate',
  'post /set-token': 'ContractController.set_token',
  'post /set-owner': 'ContractController.set_owner',
};
