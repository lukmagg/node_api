const { matchedData } = require('express-validator')
const { trackModel } = require('../models')
const { handleHttpError } = require('../utils/handleErrors')

/**
 * @swagger
 * /tracks/{id}:
 *   get:
 *     summary: Obtiene un elemento específico de la lista de tracks.
 *     description: Devuelve la información del track que corresponde al ID proporcionado.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del track que deseas obtener.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Información del track encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: ID del track.
 *                     title:
 *                       type: string
 *                       description: Título del track.
 *                     artist:
 *                       type: string
 *                       description: Artista del track.
 *       404:
 *         description: Track no encontrado.
 *       500:
 *         description: Error en el servidor.
 */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const data = await trackModel.findById(id)
    res.send({ data })
  } catch (err) {
    handleHttpError(res, 'ERROR_GET_ITEM')
  }
}

/**
 * @swagger
 * /tracks:
 *   get:
 *     summary: Obtiene una lista de tracks.
 *     description: Devuelve un arreglo con todos los tracks disponibles.
 *     responses:
 *       200:
 *         description: Lista de tracks encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: ID del track.
 *                       title:
 *                         type: string
 *                         description: Título del track.
 *                       artist:
 *                         type: string
 *                         description: Artista del track.
 *       500:
 *         description: Error en el servidor.
 */
const getItems = async (req, res) => {
  try {
    const data = await trackModel.find({})
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_GET_ITEMS')
  }
}

const createItem = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await trackModel.create(body)
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_CREATE_ITEM')
  }
}

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req)
    const data = await trackModel.findOneAndUpdate(
      { _id: id },
      body,
      { new: true }
    )
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_UPDATE_ITEM')
  }
}

const deleteItem = async (req, res) => {}

module.exports = {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem
}
