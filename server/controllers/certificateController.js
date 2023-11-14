const supabase = require("../supabase");

async function getUserCertificates(id) {
  let { data: certificates, error } = await supabase
    .from("certificates")
    .select("*")
    .eq('user',id);
    if(!error){
        return {sucess: true, certificates: certificates};
    }else{
        return {sucess: false, message: "Error ao Encontrar os Certificados"};
    }
}

module.exports = {getUserCertificates};
