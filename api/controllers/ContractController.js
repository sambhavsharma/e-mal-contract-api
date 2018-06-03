/**
 * ContractController.js
 *
 * @description :: Server-side controller action for manging the contract itself.
 */
module.exports = {

    // Activate Presale
    activate: function(req, res){
        return res.status(200).json({status: Web3Service.eMalPresale.activatePresale
            .sendTransaction() });
    },

    // Deactivate Presale
    deactivate: function(req, res){
        return res.status(200).json({status: Web3Service.eMalPresale.deactivatePresale
            .sendTransaction() });
    },

    // Set Emal Token Contract
    set_token: function(req, res){
        return res.status(200).json({status: Web3Service.eMalPresale.setToken
            .sendTransaction(req.param("token_addr")) });
    },

    // Set the owner of the Contract
    set_owner: function(req, res){
        return res.status(200).json({status: Web3Service.eMalPresale.setOwner
            .sendTransaction(req.param("owner_addr"))});
    }

}