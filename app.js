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
            if (myTeam[i].availability[x] === true) {
                myTeam[i].availability[x] = 'Si';
            }else {
                myTeam[i].availability[x] = 'No';
            }
        }

    }
    return myTeam;
})()

// Función para crear la agenda

var checkAvailability = () => {
    for (var i = 0; i < myTeam.length; i++) {
        console.log('Disponibilidad de María', myTeam[i].name)

        for (var x = 0; x < myTeam[i].availability.length; x++) {
            console.log(WORK_HOURS[x] + ': ' + myTeam[i].availability[x]);               
        }
    }
}

console.log(checkAvailability());