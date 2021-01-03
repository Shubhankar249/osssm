let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Replies = new Schema({
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // isHelpful : {
    //     type : Boolean,
    //     default : false
    // }
});

let Doubts = new Schema({
    postedBy : {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required:true
    },
    description: {
        type: String,
        default: ''
    },
    replies : [Replies]
});

let Groups = new Schema({
    // TODO : Group id has to be stored on users model also
    groupName: {
        type: String,
        required: true
    },
    groupCode: {    // code is used by users to join this group
        type: String,
        required:true,
        unique: true
    },
    users : [String],
    doubts : [Doubts]
})

module.exports = mongoose.model('Groups',Groups);
