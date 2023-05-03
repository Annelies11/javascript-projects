class Wolf {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    } 
    howl() {
        console.log('Meooong');
    }
}
module.exports = Wolf;