var corpo = document.getElementsByName('body')
var btnNext = document.querySelector('#next')
var pergunta = document.querySelector('form #txtPergunta')
var ilustra = document.querySelector('div#ilustracao')
var pos = 1;
console.log(next())

btnNext.addEventListener('click', next);

function next(){
    pos++
    console.log(pos)
    return pos
    
}next();
//loadQuestion(pos);
//respostaUser(pos);
//renderAlternatives();



/*
LER O ENUNCIADO
 */
function loadQuestion(){
    fetch('questoes.json').then(function(response) {
        return response.json();
    }).then(function (txtEnunciado) {
        next(pos)
        console.log(txtEnunciado[pos]["enunciado"]);        
        pergunta.innerHTML = `${txtEnunciado[pos]["enunciado"]}`
        pergunta = ''
    }); next(pos)
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
         next(pos)       
    }); 
}//respostaUser()



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
        next(pos)       
    });
}//renderAlternatives()


function renderImage(){    
    var ilustra = document.querySelector('img#ilustracao')
    ilustra.setAttribute('id', 'foto')
    if(pos == 1){        
        document.querySelector('img#foto').src="./imagens/1.png";     
    }else if(pos == 2){
        document.querySelector('img#foto').src="./imagens/2.png";
    }else if(pos == 3){
        document.querySelector('img#foto').src="./imagens/3.png";
    }else if(pos == 4){
        document.querySelector('img#foto').src="./imagens/4.png";
    }else if(pos == 5){
        document.querySelector('img#foto').src="./imagens/5.png";
    }else if(pos == 6){
        document.querySelector('img#foto').src="./imagens/6.png";
    }else if(pos == 7){
        document.querySelector('img#foto').src="./imagens/7.png";
    }else if(pos == 8){
        document.querySelector('img#foto').src="./imagens/8.png";
    }else if(pos == 9){
        document.querySelector('img#foto').src="./imagens/9.png";
    }else if(pos == 10){
        document.querySelector('img#foto').src="./imagens/10.png";
    }
};