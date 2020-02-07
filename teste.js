"use strict";

var dados = fetch("https://raw.githubusercontent.com/diegoss3d/prova/master/teste.json")

    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data[0])
    });