function submitData(){
    //collect data
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let data1
    //make object of the data
    let data ={
        "email":email,
        "password":password
    }
    console.log(data)

    let xhr = new XMLHttpRequest();
    let url = "http://127.0.0.1:7000/checkLoginInfo"
    xhr.open("POST", url ,true)
  
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function(){
      if(xhr.status === 200){
        // console.log("hi")
         data1 = JSON.parse(xhr.responseText);
        const number = data1.number;
        console.log(data1);
        alertfun(data1)
      } 
    };
    console.log(data)
    xhr.send(JSON.stringify(data));
    // xhr.send();
    
    
}
function alertfun(data1){
  if(data1.flag==1){
    confirm("Successfull!!!")
    window.location.href="/loadmainPage"
  }
  else{
    confirm("Failed!!! Wrong info was entered.")
  }
}