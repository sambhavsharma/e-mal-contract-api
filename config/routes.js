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
  'get /ether-invested': 'ContractController.get_total_ether_invested',
  'get /ether-invested/:investor_addr': 'ContractController.get_ether_invested',
  'get /activation-status': 'ContractController.get_activation_status',
  'post /activate': 'ContractController.activate',
  'post /deactivate': 'ContractController.deactivate',
  'post /set-token': 'ContractController.set_token',
  'post /set-owner': 'ContractController.set_owner',

  // Allocation Controller Routes
  'get /allocation/get-tokens': 'AllocationController.get_total_allocated_tokens',
  'get /allocation/get-tokens/:investor_addr': 'AllocationController.get_allocated_tokens',
  'post /allocation/allocate': 'AllocationController.allocate',
  'post /allocation/deduct': 'AllocationController.deduct',

  // Whitelist Controller Routes
  'get /whitelist/check/:investor_addr': 'WhitelistController.check',
  'post /whitelist/add': 'WhitelistController.add',
  'post /whitelist/remove': 'WhitelistController.remove',

  /***************************/
  /****** Public Sale ********/
  /***************************/

  // Contract Controller Routes
  'get /publicsale/ether-invested': 'publicsale/ContractController.get_total_ether_invested',
  'get /publicsale/ether-invested/:investor_addr': 'publicsale/ContractController.get_ether_invested',
  'get /publicsale/activation-status': 'publicsale/ContractController.get_activation_status',
  'post /publicsale/activate': 'publicsale/ContractController.activate',
  'post /publicsale/deactivate': 'publicsale/ContractController.deactivate',
  'post /publicsale/set-token': 'publicsale/ContractController.set_token',
  'post /publicsale/set-owner': 'publicsale/ContractController.set_owner',

  // Allocation Controller Routes
  'get /publicsale/allocation/get-tokens': 'publicsale/AllocationController.get_total_allocated_tokens',
  'get /publicsale/allocation/get-tokens/:investor_addr': 'publicsale/AllocationController.get_allocated_tokens',
  'post /publicsale/allocation/allocate': 'publicsale/AllocationController.allocate',
  'post /publicsale/allocation/deduct': 'publicsale/AllocationController.deduct',

  // Whitelist Controller Routes
  'get /publicsale/whitelist/check/:investor_addr': 'publicsale/WhitelistController.check',
  'post /publicsale/whitelist/add': 'publicsale/WhitelistController.add',
  'post /publicsale/whitelist/remove': 'publicsale/WhitelistController.remove'
};
