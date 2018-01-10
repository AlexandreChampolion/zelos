const group_schema = new mongoose.Schema({
  label : {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  }
})
