/* Zo'r Market — Aniq Narxlar va Mahsulotlar Katalogi */

document.addEventListener('DOMContentLoaded', () => {

  const products = [
    // Coca-Cola (Bakalashka 0.5, 1, 1.5, 2 litr)
    { name: "Coca-Cola 0.5 L (Bakalashka)", category: "drink", price: 7000, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400" },
    { name: "Coca-Cola 1.0 L (Bakalashka)", category: "drink", price: 11000, img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400" },
    { name: "Coca-Cola 1.5 L (Bakalashka)", category: "drink", price: 15000, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400" },
    { name: "Coca-Cola 2.0 L (Bakalashka)", category: "drink", price: 20000, img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400" },

    // Pepsi (Bakalashka 0.5, 1, 1.5, 2 litr)
    { name: "Pepsi 0.5 L (Bakalashka)", category: "drink", price: 7000, img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400" },
    { name: "Pepsi 1.0 L (Bakalashka)", category: "drink", price: 11000, img: "https://images.unsplash.com/photo-1543253687-c931c8e01820?w=400" },
    { name: "Pepsi 1.5 L (Bakalashka)", category: "drink", price: 15000, img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400" },
    { name: "Pepsi 2.0 L (Bakalashka)", category: "drink", price: 20000, img: "https://images.unsplash.com/photo-1543253687-c931c8e01820?w=400" },

    // Fanta (Bakalashka 0.5, 1, 1.5, 2 litr)
    { name: "Fanta 0.5 L (Bakalashka)", category: "drink", price: 7000, img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400" },
    { name: "Fanta 1.0 L (Bakalashka)", category: "drink", price: 11000, img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400" },
    { name: "Fanta 1.5 L (Bakalashka)", category: "drink", price: 15000, img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400" },
    { name: "Fanta 2.0 L (Bakalashka)", category: "drink", price: 20000, img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400" },

    // Banishni / Energetiklar va Moxito
    { name: "Flash Energetik (Banka)", category: "energy", price: 10000, img: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400" },
    { name: "Gorilla Energetik (Banka)", category: "energy", price: 10000, img: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400" },
    { name: "Jaguar Energetik (Banka)", category: "energy", price: 10000, img: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400" },
    { name: "Moxito Salqin Ichimlik", category: "energy", price: 12000, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400" },
    { name: "Adrenaline Rush (Banka)", category: "energy", price: 15000, img: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400" },

    // Sharbatlar
    { name: "Sochnaya Dolina Sharbat (1 L)", category: "juice", price: 12000, img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },
    { name: "Flavis Sharbat 0.5 L", category: "juice", price: 7000, img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400" },
    { name: "Flavis Sharbat 1.5 L", category: "juice", price: 12000, img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },
    { name: "Denay Sharbat (1 L)", category: "juice", price: 12000, img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400" },

    // Suvlar
    { name: "Chortoq Suv (Shishaidada)", category: "juice", price: 12000, img: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=400" },
    { name: "Chortoq Suv (Bakalashkada)", category: "juice", price: 12000, img: "https://images.unsplash.com/photo-1560023907-5f313c875d16?w=400" },
    { name: "Hydrolife Suv (Gazli)", category: "juice", price: 5000, img: "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=400" },
    { name: "Hydrolife Suv (Gazsiz)", category: "juice", price: 5000, img: "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=400" },

    // Meva va Sabzavotlar
    { name: "Pomidor (1 kg)", category: "fruit", price: 10000, img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400" },
    { name: "Banan (1 kg)", category: "fruit", price: 22000, img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400" },

    // Sut va Shokoladlar / Moloko
    { name: "Sut (1 L)", category: "sweet", price: 6000, img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400" },
    { name: "Alpen Gold Shokolad", category: "sweet", price: 14000, img: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400" },
    { name: "Nestle Shokolad", category: "sweet", price: 14000, img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400" },
    { name: "Sguyoshennoe Moloko 0.5 L", category: "sweet", price: 12000, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400" },
    { name: "Sguyoshennoe Moloko 0.7 L", category: "sweet", price: 14000, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400" },
    { name: "Sguyoshennoe Moloko (Katta)", category: "sweet", price: 25000, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400" }
  ];

  const productGrid = document.getElementById('productGrid');
  const searchInput = document.getElementById('searchInput');
  const catBtns = document.querySelectorAll('.cat-btn');

  function renderProducts(items) {
    productGrid.innerHTML = '';
    
    if (items.length === 0) {
      productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 30px;">Mahsulot topilmadi.</p>`;
      return;
    }

    items.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}" class="product-img" onerror="this.src='https://via.placeholder.com/400x300?text=Zo%27r+Market'">
        <div>
          <h3 class="product-title">${p.name}</h3>
          <p class="product-price">${p.price.toLocaleString()} so'm</p>
          <span class="product-status">✅ Do'konda mavjud</span>
        </div>
      `;
      productGrid.appendChild(card);
    });
  }

  // Filtrlar
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      
      if (cat === 'all') {
        renderProducts(products);
      } else {
        renderProducts(products.filter(p => p.category === cat));
      }
    });
  });

  // Qidiruv
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
  });

  renderProducts(products);
});
