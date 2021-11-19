const numbers = [10,5,13,33,7,2,6,10];

if(numbers.length>2){
    let somma=0;
    for (i=1; i<numbers.length; i+=2){
        somma += numbers[i];
    }
    alert(somma);
} else{
    alert('non ci sono numeri in posizioni dispari')
}    