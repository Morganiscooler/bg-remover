
document.getElementById("clickSubmit").addEventListener("click", removeBackground);

function removeBackground() {

  var fileInput = document.getElementById("fileSelector");

  var file = fileInput.files[0];

  var formData = new FormData();

  formData.append("image_file", file);

  fetch("https://api.remove.bg/v1.0/removebg", {

    method: "POST",

    headers: {

      "X-Api-Key": "8UvDuz97hr15MGsPGKfkadNS"

      // "X-Api-Key": "8UvDuz97hr15MGsPGKfkadNS"

    },

    body: formData

  })

  .then(response => response.blob())

  .then(blob => {

    var url = URL.createObjectURL(blob);

    var resultDiv = document.getElementById("imagePreview");

    resultDiv.innerHTML = "";

    var image = new Image();

    image.src = url;

    resultDiv.appendChild(image);



    // Create download link

    var link = document.createElement("a");

  link.href = url;

  link.download = "background_removed.png";

  var span = document.createElement("span");

  span.innerHTML = "Download <i class='fa fa-download'></i>";

  
  span.style.position = "absolute";

  span.style.bottom = "90%";

  span.style.left = "25%";

  span.style.fontSize = "25px";


  link.appendChild(span);

  resultDiv.appendChild(link);

  })

  .catch(error => {

    console.error(error);

  });

}




  