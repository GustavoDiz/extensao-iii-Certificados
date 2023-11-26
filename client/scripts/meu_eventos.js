let content = {};

async function loadEvents(){
    var ob = localStorage.getItem("user");
    console.log(JSON.parse(ob).id);
    let eventos = document.getElementById('events-content');
    await fetch(`http://localhost:5000/api/events/myevents/${JSON.parse(ob).id}`,{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        content = data.events;
    })
    .catch((error) => console.log("Erro:", error));
    if(content != null){
        content.map((event)=>{
            eventos.innerHTML += `<div class="bg-card">
                <h2>${event.title}</h2>
                <a href="../evento/index.html?id=${event.id}" id="link"><button class="signevent_button">Gerenciar</button></a>
        </div> `;
        })
    }else{
        eventos.innerHTML = "<h1>Nenhum Evento Encontrado :(</h1>";
    }
}