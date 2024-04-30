// Definir les dependances
const express = require("express");
const app = express();

// Definier le modele ejs template 
app.set("view engine", "ejs");


// Definir le port du serveur
app.listen(3000, () => {
    console.log("Mon serveur est lance au port 3000");
})