async function loadInfo() {
  let info = {};
  const urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get("id");
  await fetch(`http://localhost:5000/api/events/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      info = data.user;
      console.log(info);
    })
    .catch((error) => console.log("Erro:", error));

    document.getElementById('title').innerText = info.title;
    document.getElementById('date').innerText = info.date;
    document.getElementById('author').innerText = info.creator_name;
    document.getElementById('theme').innerText = info.theme;
    document.getElementById('link').innerText = info.link;
}
