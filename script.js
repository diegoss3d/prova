/*OBTER CONTROLE DOS ELEMENTOS-----------------------------------------------------------------*/
var nomeInput = document.querySelector('#welcome input')
var done = document.querySelector('#welcome button')
var boasVindas = document.querySelector('#welcome')
var corpo = document.querySelector('#field')
var ask = document.querySelector('#question')
done.addEventListener('click', start)
done.addEventListener('click', next)
//done.addEventListener('click', btn_block)


/*PEGAR QUESIONÁRIO JSON-----------------------------------------------------------------------*/
var questoes = fetch("https://raw.githubusercontent.com/diegoss3d/prova/master/questoes.json")

    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data[2]["enunciado"])
    });


function start(){
    nome = nomeInput.value;
    
    if (nome.length == 0){
        alert("ERRO! O campo 'nome' não pode estar vazio.")
    }else{        
        var boasVindasAtribute = document.createAttribute('style')
        boasVindasAtribute.value="style.display: block;";
        boasVindas.setAttributeNode(boasVindasAtribute);     
        return renderImage(), next();
    }

/*function btn_block(){
    document.done.disable = true
}*/
        
}

/*RENDERIZA A QUESTÃO--------------------------------------------------------------------------*/
/*CRIAçÃO E AJUSTE DA ILUSTRAçÃO DA QUESTÃO*/
function renderImage(){     
    var pos = 1
    var ilustracao = document.createElement('img');
    ilustracao.setAttribute('src', './imagens/1.png');
    ask.appendChild(ilustracao);
    var imgAtributo = document.createAttribute('style');
    imgAtributo.value="margin-left: 40%; margin-top: 40px;";
    ilustracao.setAttributeNode(imgAtributo);
    }
    

function next(){
    var btn_next = document.querySelector('section #next')
    var btnNextAtributo = document.createAttribute('style')
    corpo.appendChild(btn_next);
    /*btnNextAtributo.value="width: 500px; height: 50px; background-color: #2f4c8c; margin-top: 60%; margin-left: 13%;";*/
    btnNextAtributo.value="width: 700px; height: 50px; background-color: #2f4c8c; margin-top: 60%";
    btn_next.setAttributeNode(btnNextAtributo);
    var btn_text = document.createTextNode('Próxima');
    var txtAtributo = document.createAttribute('style')
    txtAtributo.value="color: #eceff3;";
    btn_next.appendChild(btn_text)
    btn_text.setAttribute(txtAtributo)
}





/*GERADOR DE QUESTÃO--------------------------------------------------------------------------*/
