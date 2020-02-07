/*OBTER CONTROLE DOS ELEMENTOS-----------------------------------------------------------------*/
var nomeInput = document.querySelector('#welcome input')
var done = document.querySelector('#welcome button')
var boasVindas = document.querySelector('#welcome')
var corpo = document.querySelector('#field')
var ask = document.querySelector('#question')
done.addEventListener('click', takeName)


/*PEGAR QUESIONÁRIO JSON-----------------------------------------------------------------------*/
var questoes = fetch("https://raw.githubusercontent.com/diegoss3d/prova/master/questoes.json")

    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data[2]["enunciado"])
    });


function takeName(){
    nome = nomeInput.value;
    boasVindas.style.display = "block";
    var boasVindasAtribute = document.createAttribute('style')
    boasVindasAtribute.value="style.display: block;";
    boasVindas.setAttributeNode(boasVindasAtribute);
    return renderQuestion();    
}

/*RENDERIZA A QUESTÃO--------------------------------------------------------------------------*/
/*CRIAçÃO E AJUSTE DA ILUSTRAçÃO DA QUESTÃO*/
function renderQuestion(takeName){
    var pos = 1
    var ilustracao = document.createElement('img');
    ilustracao.setAttribute('src', './imagens/1.png');
    ask.appendChild(ilustracao);
    var imgAtributo = document.createAttribute('style');
    imgAtributo.value="margin-left: 50px; margin-top: 40px;";
    ilustracao.setAttributeNode(imgAtributo);

    /*CRIAçÃO E AJUSTE DO BOTÃO AVANçAR*/
    var avanca = document.createElement('button');
    var botaoAtributo = document.createAttribute('style');
    avanca.setAttributeNode(botaoAtributo);
    ask.appendChild(avanca);
    botaoAtributo.value="width: 120px; height: 40px; background-color: #bd2332; margin-left: 10%; margin-top: 20px;";
    var textAvanca = document.createTextNode('Avançar')
    avanca.appendChild(textAvanca)
}


function nextQuestion(){
    
}


/*GERADOR DE QUESTÃO--------------------------------------------------------------------------*/
function geraQuestao(){
    var pos = 1
}