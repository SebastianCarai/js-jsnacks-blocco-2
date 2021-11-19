const numbers=[];  

let somma=0;

while (somma<50){
    const singleNumber = parseInt(prompt('numero'));
    if (!isNaN(singleNumber)){
        somma += singleNumber;
        numbers.push(singleNumber);
    }
}

alert ('i numeri sono: ' + numbers);
alert('la somma è: ' + somma);