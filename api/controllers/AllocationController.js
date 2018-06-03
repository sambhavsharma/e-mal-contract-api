/**
 * AllocationController.js
 *
 * @description :: Server-side controller action for manging the token allocations.
 */
module.exports = {

    // Get allocated tokens for an address
    get_allocated_tokens: function(req, res){
        allocated_tokens = Web3Service.eMalPresale.getAllocatedTokens(req.param('investor_addr'));
        return res.status(200).json({status: 'success', 
            allocated_tokens: Web3Service.web3.fromWei(allocated_tokens)});
    },

    // Allocate tokens to an address
    allocate: function(req, res){
        Web3Service.eMalPresale.allocateTokens.sendTransaction(req.param("investor_addr"), 
                Web3Service.web3.toWei(req.param("tokens")));
        return res.status(200).json({status: 'success'});
    },

    // deduct allocated tokens for an address
    deduct: function(req, res){
        Web3Service.eMalPresale.deductAllocatedTokens.sendTransaction(req.param("investor_addr"), 
                Web3Service.web3.toWei(req.param("tokens")));
        return res.status(200).json({status: 'success' });
    }
}