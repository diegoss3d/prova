/*OBTER CONTROLE DOS ELEMENTOS*/
var nomeInput = document.querySelector('#welcome input')
var done = document.querySelector('#welcome button')
var boasVindas = document.querySelector('#welcome')
var corpo = document.querySelector('#field')
var ask = document.querySelector('#question')
done.addEventListener('click', takeName)


/*PEGAR QUESIONÁRIO JSON*/
var questoes = fetch("https://raw.githubusercontent.com/diegoss3d/prova/master/questoes.json")

    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data[2]["enunciado"])
    });


function takeName(){
    nome = nomeInput.value;
    return renderQuestion()  
}

/*RENDERIZA A QUESTÃO*/
function renderQuestion(takeName){
    var pos = 1
    var ilustracao = document.createElement('img')
    ilustracao.setAttribute('src', './imagens/1.png')
    ask.appendChild(ilustracao)
    ilustracao = document.createAttribute('style')

}