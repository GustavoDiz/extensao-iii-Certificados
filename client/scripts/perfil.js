let info = {};

async function loadInfo() {
  let idUser = JSON.parse(localStorage.getItem("user")).id;
  await fetch(`http://localhost:5000/api/user/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      id: idUser,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.sucess == true) {
        info = data.user;
        console.log(info.name);
      }
    })
    .catch((error) => console.log("Error:", error));

  document.getElementById("profile").src = info.profile_pic;
  document.getElementById("usertype").innerText = info.user_type;
  document.getElementById("username").innerText = info.username;
  document.getElementById("email").innerText = info.email;
  document.getElementById("nome").innerText = info.name;
}
