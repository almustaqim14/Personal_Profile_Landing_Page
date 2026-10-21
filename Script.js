
/* TAHUN OTOMATIS DI FOOTER */
document.getElementById("tahun").textContent =
  new Date().getFullYear();

/* FORMULIR KONTAK */
const formKontak = document.getElementById("formKontak");
const pesanSukses = document.getElementById("pesanSukses");

formKontak.addEventListener("submit", function(event) {
  // Mencegah halaman reload
  event.preventDefault();

  // Periksa validitas input
  if (!formKontak.reportValidity()) return;

  // Tampilkan pesan sukses
  pesanSukses.classList.remove("d-none");

  // Bersihkan formulir
  formKontak.reset();
});
