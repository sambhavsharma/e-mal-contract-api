
/////////////////
// Web3 Service//
/////////////////

Web3 = require('web3');
props = sails.config.properties;
var web3 = new Web3(new Web3.providers.HttpProvider(props.web3_http_provider));

var eMalTokenContract = web3.eth.contract(props.token_contract_abi);
var eMalToken = eMalTokenContract.at(props.emal_token_address);

var eMalPresaleContract = web3.eth.contract(props.presale_contract_abi);
var eMalPresale = eMalPresaleContract.at(props.emal_presale_address);

// Setting token in the presale contract. Make sure that owner of the presale contract is changed already
eMalPresale._eth.defaultAccount = web3.eth.accounts[0];
sails.log("Default Address: " + web3.eth.accounts[0]);

setTokenTr = eMalPresale.setToken.sendTransaction(props.emal_token_address);
sails.log("Set token transaction: " + setTokenTr);

// Publicsale
var eMalPublicsaleContract = web3.eth.contract(props.publicsale_contract_abi);
var eMalPublicsale = eMalPublicContract.at(props.emal_publicsale_address);

// Setting token in the publicsale contract. Make sure that owner of the publicsale contract is changed already
eMalPublicsale._eth.defaultAccount = web3.eth.accounts[0];
sails.log("Default Address: " + web3.eth.accounts[0]);

setTokenTr = eMalPublicsale.setToken.sendTransaction(props.emal_token_address);
sails.log("Set token transaction: " + setTokenTr);

module.exports = {
	web3: web3,
	eMalToken: eMalToken,
	eMalPresale: eMalPresale,
    eMalPublicsale: eMalPublicsale
}