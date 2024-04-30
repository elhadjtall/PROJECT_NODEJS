// Definir les dependances
const express = require("express");
const app = express();

// Definier le modele ejs template 
app.set("view engine", "ejs");

// Renvoie le contenu du fichier index.ejs
app.get("/", function(req, res) {
    res.render("index");
})


// Definir le port du serveur
app.listen(3000, () => {
    console.log("Mon serveur est lance au port 3000");
})