const form = document.getElementById('tambahRuanganForm');

form.addEventListener('submit', async function (e) {
	e.preventDefault(); // Mencegah reload halaman

	const formData = new FormData(form);
	const files = formData.getAll('foto_ruangan[]'); // Ambil semua file dari input

	if (files.length > 0) {
		const fileDataURLs = []; // Array untuk menyimpan Data URLs dari setiap file

		// Loop untuk membaca semua file yang dipilih
		for (let file of files) {
			const reader = new FileReader();
			reader.onload = function () {
				fileDataURLs.push(reader.result); // Menyimpan Data URL untuk setiap file
				if (fileDataURLs.length === files.length) {
					// Jika semua file telah dibaca, simpan data
					const data = {
						nama_ruangan: formData.get('nama_ruangan'),
						kategori: formData.get('kategori'),
						deskripsi: formData.get('deskripsi'),
						fasilitas: formData.getAll('fasilitas[]'),
						lokasi: formData.get('lokasi'),
						foto_ruangan: fileDataURLs, // Menyimpan array Data URLs dari foto
					};

					// Menyimpan data ke local storage
					const existingData = JSON.parse(localStorage.getItem('ruanganData')) || [];
					existingData.push(data);
					localStorage.setItem('ruanganData', JSON.stringify(existingData));

					alert('Data berhasil disimpan ke Local Storage!');
					form.reset(); // Reset form
				}
			};
			reader.readAsDataURL(file); // Membaca file sebagai Data URL
		}
	} else {
		alert('Harap unggah foto ruangan.');
	}
});
