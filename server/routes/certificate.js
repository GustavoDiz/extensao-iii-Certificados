const supabase = require("../supabase");
const express = require("express");
const router = express.Router();
//IMPORTS DAS FUNÇÕES CONTROLLER
const { getUserCertificates,certificateGenerator } = require("../controllers/certificateController");
//ROTAS
router.get('/certificates/:id',async(req,res) => {
    try {
        const id = req.params.id;
        let result = await getUserCertificates(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Erro ao obter os Certificados" });
    }
});

router.post('/certificates',async (req,res) => {
    try{
        const id = req.body.id;
        console.log(id);
        let result = await certificateGenerator(id);
        res.json(result);
    }catch(error){
        res.status(500).json({ error: "Erro ao emitir os Certificados" });
    }
});

module.exports = router;