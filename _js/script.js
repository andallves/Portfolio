document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);


//Animação do Scroll da página

$('nav a').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href'), targetOffset = $(id).offset().top;
    console.log(id)
    $('html, body').animate({scrollTop: targetOffset}, 1000)
    
});



