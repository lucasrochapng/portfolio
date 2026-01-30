//Eu sou
const texts = [
    "Desenvolvedor Web",
    "Desenvolvedor Mobile",
    "Freelancer"
];

const typingElement = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 120;   // velocidade digitando
const deletingSpeed = 80;  // velocidade apagando
const delayBetween = 1500; // pausa antes de apagar

function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, delayBetween);
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? deletingSpeed : typingSpeed
    );
}

typeEffect();

// PROJETOS

const filtros = document.querySelectorAll(".filtro");
const projetos = document.querySelectorAll(".projeto-item");

filtros.forEach(botao => {
    botao.addEventListener("click", () => {

        filtros.forEach(btn => btn.classList.remove("ativo"));
        botao.classList.add("ativo");

        const categoria = botao.getAttribute("data-filter");

        projetos.forEach(projeto => {
            if (categoria === "all" || projeto.classList.contains(categoria)) {
                projeto.style.display = "block";
            } else {
                projeto.style.display = "none";
            }
        });

    });
});
