//Animação do menu hamburguer
document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);


//Animação dos Elementos ao scrollar a página
(function() {
    var $target = $('.projetos'),
        offset = $(window).height() * 3/4;
        offsetsaida = $(window).height() * 2/4;
        

    function animeScroll() {
        var documentTop = $(document).scrollTop()

        $target.each(function(){
            var itemTop = $('.projetos').offset().top;
            if((documentTop > (itemTop - offset)) && (documentTop < (itemTop + offsetsaida))) {
                $('.projetos').addClass('projetos-anime');
            } else {
                $('.projetos').removeClass('projetos-anime');
            }
        })
        
    }
    animeScroll();
    $(document).scroll(function() {
        animeScroll();
})
}());

/*Orçamento de projeto*/

document.querySelector('#qtde').addEventListener("change", atualizarPreco)
document.querySelector('#js').addEventListener("change", atualizarPreco)
document.querySelector('#layout-sim').addEventListener("change", atualizarPreco)
document.querySelector('#layout-nao').addEventListener("change", atualizarPreco)
document.querySelector('#prazo').addEventListener("change", function() {
    const prazo = document.querySelector('#prazo').value
    if(prazo == 1) {
        document.querySelector('label[for=prazo]').innerHTML = `Prazo de  ${prazo} semana`
    } else {
        document.querySelector('label[for=prazo]').innerHTML = `Prazo de  ${prazo} semanas`
    }
    atualizarPreco()
})


function atualizarPreco() {
    const qtde = document.querySelector('#qtde').value
    const temJS = document.querySelector('#js').checked
    const incluiLayout = document.querySelector('#layout-sim').checked
    const prazo = document.querySelector('#prazo').value

    let preco = qtde * 100
    if(temJS) preco *= 1.1
    if(incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo * 0.1
    preco *= 1 + taxaUrgencia

    document.querySelector('#preco').innerHTML = `R$ ${preco.toFixed(2)}`
    
}


