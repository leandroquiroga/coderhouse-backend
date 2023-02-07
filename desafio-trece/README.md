# Servidor NGINX
En este desafio numero trece en donde se debe levantar un servidor con PM2 y utilizar el proxy de NGINX

## Consigna: 
  Tomando con base el proyecto que vamos realizando, agregar un parámetro más en la ruta de comando que permita ejecutar al servidor en modo fork o cluster. Dicho parámetro será 'FORK' en el primer caso y 'CLUSTER' en el segundo, y de no pasarlo, el servidor iniciará en modo fork.
    1- Agregar en la vista info, el número de procesadores presentes en el servidor.  
    2- Ejecutar el servidor (modos FORK y CLUSTER) con nodemon verificando el número de procesos tomados por node.
    3- Ejecutar el servidor (con los parámetros adecuados) utilizando Forever, verificando su correcta operación. Listar los procesos por Forever y por sistema operativo
    4- Configurar Nginx para balancear cargas de nuestro servidor de la siguiente manera:
    5- Redirigir todas las consultas a /api/randoms a un cluster de servidores escuchando en el puerto 8081. El cluster será creado desde node utilizando el módulo nativo cluster.
    6- El resto de las consultas, redirigirlas a un servidor individual escuchando en el puerto 8080.
    7- Verificar que todo funcione correctamente.
    9- Luego, modificar la configuración para que todas las consultas a /api/randoms sean redirigidas a un cluster de servidores gestionado desde nginx, repartiéndolas equitativamente entre 4 instancias escuchando en los puertos 8082, 8083, 8084 y 8085 respectivamente.

## Consejo: 

### Aspectos a incluir en el entregable:
  * Incluir el archivo de configuración de nginx junto con el proyecto.
  * Incluir también un pequeño documento en donde se detallen los comandos que deben ejecutarse por línea de comandos y los argumentos que deben enviarse para levantar todas las instancias de servidores de modo que soporten la configuración detallada en los puntos anteriores.

## Ejecutar programa 
```
  git clone: https://github.com/leandroquiroga/coderhouse-backend.git
  cd desafio-trece
  npm install 
  npm run dev
  Codear a pleno :)
```