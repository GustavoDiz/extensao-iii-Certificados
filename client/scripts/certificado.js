let info = [];

async function loadInfo() {
  let idUser = JSON.parse(localStorage.getItem("user")).id;
  await fetch(`http://localhost:5000/api/certificates/${idUser}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      info =  data.certificates;
    });

  if (info != null) {
    info.map((e) => {
      document.getElementById(
        "certificates"
      ).innerHTML += `<nav class="bg-yellow-500">
            <p class="text-white text-center text-2xl font-bold">
              <span>
                ${e.name}
                <button
                class="signevent_button"
                id="getcert_button"
                class="getcert_button"
              >
                Inscrever-se
              </button>
              </span>
            </p>
          </nav>`;
    });
  } else {
    document.getElementById(
      "certificates"
    ).innerHTML = `<nav class="bg-yellow-500">
        <p class="text-white text-center text-2xl font-bold">
          <span>
            Ainda não possui nenhum certificado
          </span>
        </p>
      </nav>`;
  }
}
