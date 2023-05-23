var flag = true
function timeoutsession(){
    setTimeout(display)
    setInterval( togglecolor,1500)
}

function display(){
      document.getElementById("firstdiv").innerText = ("start") 
      document.getElementById("firstdiv").style.backgroundColor = "green"
      
}
function togglecolor(){
    flag =  ! flag
    if(flag){
        document.getElementById("seconddiv").style.backgroundcolor= "yellow"
    }else{
        document.getElementById("thirddiv").style.backgroundcolor= "red"
    }
    if(flag){
        document.getElementById("thirddiv").style.backgroundcolor= "red"
    }else{
        document.getElementById("fourthdiv").style.backgroundcolor= "yellow"

    }
    if(flag){
        document.getElementById("fourthdiv").style.backgroundcolor= "yellow"
    }else{
        document.getElementById("fourthdiv").style.backgroundcolor= "red"
    }

}

