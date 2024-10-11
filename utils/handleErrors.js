const handleHttpError = (res, message = 'Algo va mal', code = 403) => {
  res.status(code)
  res.send({ error: message })
}

module.exports = { handleHttpError }
