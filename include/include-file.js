
function printFile(file) {
    var reader = new FileReader();
    reader.onload = function(evt) {
        console.log(evt.target.result);
    };
    reader.readAsText(file);
}

