var outputInput = document.getElementById("input-output")
var colorInput = document.getElementById("input-color")

colorInput.addEventListener('change',setColor)
function setColor() {
    var color = colorInput.value;
    outputInput.value = color;
}