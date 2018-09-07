var express=require("express");
var router = express.Router();

var mongoose = require('mongoose');
var Properties = mongoose.model('Properties');

router.get('/',function(req,res,next){    
    Properties.getAllProperties(req,function(err,Properties){
        if(err){
            res.send(err);
        }
        res.json(Properties);
    });   
});

router.get('/:PropertiesId',function(req,res,next){    
    Properties.getlPropertiesById(req,function(err,Properties){
        if(err){
            res.send(err);
        }
        res.json(Properties);
    });   
});

/*router.get('/find/:query',function(req,res,next){      
    Properties.getlPropertiesByQueries(req,function(err,Properties){
        if(err){
            res.send(err);
        }
        res.json(Properties);
    });   
});*/

router.post('/',function(req,res,next){    
    Properties.addProperties(req,function(err,Properties){
        if(err){
            res.send(err);
        }
        res.json(Properties);
    });   
});

router.put("/:PropertiesId",function(req,res,next){
    Properties.updateProperties(req,function(err,Properties){
        if(err){
            res.send(err);
        }
        res.json(Properties);
    });   
});

router.delete('/:PropertiesId',function(req,res,next){       
    Properties.deleteProperties(req,function(err,sucess){
        if(err){
            res.send(err);
        }
        res.json(sucess);
    });   
});


module.exports=router;