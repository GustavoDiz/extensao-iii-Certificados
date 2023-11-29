var ob = localStorage.getItem("user");
console.log(JSON.parse(ob));

async function loadInfo() {
  let name = JSON.parse(ob).name;
  let events = [];
  let eventCarousel = document.getElementById("events");

  await fetch(`http://localhost:5000/api/events/${0}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      events = data.events;
    })
    .catch((error) => console.log("Erro:", error));

  if (events.length > 0) {
    let htmlString = "";
    for (let index = 0; index < events.length; index++) {
      htmlString += `
        <a href="../evento/index.html?id=${events[index].id}">
          <div
            id="galeria"
            class="item hidden"
            data-mensagem="Evento do admin"
            data-data="29/07/2024"
          >
            <img src="../../assets/6893208.png" alt="Imagem 1" class="imagem" />
            <div class="data" id="data" class="content-c">
            <p class="mensagem" id="mensagem"> ${events[index].title}</p>
            <p id="date">
            ${formatdate(events[index].date)}
            </p>
            <p id="theme">
            ${events[index].theme}
            </p>
            </div>
          </div>
        </a>`;
    }
    eventCarousel.innerHTML += htmlString;
    setupCarousel();
  }
}

function formatdate(data) {
  const dataObj = new Date(data);
  const dia = String(dataObj.getDate()).padStart(2, "0");
  const mes = String(dataObj.getMonth() + 1).padStart(2, "0"); // O mês começa do zero
  const ano = dataObj.getFullYear();

  const dataFormatada = `${dia}/${mes}/${ano}`;
  return dataFormatada;
}

function setupCarousel() {
  var imagens = $(".item");
  var indexAtual = 0;
  var intervalId;

  function mostrarImagem(index) {
    imagens.hide();
    imagens.eq(index).fadeIn();
  }

  function avancarImagem() {
    indexAtual++;
    if (indexAtual >= imagens.length) {
      indexAtual = 0;
    }
    mostrarImagem(indexAtual);
  }

  function retrocederImagem() {
    indexAtual--;
    if (indexAtual < 0) {
      indexAtual = imagens.length - 1;
    }
    mostrarImagem(indexAtual);
  }

  // Ocultar as imagens no início
  imagens.hide();

  $("#anterior").click(function () {
    clearInterval(intervalId);
    retrocederImagem();
    iniciarIntervalo();
  });

  $("#proximo").click(function () {
    clearInterval(intervalId);
    avancarImagem();
    iniciarIntervalo();
  });

  function iniciarIntervalo() {
    intervalId = setInterval(avancarImagem, 3000);
  }

  iniciarIntervalo();
}

