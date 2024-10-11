const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key
    if (apiKey === 'lucas') {
      next()
    } else {
      res.status(403)
      res.send({ error: 'apiKey incorrecto' })
    }
  } catch (e) {
    res.status(403)
    res.send({ error: 'Algo salio mal...' })
  }
}

module.exports = customHeader
