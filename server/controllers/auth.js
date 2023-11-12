const bcrypt = require("bcrypt");
const supabase  = require('../supabase');

async function login(user) {
    if(user != null){
        console.log(user);
        const { data: users, error } = await supabase.from("users").select("*").eq('username',user.username);
        console.log(users);
        if (users.length > 0 && bcrypt.compareSync(user.password, users[0].password)) {
            return { success: true, user: users[0] };
          } else {
            return { success: false, message: 'Credenciais inválidas' };
          }
    }else{
        throw error;
    }
}

module.exports = {login};
