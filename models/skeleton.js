//Require mongoose package
const mongoose = require('mongoose');

//Define SkeletonSchema with title and description
const SkeletonSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String
});

const SkeletonModel = module.exports =
    mongoose.model('SkeletonModel', SkeletonSchema );

//SkeletonModel.find() returns all the lists
module.exports.getAllItems = (callback) => {
    SkeletonModel.find(callback);
}

//newSkeleton.save is used to insert the document into MongoDB
module.exports.addItem = (newSkeleton, callback) => {
    newSkeleton.save(callback);
}

//Here we need to pass an id parameter to SkeletonModel.remove
module.exports.deleteItemById = (id, callback) => {
    let query = {_id: id};
    SkeletonModel.remove(query, callback);
}