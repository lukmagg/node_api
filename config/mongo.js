const mongoose = require('mongoose')

const DB_URI = process.env.DB_URI

const dbConnect = () => {
  mongoose.connect(DB_URI)
    .then(() => {
      console.log('Conectado a la base de datos')
    })
    .catch(err => {
      console.error('Error al conectar a la base de datos', err)
    })
}

module.exports = dbConnect
