function submitData() {
  // Get the image file and text input values
  var productimage = document.getElementById('productImage').files[0];
  var productName = document.getElementById('productName').value;
  var productPrice = document.getElementById('productPrice').value;

  // Create a FormData object and append the image and text input values to it
  var formData = new FormData();
  formData.append('productimage', productimage);
  formData.append('productName', productName);
  formData.append('productPrice', productPrice);

  // Send a POST request to the Flask server with the form data
  fetch('/saveselldata', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert('Data has been successfully saved!');
  })
  .catch(error => {
    console.error(error);
    alert('An error occurred while saving the data.');
  });
}
