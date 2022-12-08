function maiornumero(){
    var num1 = parseInt(document.getElementById('campo-A').value);
    var num2 = parseInt(document.getElementById('campo-B').value);

    var maiornumero = num1;

    if(num2 > maiornumero){
        maiornumero = num2
        alert(maiornumero + ': É maior');
    } else {
        alert('É menor!');
    }
}




