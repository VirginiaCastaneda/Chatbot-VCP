const functions = require("firebase-functions");

var admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);



var firestore = admin.firestore();



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});


//Almacenar todas las varibales de los intents en el firebase confirmar el registro
exports.confirmar = functions.https.onRequest((request, response) => {
    let params = request.body.result.parameters;
    response.send({
        speech: ` ${params.name} Tu registro para un equipo de ${params.hacker} con  ${params.number} personas, que ${params.time} han ido a un hack se ha realizado con exito,  te enviare y tus boletos al correo ${params.email} de inmediato `
    });

});

//para registrar en la base de datos cloud firestore
exports.register = functions.https.onRequest((request, response) => {
    let params = request.body.result.parameters;
    firestore.collection('tickets').add(params)
        .then(() => {
            response.send({
                speech: ` ${params.name} Tu registro para un equipo de ${params.hacker} con  ${params.number} personas, que ${params.time} han ido a un hack se ha realizado con exito,  te enviare y tus boletos al correo ${params.email} de inmediato `
            });
        })
        .catch((e => {
            console.log("error " + e);
            response.send({
                speech: "Algo salio mal al escribir en la BD"
            });
        }))

});


/*
switch(request.body, result.action){

  case 'RSVHACK': si la accion es reservar ejecuramos los siguiente(REGISTRAR):
  break;
  
  case 'ShowRSVP': si es mostrar las reservas ejecutamos:
  break;

  default: 
  no action matched in webhook
}
*/
//PARA EVALUAR LOS ACTIONS
exports.evaluateActions = functions.https.onRequest((request, response) => {
    switch (request.body.result.action) {
        case 'RSVPHack': //REGISTRO
            let params = request.body.result.parameters;
            firestore.collection('tickets').add(params)
                .then(() => {
                    response.send({
                        speech: ` ${params.name} Tu registro para un equipo de ${params.hacker} con  ${params.number} personas, que ${params.time} han ido a un hack se ha realizado con exito,  te enviare y tus boletos al correo ${params.email} de inmediato `
                    });
                })
                .catch((e => {
                    console.log("error " + e);
                    response.send({
                        speech: "Algo salio mal al escribir en la BD"
                    });
                }))

            break;
        case 'ShowRSVP': //SHOW REGISTROS
            firestore.collection('tickets').get()
                .then((querySnapshot) => {
                    var tickets = [];
                    querySnapshot.forEach((doc) => {
                        tickets.push(doc.data())
                    });

                    var speech = `Tu tienes ${tickets.length} tickets \n`;
                    tickets.forEach((eachTicket, index) => {
                        speech += `El numero de ticket es  ${index + 1} para un equipo de ${eachTicket.hacker} con ${eachTicket.number} personas, reservados por ${eachTicket.name} y su correo de contacto es ${eachTicket.email} \n`
                    })
                    response.send({
                        speech: speech
                    });
                })
                .catch((err) => {
                    console.log("Error al obtener los datos del firestoe " + err);
                    response.send({
                        speech: "Algo salio mal al leer de la BD"
                    })
                })
            break;
        default:
            response.send({
                speech: "No hay action coincidente"
            })
    }
});









/*
Follow up intent
*/
//Para contar los registros de la BD

exports.evaluateActions = functions.https.onRequest((request, response) => {
    switch (request.body.result.action) {
        case 'RSVPHack': //REGISTRO
            let params = request.body.result.parameters;
            firestore.collection('tickets').add(params)
                .then(() => {
                    response.send({
                        speech: ` ${params.name} Tu registro para un equipo de ${params.hacker} con  ${params.number} personas, que ${params.time} han ido a un hack se ha realizado con exito,  te enviare y tus boletos al correo ${params.email} de inmediato `
                    });
                })
                .catch((e => {
                    console.log("error " + e);
                    response.send({
                        speech: "Algo salio mal al escribir en la BD"
                    });
                }))

            break;
        case 'CountRSVP': //SHOW REGISTROS
            firestore.collection('tickets').get()
                .then((querySnapshot) => {
                    var tickets = [];
                    querySnapshot.forEach((doc) => {
                        tickets.push(doc.data())
                    });
                    response.send({
                        speech: `Tu tienes ${tickets.length} tickets, te gustaria verlos?`
                    });
                })
                .catch((err) => {
                    console.log("Error al obtener los datos del firestoe " + err);
                    response.send({
                        speech: "Algo salio mal al leer de la BD"
                    })
                })
            break;

        case 'ShowRSVP': //SHOW REGISTROS
            firestore.collection('tickets').get()
                .then((querySnapshot) => {
                    var tickets = [];
                    querySnapshot.forEach((doc) => {
                        tickets.push(doc.data())
                    });

                    var speech = `Tu tienes ${tickets.length} tickets \n`;
                    tickets.forEach((eachTicket, index) => {
                        speech += `El numero de ticket es  ${index + 1} para un equipo de ${eachTicket.hacker} con ${eachTicket.number} personas, reservados por ${eachTicket.name} y su correo de contacto es ${eachTicket.email} \n`
                    })
                    response.send({
                        speech: speech
                    });
                })
                .catch((err) => {
                    console.log("Error al obtener los datos del firestoe " + err);
                    response.send({
                        speech: "Algo salio mal al leer de la BD"
                    })
                })
            break;
        default:
            response.send({
                speech: "No hay action coincidente"
            })
    }
});