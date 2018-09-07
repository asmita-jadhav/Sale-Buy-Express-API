var express=require("express");
var router = express.Router();

var mongoose = require('mongoose');
var Electronics = mongoose.model('Electronics');

router.get('/',function(req,res,next){    
    Electronics.getAllElectronics(req,function(err,Electronics){
        if(err){
            res.send(err);
        }
        res.json(Electronics);
    });   
});

router.get('/:ElectronicsId',function(req,res,next){     
    Electronics.getlElectronicsById(req,function(err,Electronics){
        if(err){
            res.send(err);
        }
        res.json(Electronics);
    });   
});

/*router.get('/find/:query',function(req,res,next){      
    Electronics.getlElectronicsByQueries(req,function(err,Electronics){
        if(err){
            res.send(err);
        }
        res.json(Electronics);
    });   
});*/

router.post('/',function(req,res,next){       
    Electronics.addElectronics(req,function(err,Electronics){
        if(err){
            res.send(err);
        }
        res.json(Electronics);
    });   
});

router.put("/:ElectronicsId",function(req,res,next){
    Electronics.updateElectronics(req,function(err,Electronics){
        if(err){
            res.send(err);
        }
        res.json(Electronics);
    });   
});

router.delete('/:ElectronicsId',function(req,res,next){    
    Electronics.deleteElectronics(req,function(err,sucess){
        if(err){
            res.send(err);
        }
        res.json(sucess);
    });   
});

module.exports=router;