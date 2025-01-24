document.getElementById('registerButton').addEventListener('click', function () {
    const namaLengkap = document.getElementById('nama_lengkap').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const passwordConfirmation = document.getElementById('password_confirmation').value;

    // Validasi input
    if (!namaLengkap || !email || !username || !password || !passwordConfirmation) {
        alert('Semua data harus diisi!');
        return;
    }
    
    if (password !== passwordConfirmation) {
        alert('Password dan konfirmasi password tidak cocok!');
        return;
    }

    const userData = { nama_lengkap: namaLengkap, email, username, password };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Registrasi berhasil! Data disimpan di LocalStorage.');
    console.log('Data Registrasi:', userData);
});
