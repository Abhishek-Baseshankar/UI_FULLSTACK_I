var step3;
function moveimg2(){
    var step=1;
    var y = document.getElementById("mario").offsetTop;
    var x = document.getElementById("mario").offsetLeft;
    // document.getElementById("display").innerHTML="<h1>"+y +" "+x+"</h1>";
    if(x<1400 || y<450){
        if(y<450){
            y=y+step;
        }
        if(x<1400){
            x=x+step;
        }
    document.getElementById("mario").style.top=y+"px";
    document.getElementById("mario").style.left=x+"px";
    }
    else{
        clearTimeout(step3);
        document.getElementById("mario").style.transform="scalex(-1)";
        document.getElementById("box2").style.backgroundColor="lightgreen";
        document.getElementById("crown").style.display="block";
        // movestep3();
    }
}

function movestep3(){
    moveimg2();
    step3= setTimeout(movestep3,100);
}
var step2;
function moveimg1(){
    var step=1;
    var y = document.getElementById("mario").offsetTop;
    var x = document.getElementById("mario").offsetLeft;
    // document.getElementById("display").innerHTML="<h1>"+y +" "+x+"</h1>";
    if(x<1090){
        // if(y>175){
        //     y=y-step-0.5;
        // }
        if(x<1090){
            x=x+step;
        }
    document.getElementById("mario").style.top=y+"px";
    document.getElementById("mario").style.left=x+"px";
    }
    else{
        clearTimeout(step2);
        movestep3();
    }
}
function movestep1(){
    moveimg1();
    step2=setTimeout(movestep1,60);
}

function moveimg(){
    var step=1;
    var y = document.getElementById("mario").offsetTop;
    var x = document.getElementById("mario").offsetLeft;
    // document.getElementById("display").innerHTML="<h1>"+y +" "+x+"</h1>";
    if(y>175 || x<420){
        if(y>175){
            y=y-step-0.5;
        }
        if(x<420){
            x=x+step;
        }
    document.getElementById("mario").style.top=y+"px";
    document.getElementById("mario").style.left=x+"px";
    }
    else{
        clearTimeout(step);
        movestep1();
    }
}

function Start(){
    moveimg();
    var step=setTimeout(Start,40);
}