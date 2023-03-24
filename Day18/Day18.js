
var flag = true
var session;
function TimeoutSession(){
    session = setInterval(toggleColour,700)
}


function toggleColour(){

    flag = ! flag
    
    var redb = document.getElementsByClassName("blinkdiv")

    console.log(typeof(redb))

    for(let ele of redb ){

    if(flag){
        ele.style.backgroundColor = "red"
    }else{
        ele.style.backgroundColor = "green"
    }

}


}