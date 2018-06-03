/**
 * WhitelistController.js
 *
 * @description :: Server-side controller action for manging the address whitelisting.
 */
module.exports = {

    // Check whitelist status of an address
    check: function(req, res){
        whitelist_status = Web3Service.eMalPresale.isWhitelisted(req.param('investor_addr'));
        return res.status(200).json({status: 'success', whitelist_status: whitelist_status});
    },

    // Add address to whitelist
    add: function(req, res){
        Web3Service.eMalPresale.addToWhitelist
            .sendTransaction(req.param("investor_addr"));
        return res.status(200).json({status: 'success'});
    },

    // remove address from whitelist
    remove: function(req, res){
        Web3Service.eMalPresale.removeFromWhitelist
            .sendTransaction(req.param("investor_addr"));
        return res.status(200).json({status: 'success' });
    }
}