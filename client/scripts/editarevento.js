
let i = {};
let users = [];

async function loadContent(){
    let count;
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
        count = data.count;
    })
    .catch((error)=>console.log("Erro: ", error));

    document.getElementById('title').innerText = i.title;
    document.getElementById('date').innerText = i.date;
    document.getElementById('author').innerText = i.creator_name;
    document.getElementById('theme').innerText = i.theme;
    document.getElementById('link').innerText = i.link;
    document.getElementById('count').innerText = 'Inscritos: '+count;
}

async function emitirCertificado(){
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("id");
    let json = {id: id};
    await fetch("http://localhost:5000/api/certificates",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(json)
    }).then((response) => response.json())
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>console.log("Erro: ", error));
}