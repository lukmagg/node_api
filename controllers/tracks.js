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
const getItem = (req, res) => {

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
const getItems = (req, res) => {
  const data = ['hola', 'mundo']
  res.send({ data })
}
const createItem = (req, res) => {}
const updateItem = (req, res) => {}
const deleteItem = (req, res) => {}

module.exports = {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem
}
