let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik

// Menangani klik pada navbar
function showInfo(section) {
  const display = document.getElementById('article-display');
  display.innerHTML = ''; // Kosongkan konten sebelumnya

  let content = '';
  if (section === 'home') {
    content =
      '<h2>Home</h2><p>Selamat datang.</p>Ini adalah halaman blog Laverna!</p>';
  } else if (section === 'about') {
    content =
      '<h2>About</h2><p>Blog ini berisi kisah fiksi pemantik imajinasi bagi Anda.</p>';
  } else if (section === 'contact') {
    content =
      '<h2>Contact</h2><p>Hubungi kami di email@las.v3rnaa@gmail.com</p>';
  }

  display.innerHTML = content;
}

// Menampilkan artikel saat kolom diklik
function showArticle(article) {
  const display = document.getElementById('article-display');
  display.innerHTML = '';

  let content = '';
  const columns = document.querySelectorAll('.column');

  columns.forEach((column) => {
    column.classList.remove('active');
  });

  const clickedColumn = Array.from(columns).find((column) =>
    column.innerText.includes(article)
  );
  if (clickedColumn) {
    clickedColumn.classList.add('active');
  }

  if (article === 'article1') {
    content =
      '<h2>Article 1</h2><p>Tepatnya di desa Eldergrove.Tersebar legenda tentang mawar hitam yang hanya mekar sekali setiap seratus tahun, di malam bulan purnama. Mawar itu diyakini membawa kutukan yang bersemayam di dalam seekor ular emas, penjaga setia yang berkelindan di antara kelopak-kelopaknya. Helena, seorang gadis miskin yang tinggal di tepi desa, mendengar cerita tersebut dari ibunya dan selalu bermimpi menemukan bunga itu, berharap bisa mengubah nasibnya.</p><p>Pada malam bulan purnama yang dingin, Helena menemukan mawar hitam di tepi hutan gelap, tepat seperti yang digambarkan dalam cerita. Tanpa ragu, ia memetik mawar itu. Namun, saat jemarinya menyentuh kelopak, seekor ular emas melesat keluar, menggigit pergelangan tangannya. Kilauan dari gigitan itu meresap ke dalam kulitnya, dan seketika, tubuhnya memancarkan sinar keemasan yang menakjubkan. Namun, bukan keindahan yang ia rasakan, melainkan rasa sakit yang menusuk hingga ke tulang. Bisikan dingin menyelinap di pikirannya: ia telah terikat oleh kutukan ular emas.<p>Sejak saat itu, Helena berubah menjadi sosok yang memikat namun berbahaya. Siapapun yang menatap matanya pada malam bulan purnama akan terpaku, kehilangan kesadaran dan tak pernah kembali. Ia menjadi makhluk yang tak bisa dicintai, terisolasi oleh kekuatan gelap yang merasukinya. Para penduduk desa mulai menjauhinya, takut pada cahaya keemasan yang memancar dari tubuhnya setiap purnama, tanda kekuatan jahat yang kini menguasainya.</p><p>Helena mencari cara untuk menghentikan kutukan tersebut, hingga ia menemukan catatan kuno yang menyebutkan bahwa hanya satu hal yang dapat menetralkan bisa ular emas itu: menanam kembali kelopak mawar hitam di tanah suci gereja sebelum fajar. Pada suatu malam purnama, dengan sisa kekuatannya, ia kembali ke hutan, membawa kelopak mawar hitam yang ia petik dulu. Tepat saat fajar, ia berhasil menanam kelopak itu di halaman gereja yang penuh embun pagi.</p><p>Saat sinar pertama mentari menyentuh kelopak mawar itu, kutukan pun pecah, menghapus kilauan emas dari tubuhnya. Namun, Helena menghilang bersama lenyapnya kutukan itu. Penduduk desa kemudian menemukan kelopak mawar hitam yang membeku di rerumputan pagi, sebagai satu-satunya jejak keberadaan Helena, si gadis terkutuk yang memilih mengorbankan dirinya untuk mengakhiri kutukan abadi itu.</p>';
  } else if (article === 'article2') {
    content =
      '<h2>Artikel 2</h2><p>Ini adalah isi dari artikel 2. Anda bisa menambahkan lebih banyak konten di sini.</p>';
  } else if (article === 'article3') {
    content =
      '<h2>Artikel 3</h2><p>Ini adalah isi dari artikel 3. Anda bisa menambahkan lebih banyak konten di sini.</p>';
  }

  display.innerHTML = content;
}
