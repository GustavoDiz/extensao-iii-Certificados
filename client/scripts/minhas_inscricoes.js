let content = {}

async function loadSubs(){
    var ob = localStorage.getItem("user");
    let eventos = document.getElementById('events-content');
    await fetch(`http://localhost:5000/api/events/mysubs/${JSON.parse(ob).id}`,{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        content = data.content;
    })
    .catch((error) => console.log("Erro:", error));
    if(content != null){
        content.map((event)=>{
            eventos.innerHTML += `<div class="bg-card">
                <h2>${event.palestra.title}</h2>
                <a href="../evento/index.html?id=${event.palestra.id}" id="link"><button class="signevent_button">Ver</button></a>
        </div> `;
        })
    }else{
        eventos.innerHTML = "<h1>Nenhum Evento Encontrado :(</h1>";
    }
}