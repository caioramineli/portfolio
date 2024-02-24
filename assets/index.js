document.addEventListener('DOMContentLoaded', function () {
    const palavra = '- Full Stack.';
    const elementoTexto = document.getElementById('fullstack');

    function escreverLetraPorLetra() {
        let index = 0;

        const intervalo = setInterval(function () {
            elementoTexto.textContent += palavra[index];
            index++;
            if (index === palavra.length) {
                clearInterval(intervalo);
                setTimeout(function () {
                    apagarLetraPorLetra();
                }, 1500);
            }
        }, 150);
    }

    function apagarLetraPorLetra() {
        let index = palavra.length - 1;

        const intervalo = setInterval(function () {
            elementoTexto.textContent = elementoTexto.textContent.slice(0, -1);
            index--;
            if (index < 0) {
                clearInterval(intervalo);
                setTimeout(function () {
                    escreverLetraPorLetra();
                }, 1500);
            }
        }, 100);
    }
    escreverLetraPorLetra();
});

var input = document.getElementsByClassName('input')

function abrirModal() {
    document.getElementById('modal').style.display = 'flex';
    input[0].focus();
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('span-form').style.display = 'none';
}

function tirarSpanForm() {
    document.getElementById('span-form').style.display = 'none';
}

var form = document.getElementById("form");
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("span-form");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.style.display = "inline";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Houve um problema ao enviar o email. Porfavor tente novamente!"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Houve um problema ao enviar o email. Porfavor tente novamente!"
    });
}
form.addEventListener("submit", handleSubmit)


const scrollBtn = document.getElementById('btn-scroll-inicio')
window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('.section');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (this.scrollY >= (sectionTop - sectionHeight / 2)) {
            currentSection = section.getAttribute('id');
        }
    });

    if (currentSection != 'topo') {
        scrollBtn.classList.add('show-button');
    } else {
        scrollBtn.classList.remove('show-button');
    }
});
scrollBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

