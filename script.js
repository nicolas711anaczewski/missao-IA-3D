const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".novamente-btn");

const perguntas = [
    {
        enunciado: "oque voce acha sobre pessoas que fazem racismo",
        alternativas: [
            {
                texto: "eu acho pessoas que fazem racismo mal carater",
                afirmacao: [
                    "eu acho pessoas que fazem racismo mal carater ",
                    "afirmacao 2"
                    ]
            },
            {
                texto: "voce apoia o racismo ",
                afirmacao: [
                    "enfraquecer a altoestima,perpetuando o sentimento de inferioridade",
                    "nao, acho que o racismo ficou no passado"
                    ]
            }           
            
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto:"Alternativa 1 da pergunta 2",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            },
            {
                texto: "Alternativa 2 da pergunta 2",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            }
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto:"Alternativa 1 da pergunta 3",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            },
            {
                texto:"Alternativa 2 da pergunta 3",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            }
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.claslist.add("mostrar");
    botaoJogarNovamente.addEventlistener("click"; jogarNovamente);
}
function jogarNovamente {
    atua 
mostraPergunta();
