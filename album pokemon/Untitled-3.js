
const kontener = document.querySelector('#container');


// const img = document.createElement('img');
// img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
// kontener.appendChild(img);

for (i = 1; i <= 1010; i++){
    let img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    kontener.appendChild(img);
    
}