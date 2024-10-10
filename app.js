require('dotenv').config()
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const cors = require('cors')
const dbConnect = require('./config/mongo')

const app = express()

// Habilitar CORS
app.use(cors())

// Habilitar uso de body en POST
app.use(express.json())

// Habilitar uso de recursos publicos
app.use(express.static('storage'))

// Configurar Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Mi API',
      version: '1.0.0',
      description: 'Documentación de mi API'
    },
    servers: [
      {
        url: 'http://localhost:3000/api' // Cambia esto a la URL de tu servidor
      }
    ]
  },
  apis: ['./routes/*.js'] // Ruta a los archivos donde están tus definiciones de API
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

// Rutas de documentación
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Todas las demas rutas
app.use('/api', require('./routes'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

dbConnect()
