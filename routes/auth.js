const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  res.json({
    error: null,
    data: 'Data de registro'
  })
})

module.exports = router
