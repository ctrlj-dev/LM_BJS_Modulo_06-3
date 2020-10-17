const billetes = [{
        cantidad: 2,
        importe: 200
    },
    {
        cantidad: 4,
        importe: 100,
    },
    {
        cantidad: 3,
        importe: 50,
    },
    {
        cantidad: 1,
        importe: 20,
    },
    {
        cantidad: 2,
        importe: 10,
    },
    {
        cantidad: 1,
        importe: 5,
    },
];

const monedas = [{
        cantidad: 4,
        importe: 2
    },
    {
        cantidad: 1,
        importe: 1,
    },
    {
        cantidad: 2,
        importe: 0.50,
    },
    {
        cantidad: 3,
        importe: 0.20,
    },
    {
        cantidad: 10,
        importe: 0.10,
    },
    {
        cantidad: 5,
        importe: 0.05,
    },
    {
        cantidad: 10,
        importe: 0.02,
    },
    {
        cantidad: 10,
        importe: 0.01,
    },
];


var inputTotal = document.getElementById('total');
var inputPaid = document.getElementById('paid');
var buttonCalculate = document.getElementById('calculate');
var inputResult = document.getElementById('result');

var result;
var refundAmount;
var refundAmountLog;


var calculateRefundAmount = () => {

    result = inputPaid.value - inputTotal.value;
    refundAmount = result;
    console.log('Su compra cuesta: ', parseInt(inputTotal.value) + '€');
    console.log('Entrega de: ', parseInt(inputPaid.value) + '€');

    // Primer bucle, calcula el cambio en función de los billetes
  
    do {
    
        if (result > 0) {

            console.log('Tenemos que devolver: ', result + '€');
            var i = -1;

            do {

                i++;

                refundAmount = result / billetes[i].importe;
                var numberOfBill = (parseInt(refundAmount, 10));
                result = result - (numberOfBill * billetes[i].importe);  

                if(numberOfBill > 0) {
                    console.log('Nos dan ' + numberOfBill + ' billetes de: ', billetes[i].importe + '€');                 
                }                              

            } while (refundAmount < 1)            
           

        } else {
            console.log('No hay que devolver nada');
        }

    } while (result > 5)

    // Segundo bucle, calcula el cambio en función de las monedas

    if (result > 0) {

        console.log('Tenemos que devolver: ', result + '€');
        console.log('Ahora vamos a buscar monedas...');        
        var x = -1;

        do {

            x++;

            refundAmount = result / monedas[x].importe;
            var numberOfBill = (parseInt(refundAmount, 10)); 
            result = result - (numberOfBill * monedas[x].importe);  
            console.log('Nos dan ' + numberOfBill + ' monedas de: ', monedas[x].importe + '€');
            
            if (result > 0) {
                console.log('Nos siguen deviendo: ', result + '€');
            } else {
                console.log('No nos deben nada: ', result + '€');
            }

        } while (result > 0)
    }

    return result;
}


function calculateFinalDevolution() {

    calculateRefundAmount();
    inputResult.value = result;

}

buttonCalculate.addEventListener('click', calculateFinalDevolution);