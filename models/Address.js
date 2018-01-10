const address_schema = new mongoose.Schema({
  streetNum: {
    type: Number,
    required: true,
  },

  streetName: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  borought: {
    type: Number,
    required: true,
  },

  idType{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'type_schema',
  },

  idUser{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user_schema',
  }
})
