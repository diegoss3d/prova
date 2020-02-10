var corpo = document.getElementsByName('body')
var btnNext = document.querySelector('#next')
var pergunta = document.querySelector('form #txtPergunta')
var pos = 0;
console.log(next(pos++))

btnNext.addEventListener('click', next);

function next(_loadQuestion, _respostaCerta, _renderAlternatives){
    pos++
    //console.log(pos)
    return pos
    
}next();
loadQuestion();
respostaUser();
//renderAlternatives();



/*
LER O ENUNCIADO
 */
function loadQuestion(){
    fetch('questoes.json').then(function(response) {
        return response.json();
    }).then(function (txtEnunciado) {
        //next()
        console.log(txtEnunciado[pos]["enunciado"]);        
        pergunta.innerHTML = `${txtEnunciado[pos]["enunciado"]}`
        pergunta = ''
    });  
};



/*
VERIFICAR RESPOSTA DO USUÁRIO
 */
function respostaUser(){
    fetch('questoes.json').then(function(response) {
        return response.json();
    }).then(function (txtResposta) {
        //var pos = 1
        console.log(txtResposta[1]["correct"]);
        var abc = document.getElementsByName('option');
        var escolha = ''

        if(abc[0].checked) {
            escolha == 'a'
        }else if(abc[1].checked) {
            escolha == 'b'
        }else if(abc[2].checked) {
            escolha == 'c'
        }else if(abc[3].checked) {
            escolha =='d'
        }else{
            escolha == 'e'
        };
        
        var respostaCerta = txtResposta[1]["correct"];

        if(escolha == respostaCerta){
            pontos += 1;
        };
         //next()       
    }); 
}respostaUser()



/*EXIBE ALTERNATIVAS*/
var alternativa = document.getElementsByTagName('label')

function renderAlternatives(){
    fetch('questoes.json').then(function(response) {
        return response.json();
    }).then(function (txtAlternativa) {        
        alternativa[0].innerHTML += txtAlternativa[pos]["alternativas"]["a"];
        alternativa[1].innerHTML += txtAlternativa[pos]["alternativas"]["b"];
        alternativa[2].innerHTML += txtAlternativa[pos]["alternativas"]["c"];
        alternativa[3].innerHTML += txtAlternativa[pos]["alternativas"]["d"];
        alternativa[4].innerHTML += txtAlternativa[pos]["alternativas"]["e"]; 
        //next()       
    });
}renderAlternatives()