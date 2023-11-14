async function create() {
  const event = {
    id_creator: JSON.parse(localStorage.getItem("user")).id,
    creator_name: JSON.parse(localStorage.getItem("user")).name,
    title: document.getElementById("nm_event").value,
    desc: document.getElementById("desct_event").value,
    date: document.getElementById("date").value,
    theme: document.getElementById("tema_event").value,
    link: document.getElementById("link_event").value,
    rating: 0,
  };

  console.log(event);

  await fetch("http://localhost:5000/api/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Erro:", error));
}
