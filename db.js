var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/eChain";

var addWeb = function(coinbase,web,visit,time,browser,id,name,wallet,db, callback) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myWeb = {wallet: coinbase, webSite: web, visitor: visit, data: time, browserId: browser};
  db.collection("webChain").insertOne(myWeb, function(err, res) {
    if (err) throw err;
    console.log("1 website inserted");
    db.close();
  });
});
}
exports.addWeb = addWeb;

var addTempWeb = function(hash,db,callback) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myTempWebHash = {ipfsHash: hash};
  db.collection("tempChain").insertOne(myTempWebHash, function(err, res) {
    if (err) throw err;
    console.log("1 temp website inserted");
    db.close();
  });
});
}
exports.addTempWeb = addTempWeb;

var addMe = function(coinbase,id,fullName,db, callback) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var meAsFriend = {wallet: coinbase, idSocial: id, name:fullName};
  db.collection("sChain").insertOne(meAsFriend, function(err, res) {
    if (err) throw err;
    console.log("1 social inserted");
    db.close();
  });
});
}
exports.addMe = addMe;

var updateMe = function(coinbase,id,fullName,db, callback) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = {idSocial: id};
  var meAsFriend = {$set:{wallet: coinbase, idSocial: id, name:fullName}};
  db.collection("sChain").findOneAndReplace(query,meAsFriend, function(err, res) {
    if (err) throw err;
    console.log("1 social updated");
    db.close();
  });
});
}
exports.updateMe= updateMe;


//smartcontract advertising
var newSmartAds = function(fullName,coinbase,postcontent,web,numLike,numCondivision,numComments,commentOfPost,db, callback) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var post = {name:fullName, wallet: coinbase,content: postcontent,website:web,like: numLike,condivisions: numCondivision,numcomments: numComments,comment: commentOfPost};
  db.collection("eChain").insertOne(post, function(err, res) {
    if (err) throw err;
    console.log("1 social inserted");
    db.close();
  });
});
}
exports.newSmartAds = newSmartAds;

var updatePost = function(coinbase,id,fullName,db, callback) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var post = {name:fullname, wallet: coinbase, idSocial: id,content:postcontent, like:numLike, condivisions:numCondivision,comments:numComments,comment:commentOfPost};
  db.collection("eChain").insertOne(post, function(err, res) {
    if (err) throw err;
    console.log("1 social inserted");
    db.close();
  });
});
}
exports.updatePost = updatePost;

//transactions
var newTransaction = function(tHash,fullName,toxID,coinbase,toFullName,toxWallet,curr,amountx,db, callback) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  var transaction = {txHash: tHash,from: fullName,toID: toxID, fromWallet: coinbase,toName:toFullName,toWallet:toxWallet,currency:curr,amount:amountx,date: now};
  db.collection("tChain").insertOne(transaction, function(err, res) {
  	
    if (err) { 
    console.log(err);
    throw err;
    }else {
    console.log("transactions inserted");
    db.close();
    }
  });
});
}
exports.newTransaction = newTransaction;

//WHITELIST

var addAccount = function(email,walletETH,walletBTC,walletBCH,walletACT,db, callback) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myAccount = {email: email,walletETH:walletETH,walletBTC:walletBTC,walletBCH:walletBCH,walletACT:walletACT};
  db.collection("ico").insertOne(myAccount, function(err, res) {
    if (err) throw err;
    console.log("1 account inserted in ico");
    db.close();
  });
});
}
exports.addAccount = addAccount;

var updateAccount = function(email,walletETH,walletBTC,walletBCH,walletACT,db, callback) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = {email: email,rndCode: rndCode};
  var myAccount = {$set:{email: email,rndCode: rndCode, walletETH: walletETH,qETH:qETH, walletBTC:walletBTC,qBTC:qBTC,walletBCH:walletBCH,qBCH:qBCH,walletACT:walletACT,qACT:qACT}};
  db.collection("ico").findOneAndReplace(query,myAccount, function(err, res) {
    if (err) throw err;
    console.log("1 account updated in whitelist");
    db.close();
  });
});
}
exports.updateAccount = updateAccount;

