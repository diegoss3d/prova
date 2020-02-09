var corpo = document.getElementsByName('body')
/*var btnNext = document.querySelector('#next')*/
var pergunta = document.querySelector('form #txtPergunta')
pos = 1
console.log(pos)


/*
LER O ENUNCIADO
 */
function loadQuestion(proximaQuestao){
    fetch('questoes.json').then(function(response) {
        return response.json();
    }).then(function (txtEnunciado) {
        console.log(txtEnunciado[1]["enunciado"]);
        pergunta.innerHTML = `${txtEnunciado[1]["enunciado"]}`
    });  
};



/*
VERIFICAR RESPOSTA DO USUÁRIO
 */
function respostaUser(proximaQuestao){
    fetch('questoes.json').then(function(response) {
        return response.json();
    }).then(function (txtResposta) {
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
                
    }); 
}respostaUser()



/*EXIBE ALTERNATIVAS*/
var alternativa = document.getElementsByTagName('label')

function renderAlternatives(proximaQuestao){
    fetch('questoes.json').then(function(response) {
        return response.json();
    }).then(function (txtAlternativa) {        
        alternativa[0].innerHTML += txtAlternativa[1]["alternativas"]["a"];
        alternativa[1].innerHTML += txtAlternativa[1]["alternativas"]["b"];
        alternativa[2].innerHTML += txtAlternativa[1]["alternativas"]["c"];
        alternativa[3].innerHTML += txtAlternativa[1]["alternativas"]["d"];
        alternativa[4].innerHTML += txtAlternativa[1]["alternativas"]["e"];    
                
    });
}renderAlternatives()


var btnAvancar = document.querySelector('button#next').addEventListener('click', proximaQuestao)
        
var acrescenta = (pos, incremento){
    pos ++
};

function proximaQuestao(){
    alert(counter.add())
}
