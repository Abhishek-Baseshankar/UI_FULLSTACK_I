function makeLight(Light1){
    let stopLight=document.getElementById("red");
    let slowLight=document.getElementById("yellow");
    let goliLight=document.getElementById("green");
  
    if(Light1=="red"){
      stopLight.style.backgroundColor = "red";
      slowLight.style.backgroundColor = "";
      goliLight.style.backgroundColor = "";
    }else if(Light1=="yellow"){
      stopLight.style.backgroundColor = "";
      slowLight.style.backgroundColor = "yellow";
      goliLight.style.backgroundColor = "";
    }if(Light1=="green"){
      stopLight.style.backgroundColor = "";
      slowLight.style.backgroundColor = "";
      goliLight.style.backgroundColor = "green";
    }
  }