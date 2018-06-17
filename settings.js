const fs = require("fs");
loadSettings();

function save(Username, Server){
    var content = JSON.stringify({"username": Username, "Server": "test1234"});;
    fs.writeFile("settings.json", content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
}

function loadSettings(){
    const settings = require("./settings.json");
    var Username = settings.username;
    console.log(Username);
    document.getElementById("MCNameInput").value = Username;
}

module.exports = {
    save: save
};