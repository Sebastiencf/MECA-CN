# TO DO

## Compression de fichiers 
Compression de fichiers via sharp

```bash
npm install sharp
```

Déjà effectué, tout comme l'import dans le server.js.

Tâche à réaliser -> 
- Appliquer sharp dans les configurations multer pour qu'à l'import d'une image, elle soit automatiquement compressée et transformer au format webp

<br><br>
Voici une version généralisée selon ChatGPT (à adapter et modifier/réparer) : 
<br><br>

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


<br><br><br>
---
<br><br><br>


### Proposition 2 - Claude
***création d'un middleware de compression***
Code : 
```js
//ANCHOR: Middleware de compression d'images
async function compressImage(req, res, next) {
  if (!req.file) return next();

  try {
    const file = req.file;
    const ext = path.extname(file.originalname);
    
    // Remplace le fichier par sa version compressée
    const compressedPath = file.path.replace(ext, '.webp');
    
    await sharp(file.path)
      .resize(1200, 800, {
        fit: "inside",
        withoutEnlargement: true
      })
      .toFormat("webp", { quality: 80 })
      .toFile(compressedPath);

    // Supprime l'original et met à jour req.file
    fs.unlinkSync(file.path);
    req.file.path = compressedPath;
    req.file.filename = path.basename(compressedPath);
    req.file.originalname = path.basename(compressedPath);

    next();
  } catch (err) {
    console.error("Erreur compression image:", err);
    res.status(500).send("Erreur lors de la compression");
  }
}
```

***Exemple d'utilisation dans les routes : 

```js
// Exemple pour les produits
router.post("/admin/produits/create", 
  uploadProduits.single("image"), 
  compressImage,  // ← Le middleware de compression
  async (req, res) => {
    try {
      const imagePath = req.file.path; // Chemin du fichier compressé
      // Enregistre imagePath en DB
      res.json({ success: true, image: imagePath });
    } catch (err) {
      res.status(500).send("Erreur");
    }
  }
);

// Exemple pour les actus
router.post("/admin/actus/create", 
  uploadActu.single("image"), 
  compressImage,  // ← Même middleware
  async (req, res) => {
    // ...
  }
);

// Exemple pour les machines
router.post("/admin/machines/create", 
  uploadMachines.single("image"), 
  compressImage,  // ← Réutilisable partout
  async (req, res) => {
    // ...
  }
);
```