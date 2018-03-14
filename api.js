var express = require('express');
var https = require('https');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/eChain";
var fs = require('fs');
var DB = require('./db');
var algo = require('./webshimoto.js');
var metaget = require("metaget");

var app = express();

var options = {
  key: fs.readFileSync('./SSL/privkey.pem'),
  cert: fs.readFileSync('./SSL/cert.pem'),
  ca: fs.readFileSync('./SSL/chain.pem')
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});


app.get('/', function(req, res, next) {

    var testObject = {
        "AppName": "Epocum_API v. Alfa",
        "Version": 0.8
    }
    res.json(testObject);
    
});

function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("webChain", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
  });//socialchain
  db.createCollection("sChain", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
  });//epocumpost
  db.createCollection("ePost", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
 });
  db.createCollection("tChain", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
  });
    db.createCollection("tempChain", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

app.get('/tempWeb/:ipfsHash', function(req, res, next) {
   
	MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	DB.addTempWeb(req.params.ipfsHash);
	res.json('_<OK>_');
	});
	
});

app.get('/getAllTempWeb', function(req, res, next) {
	
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("tempChain").find({}).toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	    res.json(result);
	    db.close();
	  });
	}); 
	
});


app.get('/getAllWeb', function(req, res, next) {
	
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("webChain").find({}).toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	    res.json(result);
	    db.close();
	  });
	}); 
	
});

app.get('/getAllSocial', function(req, res, next) {
	
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("sChain").find({}).toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	    res.json(result);
	    db.close();
	  });
	}); 
	
});

//Social - Privatekeyof a user is the bignumber and privatekey all sha3 hashed
app.get('/getAllPost', function(req, res, next) {
	
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("eChain").find({}).toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	    res.json(result);
	    db.close();
	  });
	}); 
	
});

app.get('/newSmartAds/:myPost/PrivateKey/:pKey/name/:fullName/wallet/:coinbase/website/:website', function(req, res, next) {

	MongoClient.connect(url, function(err, db) {
	if (err) throw err;
		DB.newSmartAds(req.params.fullName,req.params.coinbase,req.params.myPost,req.params.website,'0','0','0','0');
		res.json('_<OK>_');
	});
	
});

app.get('/commentPost/:PostHash/PrivateKey/:pKey/post/:commentPost', function(req, res, next) {

	MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	  var query = { webSite: req.params.myweb};
	  db.collection("webChain").find(query).toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	    res.json(result);
	    db.close();
	  });
	});
	
});

app.get('/likePost/:PostHash/PrivateKey/:pKey/post/:likePost', function(req, res, next) {

	MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	  var query = { webSite: req.params.myweb};
	  db.collection("webChain").find(query).toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	    res.json(result);
	    db.close();
	  });
	});
	
});
//End Social

//transactions
//https://www.epocum.com:8888/newTransaction/0xa7f00b3b388805405d78675edcd7774529da816611076805726ef9e5aa7f465d/PrivateKey//name/SimoneSchiavolini/toID/10210350138213550/fromWallet/0x44858a9eea67dda2bd78a501f06ca3ec62e91323/toName/Dan%20Rusnac/currency/ETH/amount/0.001
app.get('/newTransaction/:myTransHash/PrivateKey/:pKey/name/:fullName/toID/:toxID/fromWallet/:coinbase/toName/:toFullName/toWallet/:toxWallet/currency/:curr/amount/:amountx', function(req, res, next) {

	MongoClient.connect(url, function(err, db) {
	if (err) throw err;
		DB.newTransaction(req.params.myTransHash,req.params.fullName,req.params.toxID,req.params.coinbase,req.params.toFullName,req.params.toxWallet,req.params.curr,req.params.amountx);
		res.json('_<OK>_');
	});
	
});

//Social - Privatekeyof a user is the bignumber and privatekey all sha3 hashed
app.get('/getAllTransactions', function(req, res, next) {
	
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("tChain").find({}).toArray(function(err, result) {
	    if (err) throw err;
	    res.json(result);
	    db.close();
	  });
	}); 
	
});

//Social - Privatekeyof a user is the bignumber and privatekey all sha3 hashed
app.get('/getTransactionsIn/:myWallet', function(req, res, next) {
	
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  //var query = { fromWallet: req.params.myWallet};
	  var query = ({toWallet: req.params.myWallet});
	  db.collection("tChain").find(query).toArray(function(err, result) {
	    if (err) throw err;
	    res.json(result);
	    db.close();
	  });
	}); 
	
});

app.get('/getTransactionsOut/:myWallet', function(req, res, next) {
	
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  //var query = { fromWallet: req.params.myWallet};
	  var query = ({fromWallet: req.params.myWallet});
	  db.collection("tChain").find(query).toArray(function(err, result) {
	    if (err) throw err;
	    res.json(result);
	    db.close();
	  });
	}); 
	
});


//Social - Privatekeyof a user is the bignumber and privatekey all sha3 hashed
app.get('/getMyLastTransaction/:myWallet', function(req, res, next) {
	
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var query = { fromWallet: req.params.myWallet};
	  var collection = db.collection('tChain');
	  var cursor     = collection.find().limit(1).sort({ $natural : -1 });
	  cursor.toArray(function(err, result) {
	    if (err) throw err;
	    res.json(result);
	    db.close();
	  });
	}); 
	
});

app.all('/sendSignedTx/:myTxSigned', function(req, res, next) {

	var sign = req.params.myTxSigned;
	var api = require('etherscan-api').init('2P4DXVI9PHT9TH5RSAPIW7WWNBQEZZ2EK7','kovan');

	var sendt = api.proxy.eth_sendRawTransaction('0x' + sign);
  	res.json(sendt);

});


//end transactions
app.get('/getWeb/:myweb', function(req, res, next) {

	MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	  var query = { webSite: req.params.myweb};
	  db.collection("webChain").find(query).toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	    res.json(result);
	    db.close();
	  });
	});
	
});

app.get('/getFriend/:myfriendname', function(req, res, next) {

	MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	  var query = { name: req.params.myfriendname};
	  db.collection("sChain").find(query).toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	    res.json(result);
	    db.close();
	  });
	});
	
});

app.get('/getFriendByID/:friendId', function(req, res, next) {

	MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	  var query = { idSocial: req.params.friendId};
	  db.collection("sChain").find(query).toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	    res.json(result);
	    db.close();
	  });
	});
	
});


app.get('/rootbase/:coinbase/website/:myweb/browserId/:browser', function(req, res, next) {

    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var date = new Date();
    
	MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	  var query = ({webSite: req.params.myweb, visitor: ip.replace('::ffff:','')},{ $or: [{webSite: req.params.myweb, browserId: req.params.browser}]});
	  db.collection("webChain").find(query).toArray(function(err, result) {
	    if (err) throw err;
	    db.close();
	    //console.log(result);
  		if (isEmptyObject(result)) {
			DB.addWeb(req.params.coinbase,req.params.myweb,ip.replace('::ffff:',''),date,req.params.browser);
		} else {
			console.log('ip already present');
		}  			
		res.json('_<OK>_');
	  });
	});
});

app.get('/rootbase/:wallet/id/:ids/name/:fullName', function(req, res, next) {

    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var date = new Date();
    
	MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	  var query = ({idSocial: req.params.ids});
	  db.collection("sChain").find(query).toArray(function(err, result) {
	    if (err) throw err;
	    db.close();
	    //console.log(result);
  		if (isEmptyObject(result)) {
			DB.addMe(req.params.wallet,req.params.ids,req.params.fullName);
		} else {
			DB.updateMe(req.params.wallet,req.params.ids,req.params.fullName);
		}  			
		res.json('_<OK>_');
	  });
	});
});

app.get('/getNumVisit/:web', function(req, res, next) {

    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var date = new Date();
    
	MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	  var query = { webSite: req.params.web};
	  db.collection("webChain").find(query).toArray(function(err, result) {
	    if (err) throw err;
	    db.close();
	    //console.log(Object.keys(result).length);
		res.json(Object.keys(result).length);
	  });
	});
});

app.get('/cleanPost', function(req, res, next) {

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("eChain").drop(function(err, delOK) {
	    if (err) throw err;
	    if (delOK) console.log("Collection deleted");
	    db.close();
	  });
	});

});


//SEND Tx Signed

//TOKEN

app.get('/sendsigned/:signedTx', function(request, response) {

	var sign = [request.params.signedTx];
	console.log(sign);
	var api = require('etherscan-api').init('2P4DXVI9PHT9TH5RSAPIW7WWNBQEZZ2EK7','kovan');

	var sendt = api.proxy.eth_sendRawTransaction('0x' + sign);
     	sendt.then(function(t){
  	console.log(t);
	});

	response.json('received');


});

app.get('/getMeta/:w', function(req, res, next) {

metaget.fetch('http://'+req.params.w, function (err, meta_response) {
	
	if(err){
		//console.log(err);
		metaget.fetch('https://'+req.params.w, function (err, meta_response) {
			console.log(meta_response);
			var desc = meta_response["og:description"];
			console.log(desc);
			res.write(desc);
		   	res.end('');
	   	});
	   	
	}else{
		console.log(meta_response);
		var desc = meta_response["og:description"];
		console.log(desc);
		res.write(desc);
	   	res.end('');
	}
});

});


console.log('API reg/IP - Epocum.root.node v.2.0!');
app.use(express.static('.' + '/html'));

https.createServer(options,app).listen(8888);