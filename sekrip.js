// === GANTI TAB BERITA ===
const judulAkan = document.getElementById('judul-berlangsung');
const judulTelah = document.getElementById('judul-telah');
const beritaAkan = document.getElementById('berita-akan');
const beritaTelah = document.getElementById('berita-telah');

// Saat diklik, ubah tab
judulAkan.addEventListener('click', () => {
  judulAkan.classList.add('aktip');
  judulTelah.classList.remove('aktip');
  beritaAkan.classList.add('aktif');
  beritaTelah.classList.remove('aktif');
});

judulTelah.addEventListener('click', () => {
  judulTelah.classList.add('aktip');
  judulAkan.classList.remove('aktip');
  beritaTelah.classList.add('aktif');
  beritaAkan.classList.remove('aktif');
});

// === SLIDER GAMBAR BERITA ===
document.querySelectorAll('.slider').forEach(slider => {
  const slides = slider.querySelector('.slides');
  const images = slides.querySelectorAll('img');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  let index = 0;

  function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateSlide();
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateSlide();
  });
});

function toggleTheme() {
    const link = document.getElementById("theme-style");
      if (link.getAttribute("href") === "style.css") {
        link.setAttribute("href", "dark.css");
      } else {
        link.setAttribute("href", "style.css");
      }
    };



    
