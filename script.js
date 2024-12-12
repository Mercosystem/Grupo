function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

function showContent(id) {
    const contents = document.querySelectorAll('.content-item');
    const menuItems = document.querySelectorAll('.menu-item');

    // Oculta todos os conteúdos
    contents.forEach(item => item.classList.remove('active'));
    menuItems.forEach(item => item.classList.remove('active'));

    // Exibe apenas o conteúdo clicado
    const selectedContent = document.getElementById(id);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Destaca a categoria selecionada
    event.target.classList.add('active');
}

// Evento de rolagem da página
window.addEventListener('scroll', function () {
    const logo = document.querySelector('.fade-logo');
    const scrollY = window.scrollY || window.pageYOffset;
    const heroSectionHeight = document.querySelector('.hero-section').offsetHeight;

    // Calcula a opacidade e escala conforme a rolagem
    let opacity = 1 - (scrollY / (heroSectionHeight / 1.5)); // Ajusta o ponto onde começa a desaparecer
    let scale = 1 + (scrollY / heroSectionHeight) * 0.5; // Aumenta a escala conforme a rolagem

    // Garante que os valores estejam dentro dos limites
    opacity = Math.max(opacity, 0);
    scale = Math.min(scale, 1.5); // Define o tamanho máximo da escala (1.5x o original)

    // Aplica os estilos à logo
    logo.style.opacity = opacity;
    logo.style.transform = `scale(${scale})`;
});
