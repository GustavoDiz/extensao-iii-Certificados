const bcrypt = require("bcrypt");
const supabase = require("../supabase");

async function register(user) {
  if (user != null) {
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          username: user.username,
          password: await bcrypt.hash(user.password, 10),
          name: user.name,
          email: user.email,
          user_type: user.usertype,
          profile_pic:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        },
      ])
      .select();

      if(error){
        return { success: false, message: 'Error no Registro' };
      }else{
        return { sucess: true};
      }
  } else {
    throw error;
  }
}

module.exports = {register};
