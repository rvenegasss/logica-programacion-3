function calcularFactorial() {
    // extraemos info del html y lo que ingrese el usuario
    const numeroInput = document.getElementById("numeroInput");
    const resultadoElement = document.getElementById("resultado");
  
    // ve que sea un nro 
    const numero = parseInt(numeroInput.value);
    
    if (isNaN(numero)) { 
      resultadoElement.textContent = "Por favor, ingrese un valor numérico válido.";
    } else {
      // calcula factorial (busqué la forma en internet)
      let factorial = 1;
      for (let i = 1; i <= numero; i++) {
        factorial *= i;
      }
  
      // muestra el resultado en la página
      resultadoElement.textContent = `El factorial de ${numero} es: ${factorial}`;
    }
  }