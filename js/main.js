function handleImageUpload() 
{

    let image = document.getElementById("upload").files[0];


    let reader = new FileReader();

    
    reader.onload = function(e) {
        
        document.getElementById("display-image").src = e.target.result;

    }

    reader.readAsDataURL(image);

    if (FileReader.result != '') {
        document.getElementById("label").classList.add('hidden');

    }


} 