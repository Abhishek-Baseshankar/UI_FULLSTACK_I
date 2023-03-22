
function changeLight(Color1){
    let redLight = document.getElementById("red");
    let yellowLight = document.getElementById("yellow");
    let greenLight = document.getElementById("green");
    if(Color1=="red"){
        redLight.style.backgroundColor = "red";
        yellowLight.style.backgroundColor = "rgb(253, 243, 243,0.1)";
        greenLight.style.backgroundColor = "rgb(253, 243, 243,0.1)";
    }
    else if(Color1=="yellow"){
        redLight.style.backgroundColor = "rgb(253, 243, 243,0.1)";
        yellowLight.style.backgroundColor = "rgb(255,255,0)";
        greenLight.style.backgroundColor = "rgb(253, 243, 243,0.1)";
    }
    if(Color1=="green"){
        redLight.style.backgroundColor = "rgb(253, 243, 243,0.1)";
        yellowLight.style.backgroundColor = "rgb(253, 243, 243,0.1)";
        greenLight.style.backgroundColor = "green";
    }
}
