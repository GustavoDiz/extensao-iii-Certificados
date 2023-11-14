const supabase = require("../supabase");

async function getEventById(id) {
  const { data, error } = await supabase.from("palestra").select("*").eq("id", id);
  if (!error) {
    return { sucess: true, user: data[0] };
  } else {
    return { sucess: false, message: "Error ao Encontrar o Evento" };
  }
}

async function getEvents() {
  const { data, error } = await supabase.from("palestra").select("*");
  if (!error) {
    return { events: data };
  } else {
    return { success: false, message: "Erro ao retornar todos os eventos" };
  }
}

async function subscribe(sub) {
  if (sub != null) {
    const { data, error } = await supabase
      .from("subscribe")
      .insert([
        {
          user: sub.user,
          palestra: sub.palestra,
        },
      ])
      .select();
    if (!error) {
      return { success: true };
    } else {
      return { success: false, message: "Erro ao se inscrever" };
    }
  } else {
    throw error;
  }
}

module.exports = { subscribe, getEvents, getEventById };
