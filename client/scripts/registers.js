const URL = window.location.hostname+'/client';
console.log(URL);

async function handleRegister() {
  const register = {
    name: document.getElementById("name").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    email: document.getElementById("email").value,
    user_type: document.getElementById("usertype").value,
  };

  console.log(register);

  fetch("http://localhost:5000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(register),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if(data.sucess == true){
        document.location.href = 'http://192.168.100.64:5500/client/index.html';
    }
    })
    .catch((error) => console.error("Erro:", error));

    
}
