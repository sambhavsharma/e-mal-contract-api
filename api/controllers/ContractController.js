/**
 * ContractController.js
 *
 * @description :: Server-side controller action for manging the contract itself.
 */
module.exports = {

    // Get activation status for presale
    get_activation_status: function(req, res){
        activation_status = Web3Service.eMalPresale.presaleActive();
        return res.status(200).json({status: 'success', activation_status: activation_status});
    },

    // Activate Presale
    activate: function(req, res){
        Web3Service.eMalPresale.activatePresale.sendTransaction();
        return res.status(200).json({status: 'success'});
    },

    // Deactivate Presale
    deactivate: function(req, res){
        Web3Service.eMalPresale.deactivatePresale.sendTransaction();
        return res.status(200).json({status: 'success' });
    },

    // Set Emal Token Contract
    set_token: function(req, res){
        Web3Service.eMalPresale.setToken.sendTransaction(req.param("token_addr"));
        return res.status(200).json({status: 'success'});
    },

    // Set the owner of the Contract
    set_owner: function(req, res){
        Web3Service.eMalPresale.setToken.sendTransaction(req.param("owner_addr"));
        return res.status(200).json({status: 'success'});
    }

}