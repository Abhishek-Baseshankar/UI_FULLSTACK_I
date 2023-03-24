
var flag = true
var session;
function TimeoutSession(){
    // setTimeout(display,1000)
    session = setInterval(toggleColour,400)
}

function stopSession(){
     clearInterval(session)
}


// function  display(){

//     document.getElementById("secondtDiv").innerText = "Bomb Blast"
//     document.getElementById("secondtDiv").style.backgroundColor = "red"


// }


function toggleColour(){

    flag = ! flag

    if(flag){
        document.getElementById("thirdDiv").style.backgroundColor="red"
    }else{
        document.getElementById("thirdDiv").style.backgroundColor="green"
    }


}