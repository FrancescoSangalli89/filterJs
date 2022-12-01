let image;
let filterControls = document.querySelectorAll('input[type=range]');

function handleImageUpload() 
{

    image = document.getElementById("upload").files[0];

    let reader = new FileReader();
    
    reader.onload = function(e) {
        
        document.getElementById("display-image").src = e.target.result;
    }

    reader.readAsDataURL(image);

    if (FileReader.result != '') {
        document.getElementById("label").classList.add('hidden');
        document.getElementById('filters-container').classList.add('show');
    }
}


function applyFilter() {
    image = document.getElementById("display-image");
    let computedFilters = '';
    filterControls.forEach(function(item) {
        computedFilters += item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ') ';
    });
    image.style.filter = computedFilters;
}