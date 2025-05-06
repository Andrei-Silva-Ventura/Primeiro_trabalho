let botao = document.querySelector("#botao")
let mensagem = document.querySelector("#mensagem")

let mensagens = [
    "Não importa o quão profundo é o desespero, sempre há esperança, (Edward Elric de Fullmetal Alchemist: Brotherhood)",
    "Trabalhe duro em silêncio. Deixe o sucesso fazer barulho, (Gojo Satoru de Jujutsu Kaisen)",
    "Não fuja, não se esconda. Encare a si mesmo de frente!, (Naruto Uzumaki de Naruto)",
    "Uma lição sem dor não tem sentido. É preciso sofrer para amadurecer, (Edward Elric de Fullmetal Alchemist: Brotherhood)",
    "Se você não arriscar nada, não poderá ganhar nada!, (Eren Yeager de Attack on Titan)",
    "Um herói não é aquele que nunca cai. É aquele que sempre se levanta!, (All Might de My Hero Academia)",
    "A fé em si mesmo é o primeiro passo para o sucesso, (Kenshin Himura de Rurouni Kenshin)",
    "Se você quiser proteger algo precioso, tem que lutar por isso, (Ichigo Kurosaki de Bleach)",
    "Mesmo que eu morra, não serei derrotado, (Gon Freecss de Hunter x Hunter)",
    "O mundo não é perfeito. Mas é lindo por causa disso, (Roy Mustang de Fullmetal Alchemist: Brotherhood)"
  ];

  let cores = [
    "red",
    "blue",
    "green",
    "purple",
    "orange",
    "teal",
    "pink",
    "brown",
    "gold",
    "violet"
  ];
  
  let indice = 0;
  
  botao.addEventListener("click", function() {
    mensagem.textContent = mensagens[indice];
    mensagem.style.color = cores[indice];
    botao.textContent = "Clique para ver outra frase";
    indice++;
    if (indice >= mensagens.length) {
      indice = 0; 
    }
  });