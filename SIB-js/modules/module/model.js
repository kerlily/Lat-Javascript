export class Model {
    constructor() {
        this.data = [
            {nama: 'sugi', umur: 20, alamat: 'Jalan A', email: 'sugi@.com'},
            {nama: 'juiki', umur: 21, alamat: 'Jalan B', email: 'juiki@.com'},
            {nama: 'jamus', umur: 22, alamat: 'Jalan C', email: 'jamus@.com'},
            {nama: 'doel', umur: 23, alamat: 'Jalan D', email: 'doel@.com'},
            {nama: 'juan', umur: 24, alamat: 'Jalan E', email: 'juan@.com'},
            {nama: 'onlan', umur: 25, alamat: 'Jalan F', email: 'onlan@.com'},
            {nama: 'budi', umur: 26, alamat: 'Jalan G', email: 'budi@.com'},
            {nama: 'wahyu', umur: 27, alamat: 'Jalan H', email: 'wahyu@.com'},
            {nama: 'bowok', umur: 28, alamat: 'Jalan I', email: 'bowok@.com'},
            {nama: 'atid', umur: 29, alamat: 'Jalan J', email: 'atid@.com'}
        ];
    }

    tambahData(nama, umur, alamat, email) {
        this.data.push({ nama, umur, alamat, email });
    }

    hapusData(nama) {
        this.data = this.data.filter(item => item.nama !== nama);
    }

    getData() {
        return this.data;
    }
}
