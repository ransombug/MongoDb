var express =require('express');
var router=express.Router();
var mongo=require('mongodb');
var assert=require('assert');

var url='mongodb://localhost:27017/Insert'
router.get('/',function(req,res,next){
	res.render('index',);
});
router.get('/get-data',function(req,res,next){
mongo.connect(url,function(err,db)
{
useNewUrlParser: true;
	assert.equal(null,err);
	var cursor=db.collection('user-data').find();
	cursor.forEach(function(doc,err){
		assert.equal(null,err);
		resultArray.push(doc);
	},function(){
		db.close();
		res.render('index',{items: resultArray});
	});
});
});

router.post('/insert',function(req,res,next){
 useNewUrlParser: true;
var item={
      
	Username: req.body.Username,
	Password: req.body.Password,
	Contact: req.body.contact
}; 
	mongo.connect(url, function(err,db){
	assert.equal(null,err);
	db.collection('user-data').insertOne(item,function(err,result){
	assert.equal(null,err);
	console.log('Item inserted');
	db.close();
	});
});
res.redirect('/');

});


module.exports= router;