function arrayIntro(){
    var a = [11,22,333,433,111,555,444,555,"Abhishek",777,889,["aa","bb","cc"],222,444,666,5]

    console.log(typeof(a))
    for(var i=0;i<a.length;i++){
        if(typeof(a[i])=="object"){
            for(var j=0;j<a[i].length;j++){
                console.log(a[i][j])
            }
        }else{
            console.log(a[i])
        }
    }
}