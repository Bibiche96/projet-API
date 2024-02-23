const { STRING } = require('sequelize');

const db = require('../../config/database');

const Tweet = db.define('Tweet', {
    message: {
        type: STRING,
        require: true

    },
    author: {
        type: STRING,
        require: true
    },
    likers: {
        type:STRING
    }
});


module.exports = Tweet;
