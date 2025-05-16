 const articles = [
    { title:"Manfaat Olahraga untuk Kesehatan Mental", content:"Olahraga dapat meningkatkan suasana hati, mengurangi stres, dan membantu tidur lebih nyenyak. Aktivitas fisik rutin adalah kunci untuk kesehatan mental yang optimal.", image:"img/img1.jpg" },
    { title:"Pentingnya Pola Makan Seimbang", content:"Makan makanan bergizi dan beragam memastikan tubuh mendapatkan vitamin dan mineral yang dibutuhkan untuk menjalankan fungsi dengan baik.", image:"img/img2.jpg" },
    { title:"Tips Mengelola Stres di Era Modern", content:"Pelajari teknik relaksasi seperti meditasi dan pernapasan dalam untuk menurunkan kadar stres dan meningkatkan fokus.", image:"img/img3.jpg" },
    { title:"Mengapa Tidur Cukup itu Wajib", content:"Tidur yang cukup membantu regenerasi sel, memperbaiki daya ingat, dan mempertahankan kekebalan tubuh.", image:"img/img4.jpg" },
    { title:"Bahaya Merokok dan Cara Berhenti", content:"Merokok meningkatkan risiko penyakit jantung dan kanker. Cari dukungan dan gunakan metode berhenti yang efektif.", image:"img/img5.jpg" },
    { title:"Peran Vitamin D untuk Tubuh", content:"Vitamin D membantu penyerapan kalsium dan menjaga tulang tetap kuat serta berperan dalam fungsi imun.", image:"img/img6.jpg" },
    { title:"Cara Menjaga Kesehatan Jantung", content:"Menjaga pola makan rendah lemak jenuh dan rutin olahraga dapat membantu menjaga fungsi jantung agar tetap sehat.", image:"img/img7.jpg" },
    { title:"Manfaat Minum Air Putih", content:"Minum air putih mencukupi membantu menjaga hidrasi, mendukung fungsi organ, dan mengoptimalkan metabolisme tubuh.", image:"img/img8.jpg" },
    { title:"Pentingnya Vaksinasi", content:"Vaksinasi melindungi dari berbagai penyakit serius dan membantu meningkatkan herd immunity di masyarakat.", image:"img/img9.jpg" },
    { title:"Cara Mengatasi Masalah Pencernaan", content:"Konsumsi serat tinggi dan minum air cukup dapat membantu sistem pencernaan agar bekerja optimal.", image:"img/img10.jpg" },
    { title:"Manfaat Yoga untuk Tubuh dan Pikiran", content:"Yoga meningkatkan fleksibilitas, mengurangi stres, dan meningkatkan kesehatan mental serta fisik secara menyeluruh.", image:"img/img11.jpg" },
    { title:"Mengenal Diabetes dan Pencegahannya", content:"Kontrol gula darah dan pola makan sehat sangat penting untuk mencegah dan mengelola diabetes.", image:"img/img12.jpg" },
    { title:"Kiat Tidur Lebih Nyenyak", content:"Matikan perangkat elektronik sebelum tidur dan ciptakan lingkungan tidur yang nyaman untuk kualitas tidur lebih baik.", image:"img/img13.jpg" },
    { title:"Olahraga Ringan untuk Penderita Asam Urat", content:"Latihan ringan seperti jalan kaki dan peregangan bisa membantu mengurangi gejala asam urat.", image:"img/img14.jpg" },
    { title:"Makanan Super untuk Imunitas", content:"Buah-buahan seperti jeruk, blueberry, dan sayuran hijau membantu meningkatkan sistem imun.", image:"img/img15.jpg" },
    { title:"Cara Menghindari Dehidrasi saat Cuaca Panas", content:"Minum air secara rutin dan hindari aktivitas berat pada siang hari untuk mencegah dehidrasi.", image:"img/img16.jpg" },
    { title:"Memahami Gejala Tekanan Darah Tinggi", content:"Gejala seperti sakit kepala dan pusing bisa jadi tanda tekanan darah tinggi yang harus segera diatasi.", image:"img/img17.jpg" },
    { title:"Manfaat Meditasi Harian", content:"Meditasi secara rutin membantu menenangkan pikiran dan mengurangi kecemasan.", image:"img/img18.jpg" },
    { title:"Nutrisi untuk Kesehatan Otak", content:"Kacang-kacangan dan ikan berlemak kaya omega-3 penting untuk fungsi otak yang optimal.", image:"img/img19.jpg" },
    { title:"Mengenal Gangguan Kecemasan", content:"Gangguan kecemasan dapat dikelola dengan terapi dan perubahan gaya hidup yang mendukung.", image:"img/img20.jpg" },
    { title:"Bahaya Konsumsi Gula Berlebihan", content:"Konsumsi gula berlebih dapat menyebabkan obesitas dan diabetes tipe 2.", image:"img/img21.jpg" },
    { title:"Kiat Merawat Kulit Sehat", content:"Membersihkan wajah rutin dan menggunakan tabir surya membantu menjaga kesehatan kulit.", image:"img/img22.jpg" },
    { title:"Cara Meningkatkan Konsentrasi", content:"Istirahat yang cukup dan diet seimbang membantu meningkatkan fokus dan konsentrasi.", image:"img/img23.jpg" },
    { title:"Tips Menurunkan Berat Badan Sehat", content:"Gabungkan pola makan sehat dan olahraga teratur untuk menurunkan berat badan dengan aman.", image:"img/img24.jpg" },
    { title:"Pentingnya Pemeriksaan Kesehatan Rutin", content:"Pemeriksaan kesehatan berkala membantu mendeteksi penyakit sejak dini.", image:"img/img25.jpg" },
    { title:"Mengatasi Migrain dengan Cara Alami", content:"Relaksasi dan konsumsi air cukup bisa mengurangi frekuensi migrain.", image:"img/img26.jpg" },
    { title:"Dampak Negatif Stres Kronis", content:"Stres kronis dapat menyebabkan penyakit jantung, depresi, dan masalah kesehatan kronis lainnya.", image:"img/img27.jpg" },
    { title:"Mengenal Penyakit Autoimun", content:"Penyakit autoimun terjadi ketika sistem imun menyerang jaringan tubuh sendiri.", image:"img/img28.jpg" },
    { title:"Kiat Memulai Pola Hidup Vegan", content:"Memulai pola makan vegan secara bertahap dan seimbang penting agar mendapat nutrisi lengkap.", image:"img/img29.jpg" },
    { title:"Panduan Menggunakan Suplemen dengan Aman", content:"Konsultasikan dengan dokter sebelum mengonsumsi suplemen agar aman dan efektif.", image:"img/img30.jpg" }
  ];

  const carouselSlider = document.getElementById('carouselSlider');
  const articlesContainer = document.getElementById('articles');
  const searchInput = document.getElementById('searchInput');

  let currentIndex = 0;
  const slideCount = 10;
  const slideWidth = 902;

  function createSlide(article) {
    return `
      <div class="carousel-slide" aria-label="Artikel kesehatan: ${article.title}" tabindex="0" >
        <div class="article-image" aria-hidden="true">
          <img src="${article.image}" alt="Gambar ilustrasi untuk ${article.title}" loading="lazy" />
        </div>
        <div class="article-content">
          <h3>${article.title}</h3>
          <p>${article.content}</p>
        </div>
      </div>
    `;
  }

  function renderCarousel() {
    const first10 = articles.slice(0, 10);
    carouselSlider.innerHTML = first10.map(createSlide).join('');
  }

  function slideNext() {
    currentIndex = (currentIndex + 1) % slideCount;
    carouselSlider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function createGridArticle(article) {
    return `
      <article class="article-card" tabindex="0" aria-label="Artikel kesehatan: ${article.title}">
        <div class="article-image" aria-hidden="true">
          <img src="${article.image}" alt="Gambar ilustrasi untuk ${article.title}" loading="lazy" />
        </div>
        <div class="article-content">
          <h3>${article.title}</h3>
          <p>${article.content}</p>
        </div>
      </article>
    `;
  }

  function renderGridArticles(query = '') {
    const grid = articles.slice(10);
    const filtered = grid.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.content.toLowerCase().includes(query.toLowerCase())
    );

    if(filtered.length === 0) {
      articlesContainer.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:#999; font-style:italic;">Tidak ada artikel yang ditemukan</p>';
      return;
    }
    articlesContainer.innerHTML = filtered.map(createGridArticle).join('');
    animateVisibleArticles();
  }

  function animateVisibleArticles() {
    const cards = document.querySelectorAll('#articles .article-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {threshold: 0.2});
    cards.forEach(card => observer.observe(card));
  }

  searchInput.addEventListener('input', e => {
    renderGridArticles(e.target.value);
  });

  function initCarousel() {
    renderCarousel();
    setInterval(() => {
      slideNext();
    }, 3500);
  }

  initCarousel();
  renderGridArticles();

  const navbar = document.getElementById('navbar');
  const header = document.querySelector('header');
  const searchSection = document.querySelector('.search-section');

  window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
      navbar.classList.add('scrolled');
      if(header) header.classList.add('fade-out');
      if(searchSection) searchSection.classList.add('fade-out');
    } else {
      navbar.classList.remove('scrolled');
      if(header) header.classList.remove('fade-out');
      if(searchSection) searchSection.classList.remove('fade-out');
    }
  });

  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if(targetSection){
        targetSection.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });
