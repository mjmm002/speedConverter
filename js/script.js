document.getElementById("floatingInput").addEventListener("input", function(e){
    let kph = e.target.value;
    document.getElementById("mps").innerHTML = kph /3.6;
    document.getElementById("fps").innerHTML = kph / 1.097;
    document.getElementById("mph").innerHTML = kph / 1.609;
    document.getElementById("knt").innerHTML = kph / 1.852;
    document.getElementById("mac").innerHTML = kph / 1235;

});
