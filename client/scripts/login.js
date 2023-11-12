async function handleLogin() {
  const user = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  console.log(user);

  fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Erro:", error));
}
