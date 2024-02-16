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
              apagarLetraPorLetra();
            }, 1500);
          }
        }, 150);
      }

    function apagarLetraPorLetra() {
      let index = palavra.length - 1;

      const intervalo = setInterval(function() {
        elementoTexto.textContent = elementoTexto.textContent.slice(0, -1);
        index--;
        if (index < 0) {
          clearInterval(intervalo);
          setTimeout(function() {
            escreverLetraPorLetra();
          }, 1500);
        }
      }, 100);
    }
    escreverLetraPorLetra();
});

function abrirModal() {
    document.getElementById('modal').style.display = 'inline';
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}