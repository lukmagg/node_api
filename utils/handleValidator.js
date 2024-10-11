const { validationResult } = require('express-validator')

const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw() // valida lo que entra por req, si falla pasa al catch
    return next() // si la validacion pasa correctamente ejecuta next y continua el flujo del programa
  } catch (err) {
    res.status(403)
    res.send({ errors: err.array() })
  }
}

module.exports = validateResults
