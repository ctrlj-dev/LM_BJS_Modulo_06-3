//Datos

// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
var myTeam = [{
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },

    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];


// Función para aleatorizar la disponibilidad del equipo
// Extra: autoejecuta al final


var getRandomAvailability = (() => {
    var randomBoolean = () => Math.random() >= 0.5;
    for (var i = 0; i < myTeam.length; i++) {

        for (var x = 0; x < myTeam[i].availability.length; x++) {
            var saveboolean = randomBoolean()
            myTeam[i].availability[x] = saveboolean;

        }

    }
    return myTeam;
})()


// Función para crear la agenda

var createAgenda = (() => {

    for (var i = 0; i < myTeam.length; i++) {

        console.log('Disponibilidad de', myTeam[i].name)

        for (var x = 0; x < myTeam[i].availability.length; x++) {
            myTeam[i].availability[x];
            if (myTeam[i].availability[x] === true) {
                console.log(WORK_HOURS[x] + ': ' + 'Si');
            } else {
                console.log(WORK_HOURS[x] + ': ' + 'No');
            }
        }

    }

})()



// Función para comparar la agenda de todos los miembros y buscar un hueco donde todos estén disponibles

var output = new Array(8).fill(true);
var apointment = false;

var compareAgenda = (() => {

    for (var j = 0; j < getRandomAvailability.length; j++) {
        for (var i = 0; i < getRandomAvailability.length; i++) {
            output[j] = output[j] && getRandomAvailability[i].availability[j];
        }

        if (output[j]) {
            apointment = true;
            console.log('/*============================*/');
            console.log('Hay hueco a las', WORK_HOURS[j]);
            console.log('/*============================*/');
        }

    }
    if (apointment === false) {
        console.log('/*============================*/');
        console.log('Lo sentimos, no hay hueco disponible');
        console.log('/*============================*/');

    }

})();