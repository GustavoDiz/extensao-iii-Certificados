const supabase = require("../supabase");

async function getEventById(id) {
  const { data, error } = await supabase
    .from("palestra")
    .select("*")
    .eq("id", id);
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
      .insert({
        user: sub.user,
        palestra: sub.palestra,
      })
      .select();
    if (!error) {
      return { success: true, data: data };
    } else {
      return { success: false, message: "Erro ao se inscrever" };
    }
  } else {
    throw error;
  }
}

async function createEvent(event) {
  if (event != null) {
    const { data, error } = await supabase
      .from("palestra")
      .insert({
        title: event.title,
        desc: event.desc,
        date: event.date,
        id_creator: event.id_creator,
        theme: event.theme,
        creator_name: event.creator_name,
        link: event.link,
        rating: event.rating,
      })
      .select();
    if (!error) {
      return { success: true, data: data };
    } else {
      return { success: true, message: "Erro ao criar o evento" };
    }
  } else {
    throw error;
  }
}

async function getEventsbyUser(id) {
  if (id != null) {
    const { data, error } = await supabase
      .from("palestra")
      .select("*")
      .eq("id_creator", id);
    if (!error) {
      console.log(data);
      return { sucess: true, events: data};
    } else {
      return { sucess: false, message: "Error ao Encontrar os Eventos" };
    }
  } else {
    throw error;
  }
}

module.exports = { subscribe, getEvents, getEventById, createEvent, getEventsbyUser };
