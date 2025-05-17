const articles = [
  { title:"Manfaat Olahraga untuk Kesehatan Mental", content:"Olahraga secara rutin tidak hanya baik untuk tubuh secara fisik, tetapi juga sangat berpengaruh positif terhadap kesehatan mental. Aktivitas fisik dapat meningkatkan produksi hormon endorfin yang membantu meningkatkan suasana hati, mengurangi kecemasan dan stres, serta membantu Anda tidur lebih nyenyak. Selain itu, olahraga juga meningkatkan daya tahan tubuh dan kemampuan kognitif, sehingga membantu menjaga kesehatan otak secara keseluruhan.", image:"img/img1.jpg" },
  { title:"Pentingnya Pola Makan Seimbang", content:"Memiliki pola makan yang seimbang dan bergizi sangat penting untuk menunjang kesehatan tubuh secara keseluruhan. Makan berbagai jenis makanan yang kaya akan vitamin, mineral, protein, lemak sehat, dan karbohidrat kompleks memastikan tubuh mendapatkan nutrisi yang dibutuhkan untuk menjalankan berbagai fungsi biologis dengan baik. Pola makan yang seimbang juga membantu menjaga berat badan ideal, mencegah berbagai penyakit kronis, dan meningkatkan energi serta daya tahan tubuh.", image:"img/img2.jpg" },
  { title:"Tips Mengelola Stres di Era Modern", content:"Di tengah tuntutan kehidupan modern yang semakin tinggi, mengelola stres menjadi kunci untuk menjaga kesehatan mental. Teknik relaksasi seperti meditasi, pernapasan dalam, yoga, dan mindfulness dapat membantu menurunkan kadar hormon stres dalam tubuh. Selain itu, mengatur waktu dengan baik, melakukan hobi, dan menjaga pola tidur juga penting untuk meningkatkan fokus dan kesejahteraan secara keseluruhan.", image:"img/img3.jpg" },
  { title:"Mengapa Tidur Cukup itu Wajib", content:"Tidur yang cukup dan berkualitas sangat penting bagi kesehatan fisik dan mental. Saat tidur, tubuh melakukan regenerasi sel, memperbaiki jaringan yang rusak, dan memproses informasi yang telah diterima selama aktivitas sehari-hari. Kurang tidur dapat menyebabkan penurunan daya ingat, gangguan konsentrasi, hingga melemahkan sistem kekebalan tubuh yang membuat kita lebih rentan terhadap penyakit.", image:"img/img4.jpg" },
  { title:"Bahaya Merokok dan Cara Berhenti", content:"Merokok merupakan salah satu kebiasaan berbahaya yang meningkatkan risiko berbagai penyakit serius seperti kanker, penyakit jantung, dan gangguan pernapasan. Berhenti merokok dapat menjadi proses yang sulit, namun dengan dukungan dari keluarga, teman, serta metode yang tepat seperti terapi pengganti nikotin atau konseling, peluang untuk berhasil jauh lebih besar. Berhenti merokok juga membawa banyak manfaat kesehatan dalam jangka pendek dan panjang.", image:"img/img5.jpg" },
  { title:"Peran Vitamin D untuk Tubuh", content:"Vitamin D memiliki peran vital dalam menjaga kesehatan tulang dan sistem imun. Vitamin ini membantu tubuh menyerap kalsium dan fosfor yang penting untuk menjaga kepadatan tulang dan mencegah osteoporosis. Selain itu, vitamin D juga berkontribusi dalam melindungi tubuh dari infeksi dan penyakit autoimun. Paparan sinar matahari secara cukup adalah salah satu cara alami untuk mendapatkan vitamin D.", image:"img/img6.jpg" },
  { title:"Cara Menjaga Kesehatan Jantung", content:"Menjaga kesehatan jantung sangat penting untuk mencegah penyakit kardiovaskular yang dapat berakibat fatal. Pola makan rendah lemak jenuh, rutin berolahraga, mengelola stres, serta menjaga berat badan ideal adalah beberapa cara efektif untuk menjaga fungsi jantung tetap optimal. Menghindari kebiasaan merokok dan rutin memeriksakan kesehatan juga membantu mendeteksi masalah jantung sejak dini.", image:"img/img7.jpg" },
  { title:"Manfaat Minum Air Putih", content:"Minum air putih dalam jumlah yang cukup setiap hari sangat penting untuk menjaga hidrasi tubuh. Air membantu mendukung berbagai fungsi organ seperti ginjal, jantung, dan otak, serta mengoptimalkan proses metabolisme dan pembuangan racun dari tubuh. Kurangnya konsumsi air dapat menyebabkan dehidrasi yang berdampak buruk pada kesehatan fisik dan konsentrasi.", image:"img/img8.jpg" },
  { title:"Pentingnya Vaksinasi", content:"Vaksinasi merupakan salah satu metode pencegahan penyakit yang paling efektif dan aman. Dengan mendapatkan vaksin, tubuh membentuk kekebalan terhadap berbagai penyakit menular, sehingga melindungi individu dan masyarakat melalui kekebalan kelompok (herd immunity). Vaksinasi juga berperan penting dalam mengurangi angka kematian dan penyebaran wabah penyakit.", image:"img/img9.jpg" },
  { title:"Cara Mengatasi Masalah Pencernaan", content:"Masalah pencernaan dapat diatasi dengan menjaga pola makan yang sehat dan gaya hidup yang tepat. Mengonsumsi makanan tinggi serat seperti buah, sayur, dan biji-bijian, serta memastikan kecukupan cairan dengan minum air putih membantu melancarkan sistem pencernaan. Hindari makanan berlemak tinggi dan terlalu pedas, serta kelola stres agar sistem pencernaan berfungsi optimal.", image:"img/img10.jpg" },
  { title:"Manfaat Yoga untuk Tubuh dan Pikiran", content:"Yoga adalah latihan yang menggabungkan gerakan tubuh, pernapasan, dan meditasi yang memberikan manfaat menyeluruh bagi kesehatan fisik dan mental. Dengan rutin berlatih yoga, fleksibilitas tubuh meningkat, otot menjadi lebih kuat, dan keseimbangan tubuh terjaga. Selain itu, yoga juga efektif untuk mengurangi stres, kecemasan, dan meningkatkan kesehatan mental secara keseluruhan.", image:"img/img11.jpg" },
  { title:"Mengenal Diabetes dan Pencegahannya", content:"Diabetes adalah kondisi kronis yang ditandai dengan kadar gula darah yang tinggi. Pencegahan dan pengelolaan diabetes sangat penting melalui kontrol gula darah, pola makan sehat yang rendah gula dan karbohidrat sederhana, serta aktivitas fisik teratur. Memantau kondisi kesehatan secara rutin dan menghindari faktor risiko seperti obesitas juga membantu mencegah berkembangnya diabetes.", image:"img/img12.jpg" },
  { title:"Kiat Tidur Lebih Nyenyak", content:"Untuk mendapatkan kualitas tidur yang baik, hindari penggunaan perangkat elektronik seperti ponsel atau laptop sebelum tidur karena cahaya biru dapat mengganggu produksi melatonin. Ciptakan lingkungan tidur yang nyaman dengan suhu yang sejuk, gelap, dan tenang. Rutinitas relaksasi seperti membaca buku atau meditasi juga dapat membantu mempercepat proses tertidur dan menjaga tidur tetap nyenyak.", image:"img/img13.jpg" },
  { title:"Olahraga Ringan untuk Penderita Asam Urat", content:"Penderita asam urat disarankan untuk melakukan olahraga ringan seperti jalan kaki, peregangan, atau yoga guna mengurangi rasa nyeri dan kekakuan pada sendi. Aktivitas fisik membantu meningkatkan sirkulasi darah dan mengurangi peradangan. Namun, hindari olahraga yang terlalu berat atau yang dapat memberikan tekanan berlebihan pada sendi agar tidak memperparah kondisi.", image:"img/img14.jpg" },
  { title:"Makanan Super untuk Imunitas", content:"Beberapa jenis makanan dikenal sebagai superfood karena kandungan nutrisinya yang tinggi dan mampu meningkatkan sistem imun. Buah-buahan seperti jeruk dan blueberry kaya akan vitamin C dan antioksidan, sementara sayuran hijau mengandung berbagai vitamin dan mineral penting. Konsumsi makanan tersebut secara rutin dapat membantu tubuh melawan infeksi dan menjaga kesehatan secara umum.", image:"img/img15.jpg" },
  { title:"Cara Menghindari Dehidrasi saat Cuaca Panas", content:"Pada saat cuaca panas, tubuh kehilangan banyak cairan melalui keringat sehingga risiko dehidrasi meningkat. Untuk menghindarinya, pastikan minum air putih secara teratur meskipun tidak merasa haus, dan hindari aktivitas berat pada siang hari. Mengenakan pakaian yang ringan dan berwarna cerah juga membantu menjaga suhu tubuh tetap stabil.", image:"img/img16.jpg" },
  { title:"Memahami Gejala Tekanan Darah Tinggi", content:"Tekanan darah tinggi sering disebut sebagai silent killer karena banyak orang tidak menyadari kondisinya. Gejala seperti sakit kepala, pusing, penglihatan kabur, dan sesak napas dapat menjadi tanda tekanan darah tinggi yang perlu segera diatasi. Pemeriksaan rutin dan pengelolaan gaya hidup sehat sangat penting untuk mencegah komplikasi seperti stroke atau serangan jantung.", image:"img/img17.jpg" },
  { title:"Manfaat Meditasi Harian", content:"Meditasi adalah latihan mental yang membantu menenangkan pikiran dan meningkatkan kesadaran diri. Melakukan meditasi secara rutin dapat mengurangi kecemasan, menurunkan tekanan darah, dan meningkatkan kualitas tidur. Meditasi juga membantu memperkuat fokus dan mengembangkan rasa empati serta ketenangan batin dalam menghadapi tekanan hidup sehari-hari.", image:"img/img18.jpg" },
  { title:"Nutrisi untuk Kesehatan Otak", content:"Otak membutuhkan nutrisi khusus untuk berfungsi secara optimal, terutama asam lemak omega-3 yang banyak ditemukan pada kacang-kacangan dan ikan berlemak seperti salmon. Nutrisi ini berperan dalam menjaga komunikasi antar sel otak dan melindungi otak dari kerusakan. Mengonsumsi makanan sehat juga membantu meningkatkan daya ingat, konsentrasi, dan mencegah penurunan fungsi kognitif.", image:"img/img19.jpg" },
  { title:"Mengenal Gangguan Kecemasan", content:"Gangguan kecemasan merupakan kondisi yang ditandai oleh rasa cemas dan takut yang berlebihan serta sulit dikendalikan. Gangguan ini dapat mempengaruhi kualitas hidup jika tidak ditangani dengan baik. Terapi psikologis, perubahan gaya hidup, dan dalam beberapa kasus penggunaan obat-obatan dapat membantu mengelola gejala dan mendukung pemulihan.", image:"img/img20.jpg" },
  { title:"Bahaya Konsumsi Gula Berlebihan", content:"Mengonsumsi gula secara berlebihan dapat menyebabkan berbagai masalah kesehatan seperti obesitas, diabetes tipe 2, serta gangguan metabolisme. Gula tambahan pada makanan dan minuman olahan juga dapat meningkatkan risiko penyakit jantung dan gangguan hati. Mengurangi konsumsi gula dan menggantinya dengan pilihan yang lebih sehat sangat dianjurkan untuk menjaga kesehatan.", image:"img/img21.jpg" },
  { title:"Kiat Merawat Kulit Sehat", content:"Merawat kulit secara rutin sangat penting untuk menjaga kesehatan dan penampilan. Membersihkan wajah secara teratur membantu menghilangkan kotoran dan minyak berlebih, sementara penggunaan tabir surya melindungi kulit dari kerusakan akibat paparan sinar UV. Selain itu, perbanyak konsumsi air dan nutrisi yang baik juga mendukung kesehatan kulit dari dalam.", image:"img/img22.jpg" },
  { title:"Cara Meningkatkan Konsentrasi", content:"Konsentrasi yang baik dapat diperoleh dengan menjaga pola hidup sehat. Istirahat yang cukup, konsumsi makanan bergizi, serta olahraga teratur membantu menjaga fungsi otak tetap optimal. Selain itu, hindari multitasking dan buat jadwal kerja yang terstruktur agar fokus dapat lebih terjaga selama beraktivitas.", image:"img/img23.jpg" },
  { title:"Tips Menurunkan Berat Badan Sehat", content:"Menurunkan berat badan secara sehat membutuhkan kombinasi antara pola makan seimbang dan olahraga rutin. Hindari diet ekstrem yang dapat menyebabkan kekurangan nutrisi, dan fokus pada perubahan gaya hidup yang dapat dipertahankan dalam jangka panjang. Konsistensi dan kesabaran adalah kunci untuk mencapai berat badan ideal secara aman.", image:"img/img24.jpg" },
  { title:"Pentingnya Pemeriksaan Kesehatan Rutin", content:"Melakukan pemeriksaan kesehatan secara rutin sangat penting untuk mendeteksi masalah kesehatan sejak dini. Dengan pemeriksaan berkala, berbagai penyakit yang mungkin belum menimbulkan gejala dapat diketahui lebih awal sehingga penanganan bisa dilakukan dengan lebih efektif. Pemeriksaan ini juga membantu memantau kondisi kesehatan dan mendorong gaya hidup yang lebih sehat.", image:"img/img25.jpg" },
  { title:"Mengatasi Migrain dengan Cara Alami", content:"Migrain bisa sangat mengganggu aktivitas sehari-hari. Cara alami untuk mengurangi frekuensi dan intensitas migrain meliputi teknik relaksasi, menjaga pola tidur yang teratur, serta mengonsumsi cukup air. Menghindari pemicu migrain seperti stres, makanan tertentu, dan cahaya terang juga sangat dianjurkan untuk membantu mencegah kambuhnya migrain.", image:"img/img26.jpg" },
  { title:"Dampak Negatif Stres Kronis", content:"Stres kronis yang tidak ditangani dapat berdampak buruk bagi kesehatan fisik dan mental. Kondisi ini dapat meningkatkan risiko penyakit jantung, depresi, gangguan tidur, hingga masalah pencernaan. Mengelola stres melalui pola hidup sehat, teknik relaksasi, serta dukungan sosial adalah langkah penting untuk mencegah komplikasi yang lebih serius.", image:"img/img27.jpg" },
  { title:"Mengenal Penyakit Autoimun", content:"Penyakit autoimun terjadi ketika sistem imun tubuh keliru menyerang jaringan sehat sebagai ancaman. Kondisi ini dapat menyebabkan berbagai gangguan, tergantung organ yang terpengaruh, seperti rheumatoid arthritis, lupus, dan multiple sclerosis. Diagnosis dini dan pengelolaan dengan pengobatan serta gaya hidup sehat sangat penting untuk memperlambat perkembangan penyakit.", image:"img/img28.jpg" },
  { title:"Kiat Memulai Pola Hidup Vegan", content:"Berpindah ke pola hidup vegan memerlukan persiapan agar kebutuhan nutrisi tetap terpenuhi. Mulailah secara bertahap dengan mengganti makanan hewani dengan alternatif nabati yang kaya protein dan vitamin B12. Perhatikan keseimbangan gizi dengan mengonsumsi berbagai jenis sayuran, buah, kacang-kacangan, dan biji-bijian agar tubuh tetap sehat dan bugar.", image:"img/img29.jpg" },
  { title:"Panduan Menggunakan Suplemen dengan Aman", content:"Suplemen bisa membantu memenuhi kebutuhan nutrisi, tetapi penggunaannya harus hati-hati dan berdasarkan kebutuhan. Konsultasikan dengan dokter sebelum memulai konsumsi suplemen untuk menghindari efek samping atau interaksi dengan obat lain. Pilih suplemen dari sumber terpercaya dan patuhi dosis yang dianjurkan agar aman dan efektif.", image:"img/img30.jpg" }
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
