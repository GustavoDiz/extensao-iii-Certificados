const supabase  = require('../supabase');
const express = require("express");
const router = express.Router();
const {login} = require('../controllers/auth');

router.get("/users", async (req, res) => {
  try {
    let { data: users, error } = await supabase.from("users").select("*");
    if(error){
        throw error;
    }
    res.json(users);
  } catch (error) {
    res.status(500);
  } 
});

router.post('/login',async (req, res) => {
  const users = req.body;
  console.log(users);
  try{
    const result = await login(users);
    res.json(result);
  }catch(error){
    res.status(500).json({ error: 'Erro ao realizar o login' });
  }

})

module.exports = router;