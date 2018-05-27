/**
 * UserController.js
 *
 * @description :: Server-side controller action for manging app.
 */
module.exports = {

	index: function(req, res){
		return res.status(200).json({message: "Hello!"});
	}

}