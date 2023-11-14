const supabase = require("../supabase");

async function getUserById(id) {
  const { data, error } = await supabase.from("users").select("*").eq("id", id);
  if (!error) {
    return { sucess: true, user: data[0] };
  } else {
    return { sucess: false, message: "Error ao Encontrar o Usuário" };
  }
}

module.exports = { getUserById };
