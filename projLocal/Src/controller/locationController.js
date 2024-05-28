const locationModel = require('../model/locationModel');

exports.getAllLocation = async (req, res) => {
    try{
        const location = await locationModel.getAllLocation();
        res.render("listLocation", { location: location});
    } catch (err) {
        res.status(500).json({error : err.toString()});
    }
};

exports.getContact = async (req, res) => {
    try {
        res.render("contact");
    } catch(err) {
        res.status(500).json ({ error: err.toString()});
    }
};

exports.getHome = async (req, res) => {
    try {
        res.render("home");
    } catch(err) {
        res.status(500).json ({ error: err.toString()});
    }
};

exports.getNewLocation = async (req, res) => {
    
   try{
        const location = await locationModel.getAllLocation();
        res.render("newLocation", { location: location});
    } catch (err) {
        res.status(500).json({error : err.toString()});
    }
};


exports.postForm = async (req, res) => {
    try {
        const { cidade, sigla, bairro } = req.body;
   
        const locations = await locationModel.getAllLocation();
        const isExisting = locations.some(location => location.cidade === cidade && location.sigla === sigla && location.bairro === bairro);
       
        if (isExisting) {
            return res.status(400).json({ error: "Local já cadastrado" });
        }
   
        locations.push({ cidade, sigla, bairro });
        await locationModel.writeLocationToFile(locations);
   
        res.status(201).json({ message: "Local cadastrado com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao processar a solicitação" });
    }
  };