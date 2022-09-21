function parcela1() {
    setTimeout (function() {
        console.log ('pagar ')
    } , 1000)

} 

function parcela2() {
    setTimeout(function() {
        console.log ('receber')
    });

}

function parcela3() {
    setTimeout(function() {
        console.log('decolar');
    } , 2000)

};
 
function trabalhar() {
   setTimeout (function() {
    console.log ('trablhar')
    parcela2();
   }, 800)
}


parcela1();
trabalhar();
parcela3();
