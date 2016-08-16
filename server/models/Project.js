const mongoose = require('mongoose')

const Project = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String
  },
  leader: {
    type: String,
    required: true
  }
  developers:[{
    type: String
  }]
});

module.exports = mongoose.model('Project', Project);
