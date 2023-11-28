let info = {};
let page = 0;
function formatdate(data) {
  const dataObj = new Date(data);
  const dia = String(dataObj.getDate()).padStart(2, "0");
  const mes = String(dataObj.getMonth() + 1).padStart(2, "0"); // O mês começa do zero
  const ano = dataObj.getFullYear();

  const dataFormatada = `${dia}/${mes}/${ano}`;
  return dataFormatada;
}

function shortDesc(text) {
  if (text.length > 50) {
    return text.substring(0, 70) + "...";
  } else {
    return text;
  }
}

async function loadInfo() {
  if(page == 0){
    document.getElementById('prev').classList.add('disabled');
    document.getElementById('prev').disabled = true;
  }
  console.log("PAGINA ATUAL" + page);
  await fetchEvents(0);
}
async function prevPage() {
    page--;

  let eventos = document.getElementById("eventos");
  eventos.innerHTML = "";
  await fetchEvents(page);
}

async function nextPage() {
  page++;
  document.getElementById('prev').disabled = false;
  document.getElementById('prev').classList.remove('disabled');
  let eventos = document.getElementById("eventos");
  eventos.innerHTML = "";
  await fetchEvents(page);
}

async function fetchEvents(page) {
  let eventos = document.getElementById("eventos");
  await fetch(`http://localhost:5000/api/events/${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.events);
      info = data.events;
    });

  if (info != null) {
    info.map((event) => {
      eventos.innerHTML += `<div class="bg-gray-800 w-96 h-100 rounded-lg flex flex-col text-white p-7 mb-4">
              <img class="rounded-lg" src="../../assets/6893208.png" alt="img_evento" id="img_event" width="100%" height="200px" />
              <div class="text-center mt-2">
                  <h2>${event.title}</h2>
              </div>
              <div class="flex items-center justify-center">
                  <p class="mx-5" id="data_evento">${formatdate(event.date)}</p>
                  <span id="dia_evento" class="c1">${event.creator_name}</span>
              </div>
              <span class="block mt-2 text-center" id="desc">${shortDesc(
                event.desc
              )}</span>
              <div id="botoes" class="text-center mt-4">
                  <a href="../evento/index.html?id=${
                    event.id
                  }" id="link"><button class="signevent_button">SAIBA MAIS</button></a>
              </div>
          </div> `;
    });
  } else {
    eventos.innerHTML = "<h1>Nenhum Evento Encontrado :(</h1>";
  }
}
