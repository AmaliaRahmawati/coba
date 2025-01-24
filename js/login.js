document.getElementById('loginButton').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ambil data lalu ubah object menjadi array
    const users = Object.values(localStorage).map(user => JSON.parse(user));

    console.log('Data userData dari localStorage:', users);

    // Cari pengguna berdasarkan username dan password
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login berhasil! Selamat datang, ' + user.nama_lengkap);
        window.location.href = 'index.html'; // Redirect ke halaman utama
    } else {
        alert('Username atau password salah. Silakan coba lagi.');
    }
});