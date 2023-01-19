# Bases de datos: Node.js - Express.js - PUG - MariaDB - Squlite3 - Knex
En este desafio numero siete se debe utilizar la API del anterior desafio para la incorporacion de una bases de datos

## Consigna: 
1 - Tomando como base las clases Contenedor en memoria y en archivos, desarrollar un nuevo contenedor con idénticos métodos pero que funcione sobre bases de datos, utilizando Knex para la conexión. Esta clase debe recibir en su constructor el objeto de configuración de Knex y el nombre de la tabla sobre la cual trabajará. Luego, modificar el desafío entregable de la clase 11”Chat con Websocket”, y:
* cambiar la persistencia de los mensajes de filesystem a base de datos SQLite3.
* cambiar la persistencia de los productos de memoria a base de datos MariaDB.

2- Desarrollar también un script que utilizando knex cree las tablas necesarias para la persistencia en cuestión (tabla mensajes en sqlite3 y tabla productos en mariaDb).


## Consejo: 

### Aspectos a incluir en el entregable:
* Definir una carpeta DB para almacenar la base datos SQLite3 llamada ecommerce

# IMPORTANTE: 
* Para la creacion de bases de datos se debe tener configurado mysql

## Ejecutar programa 
```
  git clone: https://github.com/leandroquiroga/coderhouse-backend.git
  cd desafio-siete
  npm install 
  
  # Crear la tabla para productos
  npm run db:mariaDB

  # Crear la tabla para los chats
  npm run db:sqlite

  npm run dev
  Codear a pleno :)
```
