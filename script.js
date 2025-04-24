document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev-control');
    const nextBtn = document.querySelector('.next-control');
    const container = document.querySelector('.carousel-container');
    
    // Lista de imagens (substitua pelas suas)
    const images = [
        './assets/images/correia1.png',
        './assets/images/correia2.png',
        './assets/images/correia3.png',
        './assets/images/correia4.png',
        './assets/images/correia5.png',
        './assets/images/correia6.png', 
        './assets/images/correia7.png', 
        './assets/images/correia8.png'
    ];
    
    // Configurações
    const itemWidth = 330; // 300px + 15px margin de cada lado
    let currentPosition = 0;
    let isAnimating = false;
    
    // Cria um buffer circular com 3 cópias dos itens
    function initializeCarousel() {
      track.innerHTML = '';
      
      // Cria 3 cópias completas dos itens
      for (let i = 0; i < 3; i++) {
          images.forEach((img, index) => {
              const imgElement = document.createElement('img');
              imgElement.src = img;
              imgElement.alt = `Correia ${index + 1}`;
              imgElement.style.width = '300px';
              imgElement.style.height = '300px';
              imgElement.style.margin = '0 15px';
              // Adiciona um atributo data com o índice real
              imgElement.dataset.index = index;
              track.appendChild(imgElement);
          });
      }
      
      currentPosition = images.length * itemWidth;
      updateCarousel(true);
  }
    
    function updateCarousel(instant = false) {
        if (instant) {
            track.style.transition = 'none';
        } else {
            track.style.transition = 'transform 0.7s cubic-bezier(0.33, 1, 0.68, 1)';
        }
        track.style.transform = `translateX(-${currentPosition}px)`;
    }
    
    function nextSlide() {
        if (isAnimating) return;
        isAnimating = true;
        
        currentPosition += itemWidth;
        updateCarousel();
        
        // Verifica se precisa reposicionar
        if (currentPosition >= (images.length * 2) * itemWidth) {
            setTimeout(() => {
                currentPosition = images.length * itemWidth;
                updateCarousel(true);
                isAnimating = false;
            }, 700);
        } else {
            setTimeout(() => { isAnimating = false; }, 700);
        }
    }
    
    function prevSlide() {
        if (isAnimating) return;
        isAnimating = true;
        
        currentPosition -= itemWidth;
        updateCarousel();
        
        // Verifica se precisa reposicionar
        if (currentPosition <= 0) {
            setTimeout(() => {
                currentPosition = images.length * itemWidth;
                updateCarousel(true);
                isAnimating = false;
            }, 700);
        } else {
            setTimeout(() => { isAnimating = false; }, 700);
        }
    }
    
    // Inicialização
    initializeCarousel();
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Controle por touch
    let touchStartX = 0;
    track.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
    }, {passive: true});
    
    track.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) nextSlide();
        if (touchEndX - touchStartX > 50) prevSlide();
    }, {passive: true});
    
    // Redimensionamento
    window.addEventListener('resize', function() {
        updateCarousel(true);
    });

    // ... (todo o código existente do carrossel que você mostrou)

    // ============== ADICIONE A PARTIR DAQUI ==============
    // Dados das correias (adicione todas as informações que quiser mostrar)
    const correiasData = [
      {
          title: "Correia PVC verde 2 lonas",
          image: './assets/images/correia1.png',
          specs: [
              "Tipo: PVC verde 2 lonas",
              "Material: Policloreto de vinila (PVC)",
              "Sobre: A correia de PVC com 2 lonas é um componente utilizado em sistemas de transporte de materiais, especialmente em esteiras industriais. Seu revestimento externo é composto por PVC (policloreto de vinila), um material plástico que oferece boa resistência à abrasão, umidade e agentes químicos leves. A coloração verde é comum em aplicações industriais e facilita a visualização de resíduos e sujeiras, contribuindo para o controle de limpeza",
          ]
      },
      {
          title: "Correia PVC rasqueada",
          image: './assets/images/correia2.png',
          specs: [
              "Tipo: PVC rasqueada",
              "Material: Policloreto de vinila (PVC)",
              "Sobre: A correia de PVC rasqueada é um modelo específico de correia transportadora cuja principal característica está na sua superfície inferior, que passa por um processo de raspagem (ou rasqueamento). Esse processo remove parte do revestimento inferior da correia, deixando-o com uma textura rugosa ou fosca. O objetivo é melhorar a adesão ao tambor ou roletes de tração, reduzindo o risco de deslizamento durante o funcionamento.",
          ]
      },
      {
          title: "Correia Industrial 3",
          image: './assets/images/correia3.png',
          specs: [
              "Tipo: Especificações técnicas 3",
              "Material: Detalhes do material 3",
              "Aplicação: Onde é utilizada 3",
              "Resistência: Dados técnicos 3",
              "Vantagens: Benefícios deste modelo 3"
          ]
      },
      {
          title: "Correia Industrial 4",
          image: './assets/images/correia4.png',
          specs: [
              "Tipo: Especificações técnicas 4",
              "Material: Detalhes do material 4",
              "Aplicação: Onde é utilizada 4",
              "Resistência: Dados técnicos 4",
              "Vantagens: Benefícios deste modelo 4"
          ]
      },
      {
          title: "Correia Industrial 5",
          image: './assets/images/correia5.png',
          specs: [
              "Tipo: Especificações técnicas 5",
              "Material: Detalhes do material 5",
              "Aplicação: Onde é utilizada 5",
              "Resistência: Dados técnicos 5",
              "Vantagens: Benefícios deste modelo 5"
          ]
      },
      {
        title: "Correia Industrial 6",
        image: './assets/images/correia6.png',
        specs: [
            "Tipo: Especificações técnicas 6",
            "Material: Detalhes do material 6",
            "Aplicação: Onde é utilizada 6",
            "Resistência: Dados técnicos 6",
            "Vantagens: Benefícios deste modelo 6"
        ]
    },
    {
        title: "Correia Industrial 7",
        image: './assets/images/correia7.png',
        specs: [
            "Tipo: Especificações técnicas 7",
            "Material: Detalhes do material 7",
            "Aplicação: Onde é utilizada 7",
            "Resistência: Dados técnicos 7",
            "Vantagens: Benefícios deste modelo 7"
        ]
    },
    {
        title: "Correia Industrial 8",
        image: './assets/images/correia8.png',
        specs: [
            "Tipo: Especificações técnicas 8",
            "Material: Detalhes do material 8",
            "Aplicação: Onde é utilizada 8",
            "Resistência: Dados técnicos 8",
            "Vantagens: Benefícios deste modelo 8"
        ]
    },
  ];

  // Elementos do modal
  const modalOverlay = document.getElementById('modalOverlay');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalClose = document.getElementById('modalClose');
  
  // Função para abrir o modal
  // Substitua as funções openModal e closeModal por estas:

  function openModal(index) {
    // Calcula o índice correto considerando o array circular
    const realIndex = index % correiasData.length;
    const correia = correiasData[realIndex];
    
    // Preenche os dados do modal
    modalImage.src = correia.image;
    modalTitle.textContent = correia.title;
    
    // Limpa e preenche as especificações
    modalSpecs.innerHTML = '';
    correia.specs.forEach(spec => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${spec.split(':')[0]}:</strong> ${spec.split(':').slice(1).join(':')}`;
        modalSpecs.appendChild(p);
    });
    
    // Mostra o modal
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Força o reflow para garantir que as animações funcionem
    void modalOverlay.offsetWidth;
    
    // Ativa as animações
    modalOverlay.classList.add('active');
  }

function closeModal() {
  modalOverlay.classList.remove('active');
  
  // Reduzi o tempo de espera de 600ms para 200ms
  setTimeout(() => {
      if (!modalOverlay.classList.contains('active')) {
          modalOverlay.style.display = 'none';
          document.body.style.overflow = 'auto';
      }
  }, 100); // Agora fecha em 0.2 segundos
}

  // Adiciona eventos de clique nas imagens do carrossel
  const carouselImages = document.querySelectorAll('.carousel-track img');
  carouselImages.forEach((img) => {
    img.addEventListener('click', () => {
        const index = parseInt(img.dataset.index);
        openModal(index);
    });
});
  
  // Evento de fechar o modal
  modalClose.addEventListener('click', closeModal);
  
  // Fecha o modal ao clicar fora dele
  modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
  });
});