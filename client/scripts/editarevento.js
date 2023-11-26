
let i = {};

async function loadContent(){
    console.log("Carregou!!!");
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("id");
    await fetch(`http://localhost:5000/api/events/myevent/${id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
    })
    .then((response) => response.json())
    .then((data) =>{
        console.log(data);
        i = data.event;
        let count = data.count;
    })
    .catch((error)=>console.log("Erro: ", error));

    document.getElementById('title').innerText = i.title;
    document.getElementById('date').innerText = i.date;
    document.getElementById('author').innerText = i.creator_name;
    document.getElementById('theme').innerText = i.theme;
    document.getElementById('link').innerText = i.link;
    document.getElementById('count').innerText = 'Inscritos'+i.link;
}

async function emitirCertificado(){
    
}