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
      if (data.success) {
        let user = data.user;
        //SALVAR O OBJETO USUARIO LOGADO
        localStorage.setItem("user", JSON.stringify(user));
        //IR PARA PAGINA HOMEPAGE
        document.location.href = './pages/homepage/homepag.html';
      }
    })
    .catch((error) => console.error("Erro:", error));
}
