const express = require('express')
const router = express.Router()
const { getItems, getItem, createItem } = require('../controllers/tracks')

/**
 * @swagger
 * /tracks:
 *   get:
 *     summary: Obtener una lista de datos
 *     responses:
 *       200:
 *         description: Lista de datos devuelta correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: string
 */
router.get('/', getItems)

/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Obtiene un item por ID
 *     description: Devuelve un item específico.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del item a obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123"
 *                 name:
 *                   type: string
 *                   example: "Nombre del Item"
 *                 description:
 *                   type: string
 *                   example: "Descripción del Item"
 *       404:
 *         description: Item no encontrado
 */
router.get('/:id', getItem)

router.post('/', createItem)

module.exports = router
