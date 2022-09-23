La carpeta “nginx-1.23.1” dentro de ewahnish-backend-project contiene el desafio correspondiente a la clase 30.

La carpeta “nginx-1.23.1” contiene la subcarpeta “Server” con en servidor express desarrollado para este desafio:

Servidor:	/src/server.js

Routers:	/src/routers/infoRouter.js (para ruta  /api/info)
		/src/routers/randomsRouter.js (para ruta /api/randoms)
		/src/anotherRandomsRouter.js (para ruta /api/anotherRandoms)

A continuacion la configuracion ecosystem.config.js: 

module.exports = {
  apps: [{
    name: "Server00",
    script: "src/server.js",
    watch: true,
    env: {
      "PORT": 8080,
    },
    exec_mode: "fork",
    node_args: "--harmony --expose-gc",
  },
  {
    name: "Server01",
    script: "src/server.js",
    watch: true,
    env: {
      "PORT": 8081,
    },
    exec_mode: "cluster",
    instances: 2
    node_args: "--harmony --expose-gc",
  },
  {
    name: "Server02",
    script: "src/server.js",
    watch: true,
    env: {
      "PORT": 8082,
    },
    exec_mode: "fork",
  },
  {
    name: "Server03",
    script: "src/server.js",
    watch: true,
    env: {
      "PORT": 8083,
    },
    exec_mode: "fork",
    node_args: "--harmony --expose-gc",
  },
  {
    name: "Server04",
    script: "src/server.js",
    watch: true,
    env: {
      "PORT": 8084,
    },
    exec_mode: "fork",
    node_args: "--harmony --expose-gc",
  },
  {
    name: "Server05",
    script: "src/server.js",
    watch: true,
    env: {
      "PORT": 8085,
    },
    exec_mode: "fork",
    node_args: "--harmony --expose-gc",
  },
  {
    name: "Server06",
    script: "src/server.js",
    watch: true,
    env: {
      "PORT": 8086,
    },
    exec_mode: "fork",
    node_args: "--harmony --expose-gc",
  },
  ],
};

Se configuraron los siguientes servidores:

Server00	corre en puerto 8080	(default peticiones)
Server01	corre en puerto 8081	(cluster asociado a http://localhost:8081)
Server02	corre en puerto 8082	(asociados a node_another)
Server03	corre en puerto 8083	
Server04	corre en puerto 8084	
Server05 	corre en puerto 8085	


Server01: Todas las consultas a /api/randoms se dirigen a el

Servers 02 a 05: Para que permanecieran ambas configuraciones solicitadas se agregó una ruta nueva, /api/anotherRandoms para que este conjunto de servidores la atienda y nginx balancee la carga entre los mismos

La configuración de nginx se encuentra en /conf/nginx.conf

Lista de procesos pm2

<img
    src="/images/pm2-processes.png"
    alt="Procesos"
    title:"PM2 - Procesos"
    style:"display: inline-block; margin:0, max-width: 600px"
>

PM2 Monitor 

<img
    src="/images/pm2-monitor.png"
    alt="Procesos"
    title:"PM2 - Monitor"
    style:"display: inline-block; margin:0, max-width: 600px"
>
