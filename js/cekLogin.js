// Fungsi untuk memuat status login
function checkLoginStatus() {
    const loginStatus = localStorage.getItem('isLoggedIn');

    const loginButton = document.querySelector('a[href="login.html"]');
    if (loginStatus === 'true') {
        // Ubah tombol menjadi Logout
        loginButton.textContent = 'Logout';
        loginButton.classList.remove('btn-success');
        loginButton.classList.add('btn-danger');

        // Tambahkan event untuk Logout
        loginButton.addEventListener('click', function (e) {
            e.preventDefault(); // Hindari navigasi ke login.html
            localStorage.removeItem('isLoggedIn'); // Hapus status login
            alert('Anda telah logout.');
            window.location.reload(); // Reload halaman untuk memperbarui UI
        });
    }
}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', checkLoginStatus);
