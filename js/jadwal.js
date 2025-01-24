document.addEventListener("DOMContentLoaded", function () {
    // Periksa apakah status login tersimpan di localStorage
    const isLoggedIn = localStorage.getItem("isLoggedIn");
  
    // Jika tidak ada status login, redirect ke halaman login
    if (!isLoggedIn) {
      alert("Silakan login terlebih dahulu!");
      window.location.href = "login.html"; // Ganti dengan URL halaman login Anda
    }
  
    // Ambil data booking dari localStorage
    const bookingData = JSON.parse(localStorage.getItem('bookingData')) || [];
  
    // Ambil elemen tbody untuk tabel
    const tbody = document.querySelector('#example1 tbody');
    tbody.innerHTML = ""; // Kosongkan isi tabel
  
    if (bookingData.length === 0) {
      // Jika data kosong, tambahkan baris dengan pesan "Data kosong"
      const emptyRow = document.createElement('tr');
      emptyRow.innerHTML = `
        <td colspan="9" class="text-center">Data kosong</td>
      `;
      tbody.appendChild(emptyRow);
    } else {
      // Loop melalui bookingData dan tambahkan ke tabel
      bookingData.forEach((data, index) => {
        const fasilitas = Array.isArray(data.fasilitas)
          ? data.fasilitas.map(fasilitas => `<li>${fasilitas}</li>`).join('')
          : `<li>Tidak ada fasilitas tambahan</li>`;
        
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${data.peminjam || 'Tidak ada nama'}</td>
          <td>${data.namaRuangan || 'Tidak ada ruangan'}</td>
          <td>${data.deskripsiKegiatan || 'Tidak ada deskripsi'}</td>
          <td>
            <ul>
              ${fasilitas}
            </ul>
          </td>
          <td>${data.tanggal || 'Tidak ada tanggal'}</td>
          <td>${data.kontak || 'Tidak ada kontak'}</td>
          <td>${data.hp || 'Tidak ada telepon'}</td>
          <td>${data.email || 'Tidak ada email'}</td>
        `;
        tbody.appendChild(row);
      });
    }
  });
  