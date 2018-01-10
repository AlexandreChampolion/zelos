const user_schema = new mongoose.Schema({
  firstname : {
    type: String,
    required: true,
  },

  lastname : {
    type: String,
    required: true,
  },

  birthdate : {
    type: Number,
    required: true,
  },

  login : {
    type: String,
    required: true,
  },

  password : {
    type: String,
    required: true,
  },

  idGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'group_schema',
  }
})
