
var newBtn = document.querySelector("#addPlayer");
var resBtn = document.querySelector("#addScores");
var sortBtn = document.querySelector("#sortPlayers");
var resBtnVar = [];
var incNames = 0;
var incResults = 0;
var incButtons = 0;

var obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented 
        // every time an element is added.
        [].push.call(this, elem);
    }
};
//new player button
newBtn.addEventListener("click", function(){
    obj.addElem({name:prompt("Name player"), result:0});
    createDivGroup();
    createPlayersNames();
    createPlayersResults();
    createPlayersButtons();
    deletePlayerButton();
});
//to do - sort players button

// create html paragrafs
function createDivGroup(){
    var div = document.createElement("div");
    var parent = document.getElementById("players");
    parent.appendChild(div);
    div.classList.add("playerDivGroup");
    div.setAttribute("id", "group" + incButtons);
}

function createPlayersNames (){
var para = document.createElement("p");
    var node = document.createTextNode(obj[incNames].name);
    para.appendChild(node);
    var element = document.getElementById("group" + incButtons);
    element.appendChild(para);
    para.classList.add("names");
    para.setAttribute("id","name" + incNames);
    incNames++;
}
function createPlayersResults() {
    var para = document.createElement("p");
    var node = document.createTextNode(obj[incResults].result);
    para.appendChild(node);
    var element = document.getElementById("group" + incButtons);
    element.appendChild(para);
    para.classList.add("results");
    para.setAttribute("id","result" + incResults);
    incResults++;
}

//add scores button
function createPlayersButtons() {
    var para = document.createElement("button");
    var node = document.createTextNode("Add score");
    para.appendChild(node);
    var element = document.getElementById("group" + incButtons);
    element.appendChild(para);
    para.classList.add("scoreBtn");
    para.setAttribute("id","btn" + incButtons);
    resBtnVar.push("btn" + incButtons);
    addClick("btn" + incButtons, incButtons, "result" + incButtons);
}
//add delete player button
function deletePlayerButton(){
    var para = document.createElement("button");
    var node = document.createTextNode("Delete player");
    para.appendChild(node);
    var element = document.getElementById("group" + incButtons);
    element.appendChild(para);
    para.classList.add("deleteBtn");
    para.setAttribute("id", "delBtn" + incButtons);
    addDelClick("delBtn" + incButtons, incButtons);
    incButtons++;
}

function addClick(i, j, k){
    var a = document.getElementById(i);
    a.addEventListener("click", function(){
    var b = Number(prompt("Enter new player score"));
    if (isNaN(b)){
        alert("Please enter the number.");
    } else {
        obj[j].result += b;
        var c = document.getElementById(k);
        c.textContent = obj[j].result;
    }
    });
}


function addDelClick(i, j){
    var a = document.getElementById(i);
    a.addEventListener("click", function(){
       var parent = document.getElementById("players");
       var divGroup = document.getElementById("group" + j)
       parent.removeChild(divGroup);
       delete obj[j]; 
    });
}


 

