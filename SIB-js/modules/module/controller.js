import { Model } from "./model.js";

export class Controller {
    constructor(view) {
        this.model = new Model();
        this.view = view;
    }

    tambahData(nama, umur, alamat, email) {
        if (nama.trim() !== '' && umur.trim() !== '' && alamat.trim() !== '' && email.trim() !== '') {
            this.model.tambahData(nama, umur, alamat, email);
            this.view.getData(this.model.getData(), this);
        }
    }

    hapusData(nama) {
        this.model.hapusData(nama);
        this.view.getData(this.model.getData(), this);
    }
}
