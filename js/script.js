// Ordenando ingressos por preco
document.addEventListener('DOMContentLoaded', function(){

    lista = document.querySelectorAll(".organiza");      // seleciona a classe 


    botao5 = document.querySelector('.sort')             // seleciona a classe
    click5 = false                                       // estado inicial do botao
    botao5.addEventListener('click', function(event){
        if (click5==false){

            lista[0].src = "Images/jb_1740.jpeg"
            lista[1].src = "Images/jb_1685.jpeg"
            lista[2].src = "Images/jb_625.jpeg"
            lista[3].src = "Images/jb_1590.jpeg"
            lista[4].src = "Images/jb_1550.jpeg"
            lista[5].src = "Images/jb_1500.jpeg"
            click5 = true
        }
    
        else{

            lista[0].src = "Images/jb_1500.jpeg"
            lista[1].src = "Images/jb_1550.jpeg"
            lista[2].src = "Images/jb_1590.jpeg"
            lista[3].src = "Images/jb_625.jpeg"
            lista[4].src = "Images/jb_1685.jpeg"
            lista[5].src = "Images/jb_1740.jpeg" 
            click5 = false
        }

    })

})

// Selcionado pagamento
document.addEventListener('DOMContentLoaded', function(){

    cards = document.querySelectorAll('.cartao1') 
    card1 = cards[0]
    cards_x = document.querySelectorAll('.cartao2') 
    cardx = cards_x[0]
    cards_y = document.querySelectorAll('.cartao3') 
    cardy = cards_y[0]



    botao = document.querySelector('.cartao1')            // seleciona a classe
    click = false                                         // estado inicial do botao
    botao.addEventListener('click', function(event){
        if (click==false){
            card1.style.border = '0.2rem solid #000000'
            click = true
        }else{
            card1.style.border = '0'
            click = false                                   // reseta o botao para o estado inicial
        }
    })

    botao2 = document.querySelector('.cartao2')             // seleciona a classe 
    click2 = false                                          // estado inicial do botao
    botao2.addEventListener('click', function(event){
        if (click2==false){
            cardx.style.border = '0.2rem solid #000000'
            click2 = true
        }else{
            cardx.style.border = '0'
            click2 = false                                   // reseta o botao para o estado inicial
        }
    })


    botao3 = document.querySelector('.cartao3')               // seleciona a classe
    click3 = false                                            // estado inicial do botao
    botao3.addEventListener('click', function(event){
        if (click3==false){
            cardy.style.border = '0.2rem solid #000000'
            click3 = true
        }else{
            cardy.style.border = '0'
            click3 = false                                    // reseta o botao para o estado inicial
        }
    })



})

// Diferindo Botoes
document.addEventListener('DOMContentLoaded', function(){

    // Seletor dos botões
    const botaoborda = document.querySelector('#botaoborda');
    const botaoborda2 = document.querySelector('#botaoborda2');

    // Aplicando bordas arredondadas aos botões
    botaoborda.style.borderRadius = '10px';
    botaoborda2.style.borderRadius = '10px';

})



