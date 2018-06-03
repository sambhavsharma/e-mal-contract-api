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
  'get /activation-status': 'ContractController.get_activation_status',
  'post /activate': 'ContractController.activate',
  'post /deactivate': 'ContractController.deactivate',
  'post /set-token': 'ContractController.set_token',
  'post /set-owner': 'ContractController.set_owner',

  // Allocation Controller Routes
  'get /allocation/get-tokens': 'AllocationController.get_allocated_tokens',
  'post /allocation/allocate': 'AllocationController.allocate',
  'post /allocation/deduct': 'AllocationController.deduct',

  // Whitelist Controller Routes
};
