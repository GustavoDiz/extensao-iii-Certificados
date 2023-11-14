const supabase = require("../supabase");
const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth");
const { register } = require("../controllers/register");
const { getUserById } = require("../controllers/userController");

router.get("/users", async (req, res) => {
  try {
    let { data: users, error } = await supabase.from("users").select("*");
    if (error) {
      throw error;
    }
    res.json(users);
  } catch (error) {
    res.status(500);
  }
});

router.get("/user", async (req, res) => {
  const id = req.header('id');
  try {
    const result = await getUserById(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao Encontrar o usuario" });
  }
});

router.post("/login", async (req, res) => {
  const users = req.body;
  console.log(users);
  try {
    const result = await login(users);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar o login" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const result = await register(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar o login" });
  }
});

module.exports = router;
