const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompetitionSchema = new Schema({
  year : {
    type: Number,
    required : [true],
  },
  loose : {
    type : String,
    required : [true],  
  },
  competition_name : {
    type : String,
    required : [true]
  },
  modality : {
    type : String,
    required : [true]
  },
  distance : {
    type : String,
    required : [true]
  },
  clasification : {
    type : String,
    required : [true]
  }
})

const PairingSchema = new Schema({
  year : {
    type : Number,
    required : [true]
  },
  couple_ring : {
    type : String,
    required : [true]
  },
  comments : {
    type : String,
    required : [false]
  }
})

const PigeonSchema = new Schema({
  ring : {
    type : String,
    required : [true],
  },
  name : {
    type : String,
    required : [true],
  },
  year : {
    type : Number,
    required : [true],
  },
  pedigree : {
    type : String,
    required : [false],
  },
  father_ring : {
    type : String,
    required : [true],
  },
  mother_ring : {
    type : String,
    required : [true],
  },
  gender : {
    type : String,
    required : [true],
  },
  color : {
    type : String,
    required : [true],
  },
  race : {
    type : String,
    required : [true],
  },
  status : {
    type : String,
    required : [true],
  },
  image : {
    type : String,
    required : [true],
  },
  comment : {
    type : String,
    required : [false],
  },
  competitions : {
    type : [CompetitionSchema],
    required : [false],
  },
  pairing : {
    type : [PairingSchema],
    required : [false],
  }
});

const Pigeon = mongoose.model('Pigeon', PigeonSchema);

module.exports = Pigeon;