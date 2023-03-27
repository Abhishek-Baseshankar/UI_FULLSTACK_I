function correctanswer()
{
    
    var data = document.getElementById("ans").value 
    if(data=="Engineering")
    {
        document.getElementById("main").style.backgroundColor='green';
    }
    else
    {
        document.getElementById("main").style.backgroundColor='red';
    }
        
}

function checkAnswer()
{
    
    var data = document.getElementById("capital").value 
    if(data=="New Delhi")
    {
        document.getElementById("answer").style.backgroundColor='green';
    }
    else
    {
        document.getElementById("answer").style.backgroundColor='red';
    }
        
}