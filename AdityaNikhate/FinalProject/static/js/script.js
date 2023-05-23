function myFunction(){
    // Retrieve the images data from Flask in JSON format
var imagesData = JSON.parse('{{ images|safe }}');
var tableFill = document.getElementById("container12")
var out=''
console.log(imagesData.length)
// Loop through the imagesData and create HTML divs to display images
// out+="<div class='boxex'>"
for (var i = 0; i < imagesData.length; i++) {
    
    console.log(ImageData[i]);
    var image = imagesData[i];
    // var div = document.getElementById('container');
    // var title = document.createElement('p');
    // var price = document.createElement('p');
    // var img = document.createElement('img');

    // title.textContent = image.name;
    // price.textContent = image.price;
    var src1 = 'data:image/jpeg;base64,' + image.image;

    // div.appendChild(title);
    // div.appendChild(price);
    // div.appendChild(img);
    out+="<div class='boxex'>"
    out+="<div class='imgbox'><img src='"+src1+"' alt=''></div>"
    out+="<h2>"+image.name+"</h2>"
    out+="<h2>"+image.price+"</h2>"
    out+="<span class = 'checked'>&#x2605;</span> <span class = 'checked'>&#x2605;</span>  <span class = 'checked'>&#x2605;</span>  <span class = 'checked'>&#x2605;</span> <span class = 'unchecked'>&#x2605;</span> "
    out+="</div>"
    
}
tableFill.innerHTML = out
}

window.addEventListener('DOMContentLoaded', (event) => {
    myFunction();
});
