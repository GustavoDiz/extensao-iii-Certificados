let content = {};

async function loadEvents(){
    var ob = localStorage.getItem("user");
    console.log(JSON.parse(ob).id);
    let eventos = document.getElementById('myevents');
    await fetch(`http://localhost:5000/api/events/myevents/${JSON.parse(ob).id}`,{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log("Erro:", error));
}