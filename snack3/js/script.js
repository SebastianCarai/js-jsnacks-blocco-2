const numbers = [10,5,13,33,7,2,6,10];

let somma=0;
for (i=1; i<numbers.length; i+=2){
    somma += numbers[i];
}
alert(somma);
