const supabase = require("../supabase");
const { getPagination } = require("../util/pagination");

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

async function getEvents(pag) {
  const { from, to} = getPagination(pag,8);
  const { data, error } = await supabase
    .from("palestra")
    .select("*")
    .range(from, to);
  if (!error) {
    return { events: data,  };
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
      return { sucess: true, events: data };
    } else {
      return { sucess: false, message: "Error ao Encontrar os Eventos" };
    }
  } else {
    throw error;
  }
}

async function getEventsbySub(id) {
  if (id != null) {
    let { data: subscribe, error } = await supabase
      .from("subscribe")
      .select(
        `
  palestra(
    *
  )
`
      )
      .eq("user", id);
    if (!error) {
      return { sucess: true, content: subscribe };
    } else {
      return { sucess: false, message: "Error ao Encontrar os Eventos" };
    }
  } else {
    throw error;
  }
}

async function getEventAdminByUser(id) {
  if (id != null) {
    const { data, error } = await supabase
      .from("palestra")
      .select("*")
      .eq("id", id);
    if (!error) {
      console.log(data);
      const { count, error } = await supabase
        .from("subscribe")
        .select("*", { count: "exact" })
        .eq("palestra", id);
      console.log(count);
      if (!error) {
        return { sucess: true, event: data[0], count: count };
      }
    } else {
      return { sucess: false, message: "Error ao Encontrar o Evento" };
    }
  } else {
    throw error;
  }
}

async function getSubscribes() {
  let { data: subscribe, error } = await supabase.from("subscribe").select(`
  palestra,
  users (
    id
  )
`);
  if (!error) {
    console.log(subscribe);
    return { sucess: true, info: subscribe };
  } else {
    return { sucess: false, message: error };
  }
}

async function getSubscribeById(id) {
  let { data: subscribe, error } = await supabase
    .from("subscribe")
    .select(
      `
  palestra(
    id,title
  ),
  users (
    id
  )
`
    )
    .eq("palestra", id);
  if (!error) {
    console.log(subscribe);
    return { sucess: true, info: subscribe };
  } else {
    return { sucess: false, message: error };
  }
}

module.exports = {
  subscribe,
  getEvents,
  getEventById,
  createEvent,
  getEventsbyUser,
  getEventAdminByUser,
  getSubscribes,
  getSubscribeById,
  getEventsbySub,
};
