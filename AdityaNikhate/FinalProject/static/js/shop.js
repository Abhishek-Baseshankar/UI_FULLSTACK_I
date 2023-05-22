function check1(){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/senddata', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = xhr.responseText;
        console.log(response)
        // Process the retrieved data
        // response.data.forEach(function (item) {
        //   // Decode the image from base64
        //   var decodedImage = atob(item.productimage);
    
        //   // Create an <img> element and set the source
        //   var imageElement = document.createElement('img');
        //   imageElement.src = 'data:image/jpeg;base64,' + decodedImage;
    
        //   // Display the image and other data
        //   document.body.appendChild(imageElement);
        //   document.body.appendChild(document.createTextNode('Product Name: ' + item.productName));
        //   document.body.appendChild(document.createElement('br'));
        //   document.body.appendChild(document.createTextNode('Product Price: ' + item.productPrice));
        //   document.body.appendChild(document.createElement('hr'));
        // });
      }
    };
    
    xhr.send();
}