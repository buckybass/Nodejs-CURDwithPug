const { Schema, model } = require('mongoose')

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  note: {
    type: String,
    maxlength: 500
  },
  recordedAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = model('Records', schema)
