/*PEGAR QUESIONÁRIO JSON
-----------------------------------------------------------------------*/
var questoes = fetch("https://raw.githubusercontent.com/diegoss3d/prova/master/questoes.json")

    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data[2]["enunciado"])
    });
var corpo = document.getElementsByName('body')
var btnNext = document.querySelector('#next')
corpo.addEventListener('load', loadQuestion)
var pergunta = document.querySelector('div #askText')


function loadQuestion(){
    pergunta.innerHTML = data[2]["enunciado"]
}

