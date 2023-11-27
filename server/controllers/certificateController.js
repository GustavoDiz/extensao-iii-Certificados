const supabase = require("../supabase");
const { getSubscribeById } = require("./eventController");

async function getUserCertificates(id) {
  let { data: certificates, error } = await supabase
    .from("certificates")
    .select("*")
    .eq("user", id);
  if (!error) {
    return { sucess: true, certificates: certificates };
  } else {
    return { sucess: false, message: "Error ao Encontrar os Certificados" };
  }
}

async function certificateGenerator(id) {
    console.log(id);
  let content = await getSubscribeById(id);
  console.log(content);
  if(content!= null){
    for (let i = 0; i < content.info.length; i++) {
        const { data, error } = await supabase
          .from("certificates")
          .insert([{ user: content.info[i].users.id, palestra: content.info[i].palestra.id,name:content.info[i].palestra.title}])
          .select();
        if(error){
            return { sucess: false, message: "Error ao Encontrar os Certificados" };
        }
      }
  }else{
    console.log('Error');
  }

}
module.exports = { getUserCertificates,certificateGenerator };
