# INSTALACION
Instala Node.js
- Abrir la consola de Nodejs para ejecuatar e instalar firebase

1. Posicionarte en la carpeta donde se va a instalar firebase
2. npm install -g firebase-tools
3. Ver la version que tenemos instalado: firebase --version, debe ser arriba de 6.4
4. Asegurarnos que estamos en la cuenta que queremos estar
5. firebase login 
Cambiar usuario firebase logout y luego login.


# Agente
Crear agente en dialog flow sino lo haz creado
- importar o hacer los intents
- 

# Implementaciones del Firebase
- Crear proyecto en firebase, hacer la config.
- Poner plan blaze
- 
# Conectar la logica de negocio (intents, entities)con el fulfillment

7. Hacer una carpeta para el proyecto a conectar las funciones (functions)
- la carpeta automatizamente crea functions

-  EJECUTAR firebase init ----> para inicializar el proyecto
-  Yes
-  Selecionar el proyecto O crear un nuevo proyecto, Establecer id del proyecto codyfull, nombre del proyecto codyfull
- que lenguaje usar para las cloud functions: js
-  usar el ESlist: No
-  instalar dependencias: yes
-  Se instala todo.
-  Te va a dar Firebase initialization complete!

# Comprobar que todo este bien
- Se modifica el index.js de functions y se hace el primer deploy 
- Para ver que todo este bien

# Hacer el deploy
-  firebase deploy 

- Si te da la url del deploy todo esta bien.

- Modificar el index.js para ver si se esta ejecutando bien.
- Si muestra hola mundo la conexion es exitosa.
- Puedo modicar mi webhook con las funciones que se requiera

 exports.webhook = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
 });


# Modificar el index.js


# Instala el SDK de Firebase JavaScript:
1. Si aún no tienes un archivo package.json, ejecuta el siguiente comando para crear uno desde la raíz de tu proyecto de JavaScript:

- npm init


2. npm install firebase-admin --save

3. Usar el modulo en la aplicacion
- Se agrega esto al index.js para poder usar el firestore

- var admin = require('firebase-admin');
- admin.initializeApp(functions.config().firebase);
- var firestore = admin.firestore();









