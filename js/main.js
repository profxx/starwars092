const paginacao = "?page=10&limit=10";
const url = `https://starwars-databank-server.vercel.app/api/v1/characters${paginacao}`;

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.data)
    .then((starList) => {
        for (let i = 0; i < starList.length; i++){
            
        }
    })
    .catch((error) => console.log(error));
