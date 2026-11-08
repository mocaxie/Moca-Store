var nomor = 0;
function tampilkanSlide(n) {
  var slide = document.getElementsByClassName("slide");
  if (slide.length == 0) { return; }
  if (n >= slide.length) { n = 0; }
  if (n < 0) { n = slide.length - 1; }
  for (var i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[n].style.display = "block";
  nomor = n;
}
function geser(arah) {
  tampilkanSlide(nomor + arah);
}
setInterval(function () { geser(1); }, 5000);

// ===== Menu hamburger (tampilan HP) =====
function bukaMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display == "block") { menu.style.display = "none"; }
  else { menu.style.display = "block"; }
}

function lihatLebih() {
  var kotak = document.getElementById("testi-lainnya");
  var tombol = document.getElementById("tombol-lebih");
  if (kotak.style.display == "block") {
    kotak.style.display = "none";
    tombol.innerHTML = "Lihat Lebih Banyak";
  } else {
    kotak.style.display = "block";
    tombol.innerHTML = "Lihat Lebih Sedikit";
  }
}

function hitungTotal() {
  var cek = document.getElementsByName("layanan");
  var total = 0;
  for (var i = 0; i < cek.length; i++) {
    if (cek[i].checked) { total = total + Number(cek[i].value); }
  }
  document.getElementById("total").innerHTML = "Rp" + total.toLocaleString("id-ID");
}

function kirimForm(idPesan) {
  document.getElementById(idPesan).innerHTML = "Terima kasih! Data sudah dicatat. Lanjutkan konfirmasi lewat WhatsApp.";
  return false;
}
