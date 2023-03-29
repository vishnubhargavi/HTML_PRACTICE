/*https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png*/

const container = document.querySelector('#container');
const baseurl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


for(let i=1;i<=151;i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('sprites');
    const label = document.createElement('span');
    label.innerText = `#${i}`       
    const newimg = document.createElement('img');
    newimg.src = `${baseurl}${i}.png`;

    pokemon.appendChild(newimg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}