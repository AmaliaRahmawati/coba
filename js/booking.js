document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById('bookingForm');

// Event listener untuk form submit
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form melakukan reload halaman

    // Ambil data dari form
    const peminjam = form.peminjam.value;
    const namaRuangan = form.nama_ruangan.value;
    const deskripsiKegiatan = form.deskripsi_kegiatan.value;
    const fasilitas = Array.from(form['fasilitas[]'])
    .filter(input => input.checked)
    .map(input => input.value);
    const tanggal = form.tanggal.value;
    const kontak = form.kontak.value;
    const hp = form.hp.value;
    const email = form.email.value;

    // Validasi input
    if (!peminjam || !namaRuangan || !tanggal || !kontak || !hp || !email) {
    alert('Semua field wajib diisi!');
    return;
    }

    // Buat objek data booking
    const bookingData = {
    peminjam,
    namaRuangan,
    deskripsiKegiatan,
    fasilitas,
    tanggal,
    kontak,
    hp,
    email,
    };

    // Ambil data booking dari local storage (jika ada)
    const existingData = JSON.parse(localStorage.getItem('bookingData')) || [];

    // Tambahkan data baru
    existingData.push(bookingData);

    // Simpan kembali ke local storage
    localStorage.setItem('bookingData', JSON.stringify(existingData));

    // Tampilkan pesan sukses
    alert('Data booking berhasil disimpan!');

    // Reset form
    form.reset();
});
});
