const mongoose = require('mongoose')

const StorageSchema = new mongoose.Schema(
  {
    url: {
      type: String
    },
    filename: {
      type: String
    }
  },
  {
    timestamps: true, // createAt, updateAt
    versionKey: false
  }
)

module.exports = mongoose.model('Storage', StorageSchema)
