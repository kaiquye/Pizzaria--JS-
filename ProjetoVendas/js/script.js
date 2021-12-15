
 
var valorQuantidadeMussarela = document.getElementById('quantidadeMussarela');
var valorMussarela = document.getElementById("valorMussarela");
var valorQuantidadeMista = document.getElementById('quantidadeMista');
var valorMista = document.getElementById('valorMista');
var valorQuantidadeCalabresa = document.getElementById('quantidadeCalabresa');
var valorCalabresa = document.getElementById('valorCalabresa');

function Main (){

    this.valor = 0.00;
    this.quantidade = 0;
    
}
 
Main.prototype.calcularQuantidade = function(quant){
    this.quantidade = this.quantidade + quant;
};

Main.prototype.calcularValor = function(valor){
    this.valor = this.valor + valor;
}

Main.prototype.removerItem = function(val){
 
    if(this.valor >= val){
        this.valor = (this.valor - val);
        this.quantidade =  (this.quantidade - 1);
        console.log(this.quantidade + this.valor)
    }else{
        alert("Erro, não tem pizzas para ser retirada.")
    }
 
}


Main.prototype.scriptBtnAdicionar = function(e, obj){
    if(document.getElementById('Calabresa').checked){
        obj.calcularQuantidade(1);
        obj.calcularValor(25.00);
        let resultadoQuantidade = obj.quantidade;
        let valoPizza = obj.valor;
        valorQuantidadeCalabresa.innerHTML =  resultadoQuantidade;
        valorCalabresa.innerHTML = valoPizza.toFixed(2); 
    }else if(document.getElementById('Mista').checked){
        obj.calcularQuantidade(1);
        obj.calcularValor(19.00);
        let resultadoQuantide = obj.quantidade;
        let valorPizza = obj.valor;
        valorQuantidadeMista.innerHTML = resultadoQuantide;
        valorMista.innerHTML= valorPizza.toFixed(2);
    }else if (document.getElementById('Mussarela').checked){
        obj.calcularQuantidade(1);
        obj.calcularValor(59.00);
        let resultadoQuantide = obj.quantidade;
        let valorPizza = obj.valor;
        valorQuantidadeMussarela.innerHTML = resultadoQuantide;
        valorMussarela.innerHTML= valorPizza.toFixed(2);
    }
}
Main.prototype.scriptBtnRemover = function(e, obj){
    if(document.getElementById('Calabresa').checked){
            obj.removerItem(25.00);
            let resultadoQuantidade = obj.quantidade;
            let valoPizza = obj.valor;
            valorQuantidadeCalabresa.innerHTML =  resultadoQuantidade;
            valorCalabresa.innerHTML = valoPizza.toFixed(2); 
    } 

}

 
 

let Calabresa = new Main();
let Mussarela = new Main();
let Mista = new Main();

function adicionarItem(e){
    
        if(document.getElementById('Calabresa').checked){
            if(e === 1){
                Calabresa.scriptBtnRemover(e, Calabresa);
            }else{
                Calabresa.scriptBtnAdicionar(e, Calabresa);
            }
        }else if(document.getElementById('Mista').checked){
            if(e === 1){
                Mista.scriptBtnRemover(e, Mista);
            }else{
                Mista.scriptBtnAdicionar(e, Mista);
            }
        }else if(document.getElementById('Mussarela').checked){
            if(e === 1){
                Mussarela.scriptBtnRemover(e, Mista);
            }else{
                Mussarela.scriptBtnAdicionar(e, Mussarela)
            }
        }

}
 
let btnRem = document.getElementById('delElement').addEventListener('click', function(){adicionarItem(1)});
let btnAdd = document.getElementById('addElement').addEventListener('click', function(){adicionarItem(0)});
 
 
 
