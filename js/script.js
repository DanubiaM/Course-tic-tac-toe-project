let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let menssageContainer = document.querySelector("#message");
let textMessage = document.querySelector("#message p");
let secondPlayer;

// contador
let player1 = 0;
let player2 = 0;

//eventos nos boxes
for(let i=0;i<boxes.length; i++){
    
    //momento em que clica no jogo
    boxes[i].addEventListener("click", function(){
        let  el;
       
        if(player1 == player2){ // inicia-se os dois com valor padrao igual a 0
            //x
            el = x;
            player1++; // é computado uma jogada

            // IA  
            if(secondPlayer == "ia-player"){                
                computerPlayer();
                player2++;
            }
           
        }else{
            //o
            el = o; // el recebe o endereço
            player2++;
            
        }   

        // verificação se ja houve jogadas naquele box

        if(this.childNodes.length == 0){ // se o tamanho do nó filho for igual a 0 logo não foi adicionado nada ainda

            let cloneEl = el.cloneNode(true); // cloneEl vai receber uma copia do el
            this.appendChild(cloneEl); // this refere-se ao boxes[i]

        }
        
        // a cada jogada vai fazer a checagem de vitória

        checkWinCondition();
    });
}

//eventos dos botoes
for(let i=0; i< buttons.length; i++){
    buttons[i].addEventListener("click", function () {
        secondPlayer = this.getAttribute("id");
        
        // hide buttons
        for(let j=0; j< buttons.length; j++){
            buttons[j].style.display = "none";
        }
        // tempo para  aparecer o jogo
        setTimeout(function(){
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        },250);
    });

}

//verificação de quem ganhou
function checkWinCondition(){

    let b1= document.getElementById("block-11");
    let b2= document.getElementById("block-12");
    let b3= document.getElementById("block-13");
    let b4= document.getElementById("block-21");
    let b5= document.getElementById("block-22");
    let b6= document.getElementById("block-23");
    let b7= document.getElementById("block-31");
    let b8= document.getElementById("block-32");
    let b9= document.getElementById("block-33");

    //horizontal

    //primeira linha
    if(b1.childNodes.length >0 && b2.childNodes.length > 0 && b3.childNodes.length >0){
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;
    

        if(b1Child == "x" && b2Child == "x" && b3Child == "x"){
            declareWinner("x");
        }else if(b1Child == "o" && b2Child == "o" && b3Child == "o"){
            declareWinner("o");
        }
    }

    //segunda linha
    if(b4.childNodes.length >0 && b5.childNodes.length > 0 && b6.childNodes.length >0){
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
    

        if(b4Child == "x" && b5Child == "x" && b6Child == "x"){
            declareWinner("x");
        }else if(b4Child == "o" && b5Child == "o" && b6Child == "o"){
            declareWinner("o");
        }
    }
    //terceira linha
    if(b7.childNodes.length >0 && b8.childNodes.length > 0 && b9.childNodes.length >0){
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
    

        if(b7Child == "x" && b8Child == "x" && b9Child == "x"){
            declareWinner("x");
        }else if(b7Child == "o" && b8Child == "o" && b9Child == "o"){
            declareWinner("o");
        }
    }
    // vertical
    //coluna 1
    if(b1.childNodes.length >0 && b4.childNodes.length > 0 && b7.childNodes.length >0){
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
    

        if(b1Child == "x" && b4Child == "x" && b7Child == "x"){
            declareWinner("x");
        }else if(b1Child == "o" && b4Child == "o" && b7Child == "o"){
            declareWinner("o");
        }
    }
    //coluna 2

    if(b2.childNodes.length >0 && b5.childNodes.length > 0 && b8.childNodes.length >0){
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
    

        if(b2Child == "x" && b5Child == "x" && b8Child == "x"){
            declareWinner("x");
        }else if(b2Child == "o" && b5Child == "o" && b8Child == "o"){
            declareWinner("o");
        }
    }
    //coluna 3
    if(b3.childNodes.length >0 && b6.childNodes.length > 0 && b9.childNodes.length >0){
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
    

        if(b3Child == "x" && b6Child == "x" && b9Child == "x"){
            declareWinner("x");
        }else if(b3Child == "o" && b6Child == "o" && b9Child == "o"){
            declareWinner("o");
        }
    }

    // diagonal
    //diagonal primaria
    if(b1.childNodes.length >0 && b5.childNodes.length > 0 && b9.childNodes.length >0){
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
    

        if(b1Child == "x" && b5Child == "x" && b9Child == "x"){
            declareWinner("x");
        }else if(b1Child == "o" && b5Child == "o" && b9Child == "o"){
            declareWinner("o");
        }
    } 

    //diagonal secundaria
    if(b3.childNodes.length >0 && b5.childNodes.length > 0 && b7.childNodes.length >0){
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
    

        if(b3Child == "x" && b5Child == "x" && b7Child == "x"){
            declareWinner("x");
        }else if(b3Child == "o" && b5Child == "o" && b7Child == "o"){
            declareWinner("o");
        }
    }

    //velha
    let cont = 0;
    for(i=0; i<boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            cont++;
        }
    }
    if(cont == 9){
        declareWinner("VELHA");
    }
}

//limpa, win e atualiza
function declareWinner(winner){
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");
    let msg = '';

    if(winner == 'x'){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "WIN PLAYER 1";
    }else if( winner == 'o'){
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = "WIN PLAYER 2";
    }else{
        msg = 'VELHA!';
    }

    //impressao da msg
    textMessage.innerHTML = msg;
    menssageContainer.classList.remove("hide");

    //esconde msg
    setTimeout(function() {
        menssageContainer.classList.add("hide")  ;    
    }, 2000);

    //zera as jogadas
    player1 =0;
    player2 =0;
    //removendo x e y da tela
    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i=0; i< boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

// IA
function computerPlayer() {
    let cloneO = o.cloneNode(true);
    counter =0;
    filler =0;

    for(let i =0; i< boxes.length; i++){

        let randomNumber = Math.floor(Math.random() * 5); // numero aleatório de 0 a 5

        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;

            //verificação de quantidae de box preenchidas
            }else{
                filler++;
            }
        }
    }
    
    if(counter == 0 && filler <9 ){
        computerPlayer();
    }

    
}