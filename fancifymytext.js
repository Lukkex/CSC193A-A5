function helloWorldAlert(){
    //alert("Hello, world!");
    document.getElementById("fancyText").style.fontSize = "24pt";
}

function fancy(){
    if (fancy.checked = true){
        //alert("Hello!")
        document.getElementById("boring").checked = false;
        document.getElementById("fancyText").style.fontWeight = "bolder";
        document.getElementById("fancyText").style.textDecoration = "underline";
        document.getElementById("fancyText").style.color = "blue";
    }
}

function boring(){
    if (boring.checked = true){
        document.getElementById("fancy").checked = false;
        document.getElementById("fancyText").style.fontWeight = "normal";
        document.getElementById("fancyText").style.textDecoration = "none";
        document.getElementById("fancyText").style.color = "black";
    }
}

function moo(){
    document.getElementById("fancyText").value = document.getElementById("fancyText").value.toUpperCase();

    var str = document.getElementById("fancyText").value;
    var parts = str.split(".");  
    str = parts.join("-Moo.");  

    document.getElementById("fancyText").value = str;
}