/*PEGAR QUESIONÁRIO JSON
-----------------------------------------------------------------------*/
var corpo = document.getElementsByName('body')
/*var btnNext = document.querySelector('#next')*/
var pergunta = document.querySelector('form #txtPergunta')
var pos = 1;
console.log(pos)

function aumentaPos(proximaQuestao){
    pos += 1
}






function loadQuestion(){
    fetch('questoes.json').then(function(response) {
        return response.json();
    }).then(function (obj, proximaQuestao) {
        /*var pos = 1;*/
        var numPergunta = 1
        console.log(obj[1]["enunciado"]);
        pergunta.innerHTML = `${obj[pos]["enunciado"]}`

        
        var pontos = 0;

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

        console.log(obj[numPergunta]["correct"]);

        var respostaCerta = obj[pos]["correct"];

        if(escolha == respostaCerta){
            pontos ++;
        };
        


    });  

};



var btnNext = document.querySelector('button#next').addEventListener('click', proximaQuestao)
        

        function proximaQuestao(pos){
            pos += 1;
            alert('Foi')
        };
        
        proximaQuestao(aumentaPos())
