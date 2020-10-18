console.log("");
console.log("//-----------------------------//");
console.log("No cosingo resolver el challenge :(");
console.log("//-----------------------------//");
console.log("");



const billetes = [{
        importe: 200
    },
    {
        importe: 100,
    },
    {
        importe: 50,
    },
    {
        importe: 20,
    },
    {
        importe: 10,
    },
    {
        importe: 5,
    },
];

const monedas = [{
        importe: 2
    },
    {
        importe: 1,
    },
    {
        importe: 0.50,
    },
    {
        importe: 0.20,
    },
    {
        importe: 0.10,
    },
    {
        importe: 0.05,
    },
    {
        importe: 0.02,
    },
    {
        importe: 0.01,
    },
];


var inputTotal = document.getElementById('total');
var inputPaid = document.getElementById('paid');
var buttonCalculate = document.getElementById('calculate');
var textResultBills = document.getElementById('result-bills');
var textResultCoins = document.getElementById('result-coins');

var result;
var refundAmount;
var refundAmountLog;
var resultMessage


var calculateRefundAmount = () => {

    result = inputPaid.value - inputTotal.value;

    refundAmount = result;

    console.log('Su compra cuesta: ', parseInt(inputTotal.value) + '€');
    console.log('Entrega de: ', parseInt(inputPaid.value) + '€');

    // Primer bucle, calcula el cambio en función de los billetes

    do {

        if (result >= 5) {

            console.log('Tenemos que devolver: ', result + '€');
            var i = -1;

            do {

                i++;

                refundAmount = result / billetes[i].importe;
                var numberOfBill = (parseInt(refundAmount, 10));
                result = result - (numberOfBill * billetes[i].importe);



                if (numberOfBill > 0) {

                    resultMessage = numberOfBill + ' billetes de: ' + billetes[i].importe + '€';

                    console.log(resultMessage);

                    var billInfo = document.createElement("p");
                    var billNode = document.createTextNode(resultMessage);

                    billInfo.appendChild(billNode);
                    textResultBills.appendChild(billInfo);

                }




            } while (refundAmount < 1)


        } else {

            resultMessage = 'No hay que devolver billetes';
            console.log(resultMessage);
            var billInfo = document.createElement("p");
            var node = document.createTextNode(resultMessage);

            billInfo.appendChild(node);
            textResultBills.appendChild(billInfo);
        }

    } while (result >= 5)

    // Segundo bucle, calcula el cambio en función de las monedas

    if (result > 0) {

        console.log('Tenemos que devolver: ', result + '€');
        console.log('Ahora vamos a buscar monedas...');

        var x = -1;

        do {

            x++;

            result = Math.round(result * 100) / 100;

            refundAmount = result / monedas[x].importe;           

            var numberOfBill = (parseInt(refundAmount, 10));

            if (numberOfBill > 0) {

                result = result - (numberOfBill * monedas[x].importe);
                result = Math.round(result * 100) / 100;
                resultMessage = numberOfBill + ' monedas de: ' + monedas[x].importe + '€'

                console.log(resultMessage);

                var coinInfo = document.createElement("p");
                var coinNode = document.createTextNode(resultMessage);

                coinInfo.appendChild(coinNode);
                textResultCoins.appendChild(coinInfo);
            }


            if (result > 0) {
                result = Math.round(result * 100) / 100;
                console.log('Nos siguen deviendo: ', result + '€');
            } else {
                result = Math.round(result * 100) / 100;
                console.log('No nos deben nada: ', result + '€');
            }


        } while (result > 0)

    } else {

        resultMessage = 'No nos tienen que devolver monedas';

        var billInfo = document.createElement("p");
        var node = document.createTextNode(resultMessage);

        billInfo.appendChild(node);
        textResultCoins.appendChild(billInfo);
    }
    return result;
}


function calculateFinalDevolution() {
    calculateRefundAmount();
}

buttonCalculate.addEventListener('click', calculateFinalDevolution);