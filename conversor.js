function Converter() {
    var valorElemento = document.getElementById("valor").value;
    var valorEmKm = parseFloat(valorElemento);
    var valorAnosLuz = valorEmKm * 1.057e-13;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado é " + valorAnosLuz + " anos luz";
    elementoValorConvertido.innerHTML = valorConvertido;
  
    console.log(valorConvertido);
  }
  