function MudaImg(clique){
    document.querySelector('.starbucks').src = clique
}
function mudaCorCircle(cor){
    const circle = document.querySelector('.círculo');
    circle.style.background = cor;
}

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}
