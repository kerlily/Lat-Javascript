const orang = {
    nama :  'farhan',
    umur : 20
}


// console.log(orang)


const barang = {
    nama : 'baju',
    harga : 100000,
    stok : 10,
    isready : true,
    size : ['xs', 's', 'm', 'l', 'xl'],
    location : {
        kota : 'jakarta',
        provinsi : 'jawa barat'
    }
}

// console.log(barang['location'])
// console.log(barang.size[3])

const shopping = [
    {
        product: 'vue.js',
        price: 20000,
        quantity: 2
    },

    {
        product: 'react.js',
        price: 30000,
        quantity: 1
    },

    {
        product: 'angular.js',
        price: 40000,
        quantity: 3
    }
]


console.log(shopping[0].product)