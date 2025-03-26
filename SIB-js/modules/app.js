import { Controller } from "./module/controller.js";
import { DataView } from "./module/view.js";

document.addEventListener('DOMContentLoaded', () => {
    const view = new DataView();    
    const controller = new Controller(view);

    view.bindTambahData(controller);    
    view.getData(controller.model.getData(), controller); // Tampilkan data awal
});