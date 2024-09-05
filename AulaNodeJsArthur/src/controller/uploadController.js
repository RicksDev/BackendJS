const multer = require("multer");
const sharp = require("sharp");
const fs = require("fs");
const path = require('path');

const uploadController = {
  uploadImage: async (req, res) => {
    //gatinho.png
    const imageName = req.file.originalname;

    //dados da imagem
    const imageData = req.file.buffer;

    await sharp(imageData).toFile(`uploads/${imageName}`);

    return res.status(200).json({
      msg: "Imagem salva com sucesso",
      status: 200
    });
  },

  listImages: async (req, res) => {
    //const fs = require('fs')
    fs.readdir("uploads/", (err, files) => {
      if (err) {
        return res.status(500).json({
          msg: "Erro ao lista imagens",
        });
      }

      const images = files.filter(
        (file) =>
          file.endsWith(".jpg") ||
          file.endsWith(".png") ||
          file.endsWith(".jpeg")
      );
      res.send(images);
    });
  },

  getImage:(req, res) => {

    const imageName = req.params.imageName;
    //raíz/src/controller/uploadController
    const imagePath = path.join(__dirname, '..','..','uploads', imageName);
    return res.sendoFile(imagePath);
  }
};

module.exports =  uploadController;
