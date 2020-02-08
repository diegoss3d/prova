/*PEGAR QUESIONÁRIO JSON
-----------------------------------------------------------------------*/
var questoes = fetch("https://raw.githubusercontent.com/diegoss3d/prova/master/questoes.json")

    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data[2]["enunciado"])
    });

var btnNext = document.querySelector('button #next')
btnNext.addEventListener('click', loadQuestion)

function loadQuestion(){
    alert('funciona')
}