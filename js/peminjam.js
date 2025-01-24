document.addEventListener("DOMContentLoaded", function () {
    // Periksa apakah status login tersimpan di localStorage
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      alert("Silakan login terlebih dahulu!");
      window.location.href = "login.html"; // Ganti dengan URL halaman login Anda
    }
  
    // Ambil data dari localStorage
    const bookingData = JSON.parse(localStorage.getItem('bookingData')) || [];
  
    // Ambil elemen tbody tabel
    const tbody = document.querySelector('#example1 tbody');
    tbody.innerHTML = ""; // Kosongkan tabel
  
    if (bookingData.length === 0) {
      // Jika tidak ada data, tambahkan baris "Data kosong"
      const emptyRow = document.createElement('tr');
      emptyRow.innerHTML = `
        <td colspan="7" class="text-center">Data kosong</td>
      `;
      tbody.appendChild(emptyRow);
    } else {
      // Loop melalui bookingData dan tambahkan ke tabel
      bookingData.forEach((data, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${data.peminjam}</td>
          <td>${data.kontak}</td>
          <td>${data.hp}</td>
          <td>${data.email}</td>
          <td>swasta</td>
          <td>
            <button class="btn btn-danger" onclick="deleteBooking(${index})">Delete</button>
          </td>
        `;
        tbody.appendChild(row);
      });
    }
  });
  
  // Fungsi untuk menghapus data booking berdasarkan index
  function deleteBooking(index) {
    const bookingData = JSON.parse(localStorage.getItem('bookingData')) || [];
    bookingData.splice(index, 1); // Hapus data
    localStorage.setItem('bookingData', JSON.stringify(bookingData)); // Simpan ulang
    location.reload(); // Refresh halaman
  }
  