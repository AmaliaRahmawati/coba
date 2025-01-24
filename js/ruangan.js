document.addEventListener('DOMContentLoaded', function () {
const tableBody = document.querySelector('#example1 tbody');

// Fungsi untuk memuat data dari local storage
function loadData() {
    // Ambil data dari local storage
    const ruanganData = JSON.parse(localStorage.getItem('ruanganData')) || [];
    tableBody.innerHTML = ''; // Bersihkan isi tabel

    // Jika tidak ada data, tampilkan pesan "Data Kosong"
    if (ruanganData.length === 0) {
    tableBody.innerHTML = `
        <tr>
        <td colspan="6" class="text-center">Data Kosong</td>
        </tr>
    `;
    return;
    }

    // Jika ada data, tampilkan
    ruanganData.forEach((ruangan, index) => {
    const fasilitasList = ruangan.fasilitas.map(fasilitas => `<li>${fasilitas}</li>`).join('');
    const row = `
        <tr>
        <td>${index + 1}</td>
        <td>${ruangan.nama_ruangan}</td>
        <td>${ruangan.lokasi}</td>
        <td>
            <ul>${fasilitasList}</ul>
        </td>
        <td>${ruangan.kategori}</td>
        <td>
            <button class="btn btn-danger btn-sm delete-btn" data-index="${index}">Delete</button>
        </td>
        </tr>
    `;
    tableBody.insertAdjacentHTML('beforeend', row);
    });

    // Tambahkan event listener untuk tombol "Delete"
    document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        deleteData(index);
    });
    });
}

// Fungsi untuk menghapus data
function deleteData(index) {
    const ruanganData = JSON.parse(localStorage.getItem('ruanganData')) || [];
    ruanganData.splice(index, 1); // Hapus data berdasarkan index
    localStorage.setItem('ruanganData', JSON.stringify(ruanganData)); // Simpan data kembali ke local storage
    loadData(); // Refresh tabel
    alert('Data berhasil dihapus!');
}

// Muat data saat halaman pertama kali diakses
loadData();
});