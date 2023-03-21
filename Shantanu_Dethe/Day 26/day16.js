function Arrayintro(){
    var a = [12,14 ,18,11117,"aditya","swapnil","ashx",111]
   
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

