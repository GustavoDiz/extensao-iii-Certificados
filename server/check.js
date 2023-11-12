// checkConnection.js
const supabase  = require("./supabase");

async function checkConnection() {
  try {
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      throw error;
    }

    console.log("Conexão bem-sucedida:", data);
  } catch (error) {
    console.error("Erro ao conectar:", error);
  }
}

checkConnection();
