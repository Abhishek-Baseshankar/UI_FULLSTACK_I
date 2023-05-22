function submitData(){
    //collect data
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    //make object of the data
    let data ={
        "email":email,
        "password":password
    }
    console.log(data)

    let xhr = new XMLHttpRequest();
    let url = "http://127.0.0.1:7000/send_data"
    xhr.open("POST", url ,true)
  
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function(){
      if(xhr.status === 200){
        console.log('success', xhr.responseText);
        var status =JSON.parse(xhr.responseText);
        console.log(typeof status)
        if(status['status']=="ok"){
          confirm("Successfully Register!")
        }
        else{
          confirm("Failed!!!!!")
        }
        // alertmessage();
      }
    }
    xhr.send(JSON.stringify(data));
    
}
function openLogin(){
  
  window.location.href="{{url_for('login')}}";
}