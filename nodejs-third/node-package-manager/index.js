favorites = ["Lobster", "Udang", "Tempe Orek"];
others = ["Gurame", "Nila", "Sawo"];
all = [...favorites,...others];
const obj1 = { firstname:'Spongebob', age:25};
const obj2 = { lastname:'Squarepants', gender:'M'};
const newObj = {...obj1, ...obj2};
//console.log(newObj);
const profile = {
    namaDepan: 'Chris',
    namaBelakang: 'Martin',
    band: 'Coldplay'
}
//const {namaDepan, namaBelakang, band} = profile;
const namaDepan = profile.namaDepan;
const namaBelakang = profile.namaBelakang;
const band = profile.band;
//console.log(namaDepan, namaBelakang, band);

const warrior = ['I', 'was', 'born', 'for', 'this'];
const broken_one = ['Zayde', 'Wolf', 'youre', 'not', 'alone'];
const [,,,,revolution] = warrior;
//console.log(revolution);
let a = 4
let b = 8

console.log("a : "+a);
console.log("b : "+b);
[a,b]=[b,a];
console.log("a : "+a);
console.log("b : "+b);

const capital = new Map([
    ['Indonesia', 'Nusantara'],
    ['Thailand', 'Bangkok'],
    ['USA', 'Washington DC']
]);
//console.log(capital.size);
//console.log(capital.get('USA'));
capital.set('France', 'Paris');
console.log(capital);
console.log(capital.get('France'));
