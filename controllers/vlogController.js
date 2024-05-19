const Vlog = require("../models/vlogModel");

async function getVlog(req,res){
    try{
        let vlog = await Vlog.find();
        res.send(vlog);
    }catch(err){
        res.statue(500).send({error:err.message});
    }
}

async function addVlog(req,res){
    let newvlog = req.body;
    let vlog = await Vlog.create(newvlog);
    res.send({message:"new vlog added succesfully"});
}

async function updateVlog(req,res){
    let id = req.params.id;
    let updateFields = req.body;
    let vlog = await Vlog.findByIdAndUpdate(id,{$set:updateFields});
    res.send({message:"Updated succesfully"});
}

async function deleteVlog(req,res){
    let id =req.params.id;
    let vlog = await Vlog.findByIdAndDelete(id);
    res.send({message:"vlog is deleted"});
}

exports.addVlog = addVlog;
exports.getVlog = getVlog;
exports.updateVlog = updateVlog;
exports.deleteVlog = deleteVlog;