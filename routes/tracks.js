const express = require('express')
const router = express.Router()
const { getItems } = require('../controllers/tracks')

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

module.exports = router
