//Animação do menu hamburguer
document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);


//Animação do Scroll da página

$('nav a').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href'), targetOffset = $(id).offset().top;
    $('html, body').animate({scrollTop: targetOffset}, 1000)
    
});


//Animação dos Elementos ao scrollar a página
(function() {
    var $target = $('.projetos'),
        offset = $(window).height() * 3/4;
        offsetsaida = $(window).height() * 2/4;
        

    function animeScroll() {
        var documentTop = $(document).scrollTop()

        console.log(documentTop);
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

