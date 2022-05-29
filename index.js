// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat



// favoriteColor list;
const yellow = 'Yellow'
const pink = 'Pink'
const white = 'White'
const purple = 'Purple'
const blue = 'Blue'
const black = 'Black'
const grey = 'Grey'

// favoriteRestaurant list 
const bento = 'Bento'
const sushi = 'Sushi'
const panchake = 'Panchake'
const eggy = 'Eggy'
const tempura = 'Tempura'
const padang = 'Padang'
const tteok = 'Tteok'
const katsu = 'Katsu'
const geprek = 'Geprek'
const educationMonica = [{
        name: 'SD 01',
        city: 'Jakarta',
        graduate: '2016'
    },
    {
        name: 'SMP 02',
        city: 'Jakarta',
        graduate: '2019'
    },
    {
        name: 'SMA 03',
        city: 'Tangerang'
    }

]
const educationWendy = [{
            name: 'SD 02',
            city: 'Jakarta',
            graduate: '2010'
        },
        {
            name: 'SMP 03',
            city: 'Bogor',
            graduate: '2013'
        },
        {
            name: 'SMA 01',
            city: 'Surabaya',
            graduate: '2016'
        }, {
            name: 'Universitas Maju',
            city: 'Tangerang'
        }
    ]
    // Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const firstUser = {
    name: 'Monica',
    gender: 'Female',
    age: 17,
    email: 'monica@dingdong.com',
    favoriteColor: new Set(yellow, pink, white, purple),
    educationMonica: educationMonica,
    isHavePet: 'yes',
    favoriteRestaurant: new Set(bento, sushi, panchake, eggy, tempura, bento, eggy, padang, tteok, sushi, sushi)

};
const secondUser = {
    name: 'Wendy',
    gender: 'Male',
    email: 'wendy@dingdong.com',
    favoriteColor: new Set(blue, black, grey),
    educationWendy: educationWendy,
    isHavePet: 'no',
    favoriteRestaurant: new Set(tempura, bento, sushi, panchake, padang, katsu, geprek, panchake, eggy)

};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};