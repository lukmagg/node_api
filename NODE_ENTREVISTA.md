## Descripción de Módulos y Métodos de Node.js

### fs
El módulo `fs` es el módulo de sistema de archivos (File System) de Node.js, que proporciona una API para interactuar con el sistema de archivos.

### readdirSync
El método `readdirSync` lee el contenido de un directorio de manera sincrónica. Esto significa que bloquea el hilo de ejecución hasta que se completa la operación de lectura. Si necesitas un comportamiento no bloqueante, podrías usar `fs.readdir()`.

### __dirname
`__dirname` es una variable global en Node.js que contiene la ruta absoluta del directorio que contiene el archivo JavaScript en ejecución. Es útil para referenciar archivos y directorios en relación con la ubicación del script actual.
