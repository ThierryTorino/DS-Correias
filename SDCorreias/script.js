document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev-control');
    const nextBtn = document.querySelector('.next-control');
    const container = document.querySelector('.carousel-container');
    
    // Lista de imagens (substitua pelas suas)
    const images = [
        './assets/images/PVCAzul.jpg',
        './assets/images/PVCBranca.jpg',
        './assets/images/PVCVerde.jpg',
        './assets/images/coreiatt.jpg',
        './assets/images/correiaCorrugada.jpg', 
        './assets/images/PUNegativa.jpg', 
        './assets/images/talisca.jpg',
        './assets/images/correiaFosca.jpg',
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
          title: "Correia PVC Azul",
          image: './assets/images/PVCAzul.jpg',
          specs: [
              "Tipo: PVC azul",
              "Material: Policloreto de vinila (PVC)",
              "Sobre: A correia de PVC azul é um tipo de correia transportadora revestida com policloreto de vinila (PVC) na cor azul, projetada para atender principalmente setores que exigem controle sanitário rigoroso e facilidade de higienização. A cor azul é amplamente utilizada na indústria alimentícia e farmacêutica por ser facilmente detectável visualmente, já que não é comum em alimentos naturais, facilitando a identificação de contaminações.",
          ]
      },
      {
          title: "Correia PVC Branca",
          image: './assets/images/PVCBranca.jpg',
          specs: [
              "Tipo: PVC Branca",
              "Material: Policloreto de vinila (PVC)",
              "Sobre: A correia de PVC branca é um modelo amplamente utilizado em setores que exigem elevados padrões de higiene e segurança, como indústrias alimentícias, farmacêuticas e cosméticas. Sua principal característica é o revestimento na cor branca, que facilita a visualização de sujeiras, contaminantes e danos superficiais, contribuindo para o controle de qualidade e para práticas de segurança sanitária.",
          ]
      },
      {
          title: "Correia PVC Verde",
          image: './assets/images/PVCVerde.jpg',
          specs: [
              "Tipo: PVC verde",
              "Material: Policloreto de vinila (PVC)",
              "Sobre: A correia de PVC verde é um dos modelos mais utilizados em sistemas de transporte industrial, devido à sua versatilidade, resistência e custo-benefício. O revestimento externo em PVC (policloreto de vinila) oferece uma superfície resistente à abrasão, fácil de limpar e com boa tolerância a agentes químicos leves, óleos e umidade.",

          ]
      },
      {
          title: "Correia tecido tecido (TT)",
          image: './assets/images/coreiatt.jpg',
          specs: [  
              "Tipo: tecido tecido (TT)",
              "Material: Tecido",
              "Sobre: A correia tecido-tecido (TT) é um modelo de correia transportadora caracterizado pela presença de camadas de tecido em ambas as faces, sem a aplicação de revestimento em PVC ou borracha. Sua estrutura é formada exclusivamente por lonas de tecido sintético, geralmente de poliéster ou poliamida, que garantem flexibilidade, leveza e resistência mecânica.",
          ]
      },
      {
        title: "Correia Corrugada",
        image: './assets/images/correiaCorrugada.jpg',
        specs: [
            "Tipo: PVC Corrugada",
            "Material: Policloreto de vinila (PVC)",
            "Sobre: A correia corrugada é um tipo de correia transportadora que possui uma superfície com relevo ondulado ou em formato de ondas (corrugado). Esse design proporciona maior aderência ao material transportado, reduzindo significativamente o risco de deslizamento, especialmente em aplicações inclinadas ou com produtos soltos.",

        ]
    },
    {
        title: "Correia PU com impressao negativa",
        image: './assets/images/PUNegativa.jpg',
        specs: [
            "Tipo: PU com impressao negativa",
            "Material: Poliuretano (PU)",
            "Sobre: A correia de PU com impressão negativa é um tipo de correia transportadora que se destaca pelo seu revestimento em poliuretano (PU) e pela presença de um relevo rebaixado na superfície, conhecido como impressão negativa. Esse tipo de acabamento cria padrões afundados que oferecem melhor tração e escoamento de líquidos ou partículas, reduzindo o risco de deslizamento dos produtos transportados.",
        ]
    },
    {
                title: "Correia de PVC Pata de Andorinha",
                image: './assets/images/talisca.jpg',
                specs: [
                    "Tipo: PVC Pata de Andorinha",
                    "Material: Policloreto de vinila (PVC)",
                    "Sobre: A correia de PVC com relevo do tipo pata de andorinha é um modelo desenvolvido para oferecer maior aderência e tração durante o transporte de materiais, especialmente em aplicações com inclinação. Seu principal diferencial está na superfície superior, que possui um padrão em formato de “V” invertido, semelhante à pegada de uma andorinha — por isso o nome."
                ]
            },
    {
                title: "Correia de PVC preta fosca",
                image: './assets/images/correiaFosca.jpg',
                specs: [
                    "Tipo: PVC preta fosca",
                    "Material: Policloreto de vinila (PVC)",
                    "Sobre: A correia de PVC preta fosca é um modelo amplamente utilizado em sistemas de transporte industrial e logístico que demandam uma superfície com baixo nível de reflexo, boa resistência mecânica e facilidade de manutenção. O acabamento fosco reduz o brilho da superfície, evitando reflexos indesejados em ambientes com iluminação intensa, o que melhora as condições de segurança visual e ergonomia para operadores."
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
