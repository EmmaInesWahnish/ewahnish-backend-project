La carpeta “loginPassportDotenvInfo” dentro de ewahnish-backend-project contiene el desafio correspondiente a la clase 28.

El desarrollo de este desafío está basado en el desafío de le clase Nro 26, que se encuentra en la carpera “loginAnPassport”.

Para correr este desafío es necesario realizar:
	cd loginPassportDotenvInfo

Deben abrirse dos terminales y cambiar al directorio del proyecto (cd loginPassportDotenvInfo) en cada una.

En una se ejecutará el siguiente comando para activar el servidor utilizado para la consigna 1, en el puerto 3000:
    npm run dev

En la otra se ejecutará el siguiente comando para activar el servidor utilizado para las consignas 2 y 3 (puerto default 8080)
    nodemon './src/app.js'

Consigna 1:

Claves y credenciales utilizadas se encuentran en el archivo = .env
En el archivo .env.example se encuentra el ejemplo de las variables de entorno utilizadas
El puerto de escucha se maneja también través de las variables de entorno, ya que la práctica de argumentos se realiza en un server adicional, /src/app.js, que corre por defecto en el puerto 8080  

Consigna 2:

Esta ruta se maneja a través del server ‘/src/app.js’ en la ruta ‘/’ ya que se trata de un puerto diferente, por default 8080, en un server express diferente, a los efectos de que al solicitar ‘http://localhost:8080’ se muestre alguna información, en este caso un JSON similar al siguiente:

{"message": "Informacion",
    "arguments": ["C:\\Program Files\\nodejs\\node.exe","C:\\Users\\ewahn\\Documents\\ewahnish-backend-project\\loginPassportDotenvInfo\\src\\app.js"],
    "platform": "win32",
    "nodeVersion": "v14.17.6",
    "reservedMemory": 32444416,
    "exexPath": "C:\\Program Files\\nodejs\\node.exe",
    "processId": 9564,
    "processFolder": "C:\\Users\\ewahn\\Documents\\ewahnish-backend-project\\loginPassportDotenvInfo"}

Consigna 3:

Se agregó la ruta ‘/api/randoms’ que permite calcular una cantidad de números aleatorios en el rango 1 a 1000 según el parámetro de consulta ‘cant’ (ver ‘childProcess.js’)
Se devuelve un JSON cuya clave es cada número aleatorio, y el valor es las veces que salió.
Para que la ruta no sea bloqueante se utilizó el método { fork } de ‘child_process’
