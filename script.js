// Ambil parameter nama dari URL
var urlParams = new URLSearchParams(window.location.search);
var nama = urlParams.get('nama');
// Tampilkan nama di halaman
document.getElementById('nama').textContent = nama;
