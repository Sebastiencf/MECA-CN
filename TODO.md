# TO DO

## Compression de fichiers 
Compression de fichiers via sharp

```bash
npm install sharp
```

Déjà effectué, tout comme l'import dans le server.js.

Tâche à réaliser -> 
- Appliquer sharp dans les configurations multer pour qu'à l'import d'une image, elle soit automatiquement compressée et transformer au format webp


Voici une version généralisée selon ChatGPT (à adapter et modifier/réparer) : 
```js
const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// stockage temporaire
const upload = multer({
  dest: "uploads/tmp/"
});

router.post("/create-article", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;

    const outputPath = `uploads/articles/${Date.now()}.webp`;
    await sharp(file.path)
      .resize(1200, 800, {
        fit: "inside", // garde les proportions
        withoutEnlargement: true
      })
      .toFormat("webp", { quality: 80 })
      .toFile(outputPath);

    // supprimer fichier temporaire
    fs.unlinkSync(file.path);

    // ici tu enregistres outputPath en DB
    res.json({ success: true, image: outputPath });

  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur upload image");
  }
});
```