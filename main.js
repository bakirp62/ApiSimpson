//llamar Butom
const button = document.getElementById('btn-generate-character');

//Aplicar evento Button
button.addEventListener('click', getCharacter);

function createCard(character) {
    const  containerCard = document.getElementById('container-card');
    containerCard.innerHTML = '';
  
//Creacion de las clases
    const imgCharacter = document.createElement('img');

    const hr =document.createElement('hr')
    const nameCharacter = document.createElement('h2');
    const statusCharacter = document.createElement('p');
    
// TODO:Añadir clases 
    imgCharacter.classList.add('img-character');
    nameCharacter.classList.add('name-character');
    statusCharacter.classList.add('status-character');


    imgCharacter.src = character.image;
    imgCharacter.alt = character.character;
    nameCharacter.textContent = character.character;
    statusCharacter.textContent = character.status;
//* estructura 
    containerCard.appendChild(imgCharacter);
    containerCard.appendChild(hr);
    containerCard.appendChild(nameCharacter);
    containerCard.appendChild(statusCharacter);
    
    
}
// *!Consumo la api como un vicioso

function getCharacter() {
    const options = {method: 'GET'};
    const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';
    
       fetch(URL, options)
      .then(response => response.json())
      .then(response => createCard(response[0]))
      .catch(err => console.error(err));
}

