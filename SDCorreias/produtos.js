document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos do modal
    const modalProdutosOverlay = document.getElementById('modalProdutosOverlay');
    const modalProdutosImage = document.getElementById('modalProdutosImage');
    const modalProdutosTitle = document.getElementById('modalProdutosTitle');
    const modalProdutosDescription = document.getElementById('modalProdutosDescription');
    const modalProdutosClose = document.getElementById('modalProdutosClose');

    // Dados dos produtos
    const produtosData = [
        { title: 'Correia PVC verde 2 lonas', image: './assets/images/correia1.png', description: 'A correia de PVC com 2 lonas é um componente utilizado em sistemas de transporte de materiais, especialmente em esteiras industriais. Seu revestimento externo é composto por PVC (policloreto de vinila), um material plástico que oferece boa resistência à abrasão, umidade e agentes químicos leves. A coloração verde é comum em aplicações industriais e facilita a visualização de resíduos e sujeiras, contribuindo para o controle de limpeza' },
        { title: 'Correia PVC rasqueada', image: './assets/images/correia2.png', description: 'Descrição da Correia Industrial 2.' },
        { title: 'Correia PVC Azul', image: './assets/images/correia3.png', description: 'Descrição da Correia Industrial 3.' },
        { title: 'Correia PVC preta', image: './assets/images/correia5.png', description: 'Descrição da Correia Industrial 5.' },
        { title: 'Correia PVC verde 3 lonas', image: './assets/images/correia6.png', description: 'Descrição da Correia Industrial 6.' },
        { title: 'Correia PVC preta 2mm com Impressão Negativa', image: './assets/images/correia7.png', description: 'Descrição da Correia Industrial 7.' },
    ];

    // Seleciona todas as imagens da galeria
    const galleryImages = document.querySelectorAll('.galeria__grid img');

    // Adiciona o evento de clique para abrir o modal
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            const produto = produtosData[index]; // Obtém os dados do produto

            // Atualiza o conteúdo do modal
            modalProdutosImage.src = produto.image;
            modalProdutosTitle.textContent = produto.title;
            modalProdutosDescription.textContent = produto.description;

            // Exibe o modal
            modalProdutosOverlay.classList.add('active');
        });
    });

    // Fecha o modal ao clicar no botão de fechar
    modalProdutosClose.addEventListener('click', () => {
        modalProdutosOverlay.classList.remove('active');
    });

    // Fecha o modal ao clicar fora do conteúdo
    modalProdutosOverlay.addEventListener('click', (e) => {
        if (e.target === modalProdutosOverlay) {
            modalProdutosOverlay.classList.remove('active');
        }
    });
});