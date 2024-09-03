const url = `https://starwars-databank-server.vercel.app/api/v1/characters?page=10&limit=30`;
const listaordenada = document.getElementById("lista");

function convertPersonagemToLi(personagem){
    return `
        <li class="personagem">
            <span class="name">${personagem.name}</span>
            <div class="detail">
                <span class="description">${personagem.description}</span>
                <img src="${personagem.image}" alt="${personagem.name}">
            </div>
        </li>
    `
}

fetch(url)
    .then((response) => response.json())
    .then((json) => json.data)
    .then((starlist) => {
        for (let i = 0; i < starlist.length; i++){
            const personagem = starlist[i];
            listaordenada.innerHTML += convertPersonagemToLi(personagem);
        }
    })
    .catch((error) => console.log("O erro é " + error))