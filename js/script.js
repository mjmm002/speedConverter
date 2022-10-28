function removeSigns() {
    var input = document.getElementById('floatingInput');
    input.value = parseInt(input.value.toString().replace('+', '').replace('-', '')
)};
document.getElementById("floatingInput").addEventListener("input", function(e){
    let kph = e.target.value;
    let mps = kph / 3.6;
    let fps = kph / 1.097;
    let mph = kph / 1.609;
    let knt = kph / 1.852;
    let mac = kph / 1235;
    document.getElementById("mps").innerHTML = mps.toFixed(3);
    document.getElementById("fps").innerHTML = fps.toFixed(3);
    document.getElementById("mph").innerHTML = mph.toFixed(3);
    document.getElementById("knt").innerHTML = knt.toFixed(3);
    document.getElementById("mac").innerHTML = mac.toFixed(3);

});

var number = document.getElementById('floatingInput');

// Listen for input event on numInput.
number.onkeydown = function(e) {
    if (e.keyCode === 189 || e.keyCode === 63 || e.keyCode === 169 || e.keyCode === 109) {
        e.preventDefault();
    }
}
  
