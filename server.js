// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var characters = [
  {
    customerID: "Brad",
    name: "Brad Bahmanpour",
    phonenumber: "310-508-0883",
    email: "brad@easervices.net"
  },
  {
    customerID: "Daniel",
    name: "Daniel",
    phonenumber: "818-567-8900",
    email: "daniel@easervices.net"
  },
  {
    customerID: "Alex Rhee",
    name: "Alex",
    phonenumber: "818-312-2906",
    email: "alex@easervices.net"
  },
  {
    customerID: "Mary Brown",
    name: "Mary",
    phonenumber: "818-312-2906",
    email: "mary@easervices.net"
  },
  {
    customerID: "Lisa White",
    name: "Lisa",
    phonenumber: "818-111-2906",
    email: "lisa@easervices.net"
  },
  {
    customerID: "Kate Martin",
    name: "Kate",
    phonenumber: "818-222-2906",
    email: "kate@easervices.net"
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:characters?", function(req, res) {
  var chosen = req.params.characters;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
    return res.json(false);
  }
  return res.json(characters);
});

// Create New Characters - takes in JSON input
app.get("/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
 // var newcharacter = req.body;

  //console.log(characters);
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
 // newcharacter.routeName = newcharacter.Name.replace(/\s+/g, "").toLowerCase();

  res.json(characters);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
