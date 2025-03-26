export class DataView {
    constructor() {
        this.namas = document.getElementById('nama');
        this.umurs = document.getElementById('umur');
        this.alamats = document.getElementById('alamat');
        this.emails = document.getElementById('email');
        this.forms = document.getElementById('form');
        this.daftarProduk = document.getElementById('daftar-produk'); // Tambahkan daftar produk
    }

    getData(data, controller) {
        this.daftarProduk.innerHTML = ''; // Bersihkan daftar sebelum menambahkan data baru
        
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nama} - ${item.umur} - ${item.alamat} - ${item.email}`;
            
            const buttonHapus = document.createElement('button');
            buttonHapus.textContent = "Hapus";
            buttonHapus.addEventListener('click', () => {
                controller.hapusData(item.nama);
            });

            li.appendChild(buttonHapus);
            this.daftarProduk.appendChild(li);
        });
    }

    bindTambahData(controller) {
        this.forms.addEventListener('submit', (e) => {
            e.preventDefault();
            controller.tambahData(
                this.namas.value,
                this.umurs.value,
                this.alamats.value,
                this.emails.value
            );
            this.namas.value = '';
            this.umurs.value = '';
            this.alamats.value = '';
            this.emails.value = '';
        });
    }
}
