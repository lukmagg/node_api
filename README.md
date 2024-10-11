# API Básica en Node.js

Esta es una API REST básica construida con Node.js, Express y MongoDB. Proporciona las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para un modelo simple de "items".

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- [Node.js](https://nodejs.org/) - Versión 12 o superior
- [MongoDB](https://www.mongodb.com/) - Instancia local o en la nube
- [Git](https://git-scm.com/) (opcional)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/lukmagg/node_api  


2. Entra en el directorio del proyecto 
   ```bash
   cd CURSO_NODE

3. Instala las dependencias  
   ```bash
   npm install 

4. Crea un archivo .env en la raíz del proyecto con las siguientes variables:
   ```bash
   PORT=3000
   DB_URI=mongodb://127.0.0.1:27017/curso-node-db
   PUBLIC_URL=http://localhost:3000  


<br></br>

## Uso
### Iniciar el servidor
Para iniciar el servidor en modo desarrollo, puedes usar
```bash
npm run dev  
```

Esto levantará el servidor en http://localhost:3000

<br/>

### Informacion de la api (swagger)
Endpoints disponibles en http://localhost:3000/api-docs/
