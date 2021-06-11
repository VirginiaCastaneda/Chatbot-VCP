# Pasos
1. Crear proyecto en GoA
2. Develop ----> actions, Get started, custom intent, build, ---> estas en dialog flow.
3. Configurar el Agent name

# Componentes importantes de un chatbot
1. INTENTS
2. ENTITIES: sinonimos
3. FULFILLMENT

# Actions
- Como analiza las expresiones habladas, mediante el NLU, reconoce las palabras en el dialogo.
- Extraer las frases claves.
- Dialog Flow, servicio por google


# Slot-Filling
- No lo estamos haciendo, reconoce las palabras como un slot, detectar la intencion de una expresion con el LN
- Modelo para identificar 
- lo hace dialog: 
- Hace es adquirir ejemplos de entrenamiento para cada uno de los slots de la base del documento, y despues hace la caracterrizacion y binarization. 

- Esto es la IA
- Redes neuronales

- ES DATO ESPECIFICO QUE NOSOTROS NECESITAMOS DEL USUARIO 

# Fulfillment
- ACCION A REALIZAR CON ESE DATO DEL SLOT FILLING: QUE SE VA HACER CON ESTA ACCION
- DAR LA RESPUESTA AL USUARIO  
- LLEVA DOS COMPONENTES EN LA CONSOLA INTENT Y UN WEEBHOOK

CUANDO EL FULFILLMENT COINCIDA CON UUNA INTENSION REALIZA UNA PETICION HTTP POST AL WEBHOOK CON UN OBJETO JSON QUE CONTIENE LA INFO SOBRE LA INTENSION COINCIENTE.
- pUEDE BUSCAR UN PRODUCTO EN LA BD 

# WEBHOOK
- Es codigo que responde a una solicitud http, logica de los intents.


# Custom entities
- Se van a encargar de crear sinonimos para las palabras.
- es la categoria de cosas.



