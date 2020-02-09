/*PEGAR QUESIONÁRIO JSON
-----------------------------------------------------------------------*/
var corpo = document.getElementsByName('body')
var btnNext = document.querySelector('#next')
var pergunta = document.querySelector('form #txtPergunta')




function loadQuestion(win, doc){
    fetch('questoes.json').then(function(response) {
        return response.json();
    }).then(function (obj) {
        console.log(obj[1]["enunciado"])
        pergunta.innerHTML = `${obj[4]["enunciado"]}`
    });

    

};

