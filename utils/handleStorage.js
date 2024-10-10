const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = path.join(__dirname, '..', 'storage')
    cb(null, pathStorage)
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop()
    const filename = `file-${Date.now()}.${ext}`
    cb(null, filename)
  }
})

const uploadMiddleware = multer({
  storage
})

module.exports = uploadMiddleware
