/**
 * ContractController.js
 *
 * @description :: Server-side controller action for manging the contract itself.
 */
module.exports = {

    // Fetches ether invsted from an investor address
    get_total_ether_invested: function(req, res){
        total_invested_amount = Web3Service.eMalPublicsale.totalEtherInvested();

        return res.status(200).json({status: 'success', 
            total_invested_amount: Web3Service.web3.fromWei(total_invested_amount)});
    },

    // Fetches ether invsted from an investor address
    get_ether_invested: function(req, res){
        invested_amount = Web3Service.eMalPublicsale.getInvestedAmount(req.param('investor_addr'));
        return res.status(200).json({status: 'success', 
            invested_amount: Web3Service.web3.fromWei(invested_amount)});
    },

    // Get activation status for presale
    get_activation_status: function(req, res){
        activation_status = Web3Service.eMalPublicsale.presaleActive();
        return res.status(200).json({status: 'success', activation_status: activation_status});
    },

    // Activate Presale
    activate: function(req, res){
        Web3Service.eMalPublicsale.activatePresale.sendTransaction();
        return res.status(200).json({status: 'success'});
    },

    // Deactivate Presale
    deactivate: function(req, res){
        Web3Service.eMalPublicsale.deactivatePresale.sendTransaction();
        return res.status(200).json({status: 'success' });
    },

    // Set Emal Token Contract
    set_token: function(req, res){
        Web3Service.eMalPublicsale.setToken.sendTransaction(req.param("token_addr"));
        return res.status(200).json({status: 'success'});
    },

    // Set the owner of the Contract
    set_owner: function(req, res){
        Web3Service.eMalPublicsale.setToken.sendTransaction(req.param("owner_addr"));
        return res.status(200).json({status: 'success'});
    }

}