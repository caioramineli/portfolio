document.addEventListener('DOMContentLoaded', function() {
    const palavra = '- Full Stack.';
    const elementoTexto = document.getElementById('fullstack');

    function escreverLetraPorLetra() {
      let index = 0;
  
      const intervalo = setInterval(function() {
        elementoTexto.textContent += palavra[index];
        index++;
        if (index === palavra.length) {
          clearInterval(intervalo);
          setTimeout(function() {
            elementoTexto.textContent = '';
            escreverLetraPorLetra();
          }, 1500);
        }
      }, 200);
    }
    escreverLetraPorLetra();
});


