const { trackModel } = require('../models')

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
const getItem = (req, res) => {}

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
  const data = await trackModel.find({})
  res.send({ data })
}

const createItem = async (req, res) => {
  const { body } = req
  const newTrack = await trackModel.create(body)

  res.send(newTrack)
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
