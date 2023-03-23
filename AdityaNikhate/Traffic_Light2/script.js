var stop1,stop2,stop3,stop4;
//main code for start button
function startlight(){
    stop1=toplight();
    // leftlight();
    stop2=setTimeout(leftlight,5000);
    stop3=setTimeout(rightlight,10000);
    stop4=setTimeout(downlight,15000)
    // rightlight();
    // downlight();
}

// code for stop button
function stoplight(){
    clearTimeout(stop1);
    clearTimeout(stop2);
    clearTimeout(stop3);
    clearTimeout(stop4);
}

//make default
function makeDefault(){
    document.getElementById("top-red").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("top-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("left-red").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("left-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("right-red").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("right-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("down-red").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("down-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";

    document.getElementById("top-green1").style.color="#1b1616";
    document.getElementById("top-green2").style.color="#1b1616";
    document.getElementById("top-green3").style.color="#1b1616";
    document.getElementById("left-green1").style.color="#1b1616";
    document.getElementById("left-green2").style.color="#1b1616";
    document.getElementById("left-green3").style.color="#1b1616";
    document.getElementById("right-green1").style.color="#1b1616";
    document.getElementById("right-green2").style.color="#1b1616";
    document.getElementById("right-green3").style.color="#1b1616";
    document.getElementById("down-green1").style.color="#1b1616";
    document.getElementById("down-green2").style.color="#1b1616";
    document.getElementById("down-green3").style.color="#1b1616";
    
}

function toplight(){
    document.getElementById("top-red").style.backgroundColor="red";
    setTimeout(topyellow,1500);
    setTimeout(topgreen,3000);
    setTimeout(makeDefault,4500)
}
function topyellow(){
    document.getElementById("top-red").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("top-yellow").style.backgroundColor="yellow";
    document.getElementById("left-yellow").style.backgroundColor="yellow";
    document.getElementById("right-yellow").style.backgroundColor="yellow";
    document.getElementById("down-yellow").style.backgroundColor="yellow";

}
function topgreen(){
    document.getElementById("top-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("left-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("right-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("down-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";

    document.getElementById("top-red").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("left-red").style.backgroundColor="red";
    document.getElementById("right-red").style.backgroundColor="red";
    document.getElementById("down-red").style.backgroundColor="red";
    document.getElementById("top-green1").style.color="green";
    document.getElementById("top-green2").style.color="green";
    document.getElementById("top-green3").style.color="green";
}

// left light 
function leftlight(){
    document.getElementById("left-red").style.backgroundColor="red";
    setTimeout(leftyellow,1500);
    setTimeout(leftgreen,3000);
    setTimeout(makeDefault,4500);
}
function leftyellow(){
    document.getElementById("left-red").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("left-yellow").style.backgroundColor="yellow";
    document.getElementById("top-yellow").style.backgroundColor="yellow";
    document.getElementById("right-yellow").style.backgroundColor="yellow";
    document.getElementById("down-yellow").style.backgroundColor="yellow";

}
function leftgreen(){
    document.getElementById("top-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("left-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("right-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("down-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";

    document.getElementById("left-red").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("top-red").style.backgroundColor="red";
    document.getElementById("right-red").style.backgroundColor="red";
    document.getElementById("down-red").style.backgroundColor="red";
    document.getElementById("left-green1").style.color="green";
    document.getElementById("left-green2").style.color="green";
    document.getElementById("left-green3").style.color="green";
}

//right light
function rightlight(){
    document.getElementById("right-red").style.backgroundColor="red";
    setTimeout(rightyellow,1500);
    setTimeout(rightgreen,3000);
    setTimeout(makeDefault,4500);
}

function rightyellow(){
    document.getElementById("right-red").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("right-yellow").style.backgroundColor="yellow";
    document.getElementById("top-yellow").style.backgroundColor="yellow";
    document.getElementById("left-yellow").style.backgroundColor="yellow";
    document.getElementById("down-yellow").style.backgroundColor="yellow";

}
function rightgreen(){
    document.getElementById("top-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("left-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("right-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("down-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";

    document.getElementById("right-red").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("top-red").style.backgroundColor="red";
    document.getElementById("left-red").style.backgroundColor="red";
    document.getElementById("down-red").style.backgroundColor="red";
    document.getElementById("right-green1").style.color="green";
    document.getElementById("right-green2").style.color="green";
    document.getElementById("right-green3").style.color="green";
}

//down light
function downlight(){
    document.getElementById("down-red").style.backgroundColor="red";
    setTimeout(downyellow,1500);
    setTimeout(downgreen,3000);
    setTimeout(makeDefault,4500);
}
function downyellow(){
    document.getElementById("down-red").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("right-yellow").style.backgroundColor="yellow";
    document.getElementById("top-yellow").style.backgroundColor="yellow";
    document.getElementById("left-yellow").style.backgroundColor="yellow";
    document.getElementById("down-yellow").style.backgroundColor="yellow";

}
function downgreen(){
    document.getElementById("top-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("left-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("right-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("down-yellow").style.backgroundColor="rgba(67, 64, 64, 0.5)";

    document.getElementById("down-red").style.backgroundColor="rgba(67, 64, 64, 0.5)";
    document.getElementById("top-red").style.backgroundColor="red";
    document.getElementById("left-red").style.backgroundColor="red";
    document.getElementById("right-red").style.backgroundColor="red";
    document.getElementById("down-green1").style.color="green";
    document.getElementById("down-green2").style.color="green";
    document.getElementById("down-green3").style.color="green";
}