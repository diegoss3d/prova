var corpo = document.getElementsByName('body')
var btnNext = document.querySelector('#next')
var pergunta = document.querySelector('form #txtPergunta')
var ilustra = document.querySelector('div#ilustracao')
var numBola = document.querySelector('#bola')
var abc = document.getElementsByName('option');
var pos = 0;

btnNext.addEventListener('click', next);
pergunta.innerHTML = 'Boa sorte, clique avançar para começar'

function next(){

    pos++
    numBola.innerHTML = pos
    console.log(pos)
    

    /*LER O ENUNCIADO*/
    fetch('questoes.json').then(function(response) {
        return response.json();
    }).then(function (dados) {        
        console.log(dados[pos]["enunciado"]);        
        pergunta.innerHTML = dados[pos]["enunciado"]
         

    
    
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
        
        var respostaCerta = dados[pos]["correct"]
        console.log(dados[pos]["correct"])

        if(escolha == respostaCerta){
            pontos += 1;
        };



    /*EXIBE ALTERNATIVAS*/
    var alternativa = document.getElementsByTagName('label')          
        alternativa[0].innerHTML = dados[pos]["alternativas"]["a"];
        alternativa[1].innerHTML = dados[pos]["alternativas"]["b"];
        alternativa[2].innerHTML = dados[pos]["alternativas"]["c"];
        alternativa[3].innerHTML = dados[pos]["alternativas"]["d"];
        alternativa[4].innerHTML = dados[pos]["alternativas"]["e"]; 
             
   


    /*EXIBE FOTOS*/
   
    
    
    return pos
});
    
};

