/**
 * UserController.js
 *
 * @description :: Server-side controller action for manging app.
 */
module.exports = {

	index: function(req, res){
		return res.status(200).json({message: Web3Service.eMalToken.totalSupply() });
	}

}

// 8de30f9863bb893b6f9159028c164823ed12dc88ccffd063db0752a3b9caa4dd