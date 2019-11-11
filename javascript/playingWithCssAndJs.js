document.getElementById("Wildness").innerHTML = "Wildness";
document.getElementById("Wandile").innerHTML = "$$$$$$$$$$$";
document.getElementById("mydiv2").style.backgroundColor = "lightblue";
document.getElementById("mydiv2").style.padding = "10px";
document.getElementById("mydiv").style.backgroundColor = "pink";
document.getElementById("mydiv").style.textAlign = "left";

var listItem1 = document.createElement("li");
var listItem2 = document.createElement("li");
var listItem3 = document.createElement("li");
listItem1.innerHTML = "item1";
listItem2.innerHTML = "item2";
listItem3.innerHTML = "item3";

document.getElementById("unorderlist").appendChild(listItem1);
document.getElementById("unorderlist").appendChild(listItem2);
document.getElementById("unorderlist").appendChild(listItem3);