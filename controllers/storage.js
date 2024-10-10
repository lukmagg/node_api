const { storageModel } = require('../models')

const getItem = (req, res) => {}

const getItems = async (req, res) => {
  const data = await storageModel.find({})
  res.send({ data })
}

const createItem = async (req, res) => {
  const { file } = req

  const filename = file.filename

  const PUBLIC_URL = process.env.PUBLIC_URL

  const fileData = {
    filename,
    url: `${PUBLIC_URL}/${filename}`
  }

  const data = await storageModel.create(fileData)

  res.send({ data })
}

const updateItem = (req, res) => {}
const deleteItem = (req, res) => {}

module.exports = {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem
}
