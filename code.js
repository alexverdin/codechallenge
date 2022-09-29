var texto = [];
var tetxtOrigin = 'easteregg';
document.addEventListener('keypress',(event) => {
    texto.push(event.key);
    console.log(texto);
    if(texto.join('') === tetxtOrigin){
        alert('You got a chocolate!')
    }else if(texto.length === tetxtOrigin.length ) {
        alert('You did not get  a chocolate')
    }
})