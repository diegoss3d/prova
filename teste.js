/*PEGANDO JSON DA REDE*/
/*var dados = fetch("https://raw.githubusercontent.com/diegoss3d/prova/master/teste.json")

    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data[0])
    });



    /*PEGANDO JSON LOCAL*/
    /*fetch('questoes.json').then(function(response) {
        return response.json();
    }).then(function (obj) {
        console.log(obj[1]["enunciado"])
    });*/







/*var corpo = document.getElementsByName('body')
var btnNext = document.querySelector('#next')
var pergunta = document.querySelector('form #txtPergunta')*/





/*function loadQuestion(jsonObj){
    questoes = document.write = data[2]["enunciado"]
};

<p><input type="radio" name="option" id="option" value=""> e)</p>*/


/*
function respostaUser(){
    fetch('questoes.json').then(function(response) {
        return response.json();
    }).then(function (txtResposta) {
        console.log(txtResposta[1]["enunciado"]);
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
*/


/*var pos = 0
var add = function() {
    return ++pos; 
}

console.log(add());
console.log(add());
console.log(add());


var itens = [];
var add = function (item){
    itens.push(item);
    return itens;
};

console.log(add('A'));
console.log(add('B'));
console.log(add('C'));

console.log(add());*/


var counter = {
    pos: 0,
    add: function acrescenta(){
        return ++this.pos
    }
};

function proximaQuestao(btnAvancar){
    alert(counter.add())
}






