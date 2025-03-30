const fileInput = document.getElementById('fileSelector'); // Replace 'yourFileInputId' with the actual ID of your input element
const uploadBtn = document.getElementById('clickSubmit');

fileInput.addEventListener('change', function () {
    if (fileInput.files.length > 0) {
        // A file has been selected
        console.log(`File selected: ${fileInput.files[0].name}`); // Access the file name
        uploadBtn.style.display = "block";
      
      } else {
        // No file has been selected
        console.log('No file selected');
        uploadBtn.style.display = "none";
      }
  });


//   Displaying the image is bugged, fix this later.
function displayImage(event){
    document.getElementById("showImg").src = URL.createObjectURL(event.target.files[0]);
}