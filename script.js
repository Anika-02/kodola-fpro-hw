function generateKey(length, characters){
    let key = '';

    for(let i = 1; i <= length; i++){
        let index = Math.round(Math.random() * (characters.length - 1));
        key += characters[index];
    }
    return key;
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey( 16, characters);
console.log(key);