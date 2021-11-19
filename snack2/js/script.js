const names = ['mario' , 'alessia' , 'marco' , 'giulia'];
const lastNames = ['rossi' , 'bianchi' , 'generali' , 'parisi']

const randomNameNumber = Math.floor(Math.random() * (names.length));
const randomLastNameNumber = Math.floor(Math.random() * (lastNames.length));
console.log(randomNameNumber);
console.log(randomLastNameNumber);

let finalName;
for (i=0; i<names.length; i++){
    finalName = `
${names[randomNameNumber]} ${lastNames[randomLastNameNumber]}
    `
}

alert(finalName)
