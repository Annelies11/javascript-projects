//const kopi = require('./coffee');
//const {first, last} = require('./users');
const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

const fighting = (tiger, wolf) => {
    if(tiger.strength > wolf.strength){
        tiger.growl();
        return;
    }
    if(wolf.strength > tiger.strength){
        wolf.howl();
        return;
    }
    console.log('Draw!!!');
}
const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);