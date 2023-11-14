const supabase = require("../supabase");
const express = require("express");
const router = express.Router();
const {
  subscribe,
  getEvents,
  getEventById,
  createEvent,
} = require("../controllers/eventController");

router.get("/events", async (req, res) => {
  try {
    let result = await getEvents();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao achar os eventos" });
  }
});

router.post("/subscribe", async (req, res) => {
  try {
    const result = await subscribe(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar a inscrição" });
  }
});

router.post('/event',async (req, res) => {
  try {
    const result = await createEvent(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar a criação do evento" });
  }
});

router.get("/events/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    let result = await getEventById(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter o evento" });
  }
});

module.exports = router;
