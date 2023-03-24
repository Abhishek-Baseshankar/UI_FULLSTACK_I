function arrayIntro(){
    var a = [11,22,333,433,111,555,444,["Achal", "Gudiya", "Siddhi"],555,777,889,["Rani"],222,444,666,5]
    var print=document.getElementById("print");
    console.log(typeof(a))
    for(var i=0;i<a.length;i++){
        if(typeof(a[i])=="object"){
            for(var j=0;j<a[i].length;j++){
                console.log(a[i][j]);
                var s=a[i][j];
                print.innerHTML+=s+"<br>";
            }
        }else{
            // console.log(a[i])
            var s=a[i];
                print.innerHTML+=s+"<br>";
                // alert("hi");
        }
    }
}