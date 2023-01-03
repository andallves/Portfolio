//Animação do menu hamburger
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


//Animação dos Elementos ao scrollar a página
const observer = new IntersectionObserver(entries => {
    console.log(entries)

    Array.from(entries).forEach(entry => {
        if(entry.intersectionRatio >= 1) {
            entry.target.classList.add('init-hidden-off')
        }
    })   
})
Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})




