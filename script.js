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
