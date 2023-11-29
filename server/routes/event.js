const supabase = require("../supabase");
const express = require("express");
const router = express.Router();
const {
  subscribe,
  getEvents,
  getEventById,
  createEvent,
  getEventsbyUser,
  getEventAdminByUser,
  getSubscribes,
  getSubscribeById,
  getEventsbySub
} = require("../controllers/eventController");

router.get("/events/:page", async (req, res) => {
  try {
    const pag = req.params.page;
    let result = await getEvents(pag);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao achar os eventos" });
  }
});

router.get('/subscribe', async(req,res) =>{
  try{
    let result = await getSubscribes();
    res.json(result);
  }catch(error){
    res.status(500).json({ error: "Erro ao realizar a inscrição" });
  }
});

router.get('/subscribe/:id', async(req,res) =>{
  try{
    const id = req.params.id;
    let result = await getSubscribeById(id);
    res.json(result);
  }catch(error){
    res.status(500).json({ error: error });
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

router.post("/event", async (req, res) => {
  try {
    const result = await createEvent(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar a criação do evento" });
  }
});

router.get("/event/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    let result = await getEventById(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter o evento" });
  }
});

router.get("/events/myevents/:id", async (req, res) => {
  try{
    const id = req.params.id;
    console.log('teste');
    let result = await getEventsbyUser(id);
    res.json(result);
  }catch(error){
    res.status(500).json({ error: "Erro ao obter os eventos" });
  }
});

router.get("/events/myevent/:id", async(req, res)=>{
  try{
    const id = req.params.id;
    let result = await getEventAdminByUser(id);
    res.json(result);
  }catch(error){
    res.status(500).json({ error: "Erro ao obter o evento" });
  }
})

router.get("/events/mysubs/:id",async(req,res) => {
  try {
    const id = req.params.id;
    let result = await getEventsbySub(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter o evento" });
  } 
})

module.exports = router;
