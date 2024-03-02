const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
  }
  
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

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
        form.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                form.submit();
            }
        })
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

    if (currentSection != 'header') {
        scrollBtn.classList.add('show-button');
    } else {
        scrollBtn.classList.remove('show-button');
    }
});
scrollBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


const checkbox = document.getElementById('mode')
const trocar = document.getElementsByClassName('mode-trocar')
const rodape = document.getElementsByClassName('container-rodape')
const imgGit = document.getElementsByClassName('mode-img-git')
const fundoMode = document.getElementsByClassName('label-mode')
const bolaMode = document.getElementsByClassName('bola')
const fsGradient = document.getElementById('fullstack');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('light')
    

    for (let i = 0; i < trocar.length; i++) {
        if (checkbox.checked) {
            trocar[i].style.cssText = 'transition: 0.4s; color: black;'
            rodape[0].style.cssText = 'background: linear-gradient(to bottom, #bbb, #919192);'
            fundoMode[0].style.cssText = 'transition: 0.2s; background-color: #111;'
            bolaMode[0].style.cssText = 'transition: 0.2s; background-color: #fff;'
            fsGradient.style.cssText = 'transition: 0.3s; background: linear-gradient(to right, var(--cor-primaria), #004781); -webkit-background-clip: text; background-clip: text; color: transparent;'
        }
        else {
            trocar[i].style.cssText  = 'transition: 0.4s; color: white;'
            rodape[0].style.cssText = 'background: linear-gradient(to bottom, #1f1f21, #0d0d0e);'
            fundoMode[0].style.cssText = 'transition: 0.2s; background-color: #eee;'
            bolaMode[0].style.cssText = 'transition: 0.2s; background-color: #1f1f21;'
            fsGradient.style.cssText = 'transition: 0.3s; background: linear-gradient(to right, var(--cor-primaria), #6ebeff); -webkit-background-clip: text; background-clip: text; color: transparent;'
        }
    }
    for (let j = 0; j < imgGit.length; j++) {
        if (checkbox.checked) {
            imgGit[j].src = 'src/github-black.png'
        }
        else {
            imgGit[j].src = 'src/github.png'
        }
    }    
})


