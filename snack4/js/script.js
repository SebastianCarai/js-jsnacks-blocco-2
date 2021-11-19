const numbers=[];  

let somma=0;

while (somma<50){
    const singleNumber = parseInt(prompt('numero'));
    somma += singleNumber;
    numbers.push(singleNumber);
}

alert ('i numeri sono ' + numbers);
alert('la somma è ' + somma);