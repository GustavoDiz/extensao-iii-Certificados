var ob = localStorage.getItem("user");
console.log(JSON.parse(ob));

async function loadInfo() {
  let name = JSON.parse(ob).name;
  let events = [];
  let eventCarousel = document.getElementById("events");

  await fetch("http://localhost:5000/api/events", {
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

  if (events.length > 0){
    let htmlString = '';
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
            <div class="mensagem" id="mensagem"><p>${events[index].title}</p></div>
            <div class="data" id="data">${events[index].date}</div>
          </div>
        </a>`;
    }
    eventCarousel.innerHTML += htmlString;
    setupCarousel();
  }
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

window.onload = loadInfo;
