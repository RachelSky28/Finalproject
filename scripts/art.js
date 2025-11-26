const artData = [
    {
        id: 1,
        name: "The Metropolitan Museum of Art",
        category: "museum",
        tags: ["Painting", "Sculpture", "Architecture"],
        description: "[TETX].",
        mainImage: "https://via.placeholder.com/400x300?text=The+Met",
        images: [
            "https://via.placeholder.com/400x300?text=The+Met+1",
            "https://via.placeholder.com/400x300?text=The+Met+2",
            "https://via.placeholder.com/400x300?text=The+Met+3"
        ]
    },
    {
        id: 2,
        name: "MoMA - Museum of Modern Art",
        category: "museum",
        tags: ["Painting", "Photography", "Sculpture"],
        description: "[TETX]",
        mainImage: "https://via.placeholder.com/400x300?text=MoMA",
        images: [
            "https://via.placeholder.com/400x300?text=MoMA+1",
            "https://via.placeholder.com/400x300?text=MoMA+2",
            "https://via.placeholder.com/400x300?text=MoMA+3"
        ]
    },
    {
        id: 3,
        name: "Bushwick Street Art",
        category: "public",
        tags: ["Mural", "Street Art", "Contemporary"],
        description: "[TETX]",
        mainImage: "https://via.placeholder.com/400x300?text=Bushwick",
        images: [
            "https://via.placeholder.com/400x300?text=Bushwick+1",
            "https://via.placeholder.com/400x300?text=Bushwick+2",
            "https://via.placeholder.com/400x300?text=Bushwick+3"
        ]
    },
    {
        id: 4,
        name: "Guggenheim Museum",
        category: "museum",
        tags: ["Architecture", "Sculpture", "Photography"],
        description: "[TETX]",
        mainImage: "https://via.placeholder.com/400x300?text=Guggenheim",
        images: [
            "https://via.placeholder.com/400x300?text=Guggenheim+1",
            "https://via.placeholder.com/400x300?text=Guggenheim+2",
            "https://via.placeholder.com/400x300?text=Guggenheim+3"
        ]
    },
    {
        id: 5,
        name: "Williamsburg Gallery District",
        category: "gallery",
        tags: ["Contemporary", "Painting", "Mixed Media"],
        description: "[TETX]",
        mainImage: "https://via.placeholder.com/400x300?text=Williamsburg",
        images: [
            "https://via.placeholder.com/400x300?text=Williamsburg+1",
            "https://via.placeholder.com/400x300?text=Williamsburg+2",
            "https://via.placeholder.com/400x300?text=Williamsburg+3"
        ]
    },
    {
        id: 6,
        name: "High Line Public Art",
        category: "public",
        tags: ["Installation", "Sculpture", "Contemporary"],
        description: "[TETX]",
        mainImage: "https://via.placeholder.com/400x300?text=High+Line",
        images: [
            "https://via.placeholder.com/400x300?text=High+Line+1",
            "https://via.placeholder.com/400x300?text=High+Line+2",
            "https://via.placeholder.com/400x300?text=High+Line+3"
        ]
    },
    {
        id: 7,
        name: "Flatiron Building",
        category: "architecture",
        tags: ["Architecture", "Historic", "Photography"],
        description: "[TETX]",
        mainImage: "https://via.placeholder.com/400x300?text=Flatiron",
        images: [
            "https://via.placeholder.com/400x300?text=Flatiron+1",
            "https://via.placeholder.com/400x300?text=Flatiron+2",
            "https://via.placeholder.com/400x300?text=Flatiron+3"
        ]
    },
    {
        id: 8,
        name: "Lower East Side Gallery Walk",
        category: "gallery",
        tags: ["Contemporary", "Photography", "Mixed Media"],
        description: "[TETX]",
        mainImage: "https://via.placeholder.com/400x300?text=LES",
        images: [
            "https://via.placeholder.com/400x300?text=LES+1",
            "https://via.placeholder.com/400x300?text=LES+2",
            "https://via.placeholder.com/400x300?text=LES+3"
        ]
    }
];

function renderArtCards(filterType = 'all') {
    const container = document.getElementById('cardsContainer');

    container.innerHTML = '';

    let filteredData;
    if (filterType === 'all') {
        // show all cards
        filteredData = artData;
    } else {
        // show only cards that match the filter
        filteredData = artData.filter(card => card.category === filterType);
    }

    filteredData.forEach(card => {
        const cardHTML = `
      <div class="art-card">
        <div class="card-image-section">
          <div class="main-image">
            <img src="${card.mainImage}" alt="${card.name}">
          </div>
          <div class="carousel-thumbnails">
            ${card.images.map((image, index) => `
              <img src="${image}" alt="Thumbnail ${index + 1}" class="thumbnail" onclick="updateCardImage(this, ${card.id})">
            `).join('')}
          </div>
        </div>
        <div class="card-content">
          <h3>${card.name}</h3>
          <div class="tags">
            ${card.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <p>${card.description}</p>
        </div>
      </div>
    `;

        container.innerHTML += cardHTML;
    });
}

function updateCardImage(thumbnailElement, cardId) {
    const mainImage = thumbnailElement.closest('.card-image-section').querySelector('.main-image img');
    mainImage.src = thumbnailElement.src;
}

function changeCarouselImage(thumbnailElement) {
    const carouselMain = document.getElementById('carouselMain');
    carouselMain.src = thumbnailElement.src;
}

function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterType = this.getAttribute('data-filter');
            renderArtCards(filterType);
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    setupFilterButtons();
    renderArtCards('all');
});