/* Zo'r Market — Faqat Oziq-ovqat Katalogi */

document.addEventListener('DOMContentLoaded', () => {

  // Faqat oziq-ovqat mahsulotlari bazasi
  const foodProducts = [
    { name: "Qizil Olma (1 kg)", category: "fruit", price: 15000, img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400" },
    { name: "Banan (1 kg)", category: "fruit", price: 22000, img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400" },
    { name: "Mandarin (1 kg)", category: "fruit", price: 28000, img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400" },
    { name: "Bozor Pomidori (1 kg)", category: "fruit", price: 18000, img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400" },
    { name: "Coca-Cola (1.5 L)", category: "drink", price: 14000, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400" },
    { name: "Tabiiy Meva Sharbati (1 L)", category: "drink", price: 18000, img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },
    { name: "Sut (1 L, 3.2%)", category: "drink", price: 11000, img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400" },
    { name: "Plitka Shokolad", category: "sweet", price: 25000, img: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400" },
    { name: "Nutella Krem (350g)", category: "sweet", price: 45000, img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400" },
    { name: "O'simlik Yog'i (1 L)", category: "grocery", price: 19000, img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400" },
    { name: "Guruch Alanga (1 kg)", category: "grocery", price: 24000, img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400" },
    { name: "Oliy Nav Un (1 kg)", category: "grocery", price: 12000, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" }
  ];

  const productGrid = document.getElementById('productGrid');
  const searchInput = document.getElementById('searchInput');
  const catBtns = document.querySelectorAll('.cat-btn');

  // Mahsulotlarni ekranga chiqarish (Tugmasiz, faqat narx va ma'lumot)
  function renderProducts(items) {
    productGrid.innerHTML = '';
    
    if (items.length === 0) {
      productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 30px;">Bunday oziq-ovqat topilmadi.</p>`;
      return;
    }

    items.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}" class="product-img" onerror="this.src='https://via.placeholder.com/400x300?text=Oziq-ovqat'">
        <div>
          <h3 class="product-title">${p.name}</h3>
          <p class="product-price">${p.price.toLocaleString()} so'm</p>
          <span class="product-status">✅ Do'konda mavjud</span>
        </div>
      `;
      productGrid.appendChild(card);
    });
  }

  // Filtr tugmalari
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      
      if (cat === 'all') {
        renderProducts(foodProducts);
      } else {
        renderProducts(foodProducts.filter(p => p.category === cat));
      }
    });
  });

  // Qidiruv
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = foodProducts.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
  });

  // Dastlab barchasini ko'rsatish
  renderProducts(foodProducts);
});
