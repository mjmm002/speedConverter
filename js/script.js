var dropList = document.getElementById("drop-list");
var input = document.getElementById("floatingInput");

var speedList = [
    "Kilometer per hour",
    "Meter per second",
    "Miles per hour",
    "Feet per second",
    "Knot",
    "Mach(Speed of sound)"   
]




for(var i = 0; i < speedList.length; i++) {
    var opt = speedList[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    dropList.appendChild(el);
}
input.addEventListener("keyup", result);
dropList.addEventListener("change", result);

function result(){
    if (dropList.value ===  "Kilometer per hour"){
        let kph = input.value;
        let mps = kph / 3.6;
        let fps = kph / 1.097;
        let mph = kph / 1.609;
        let knt = kph / 1.852;
        let mac = kph / 1235;
        document.getElementById("mps").innerHTML = mps.toFixed(2);
        document.getElementById("fps").innerHTML = fps.toFixed(2);
        document.getElementById("mph").innerHTML = mph.toFixed(2);
        document.getElementById("knt").innerHTML = knt.toFixed(2);
        document.getElementById("mac").innerHTML = mac.toFixed(2);
        document.getElementById("card-kph").style.display = "none";    
        document.getElementById("card-mps").style.display = "block";    
        document.getElementById("card-mph").style.display = "block";    
        document.getElementById("card-knt").style.display = "block";    
        document.getElementById("card-fps").style.display = "block";    
        document.getElementById("card-mac").style.display = "block";    
    } else if (dropList.value === "Meter per second"){
        let mps = input.value;
        let kph = mps * 3.6;
        let fps = mps * 3.28084;
        let mph = mps * 2.23694;
        let knt = mps * 1.94384;
        let mac = mps * 0.00291545;
        document.getElementById("kph").innerHTML = kph.toFixed(2);
        document.getElementById("fps").innerHTML = fps.toFixed(2);
        document.getElementById("mph").innerHTML = mph.toFixed(2);
        document.getElementById("knt").innerHTML = knt.toFixed(2);
        document.getElementById("mac").innerHTML = mac.toFixed(2);
        document.getElementById("card-mps").style.display = "none";  
        document.getElementById("card-kph").style.display = "block";    
        document.getElementById("card-mph").style.display = "block";    
        document.getElementById("card-knt").style.display = "block";    
        document.getElementById("card-fps").style.display = "block";    
        document.getElementById("card-mac").style.display = "block";
    } else if (dropList.value === "Miles per hour"){
        let mph = input.value;
        let mps = mph * 0.44704;
        let kph = mph * 1.60934;
        let fps = mph * 1.46667;
        let knt = mph * 0.86897383228421254;
        let mac = mph * 0.00130332;
        document.getElementById("kph").innerHTML = kph.toFixed(2);
        document.getElementById("fps").innerHTML = fps.toFixed(2);
        document.getElementById("mps").innerHTML = mps.toFixed(2);
        document.getElementById("knt").innerHTML = knt.toFixed(2);
        document.getElementById("mac").innerHTML = mac.toFixed(2);
        document.getElementById("card-mph").style.display = "none";
        document.getElementById("card-mps").style.display = "block";    
        document.getElementById("card-kph").style.display = "block";    
        document.getElementById("card-knt").style.display = "block";    
        document.getElementById("card-fps").style.display = "block";    
        document.getElementById("card-mac").style.display = "block";  
    } else if (dropList.value === "Feet per second"){
        let fps = input.value;
        let mps = fps / 3.281;
        let kph = fps * 1.097;
        let mph = fps / 1.467;
        let knt = fps / 1.688;
        let mac = fps / 1125;
        document.getElementById("kph").innerHTML = kph.toFixed(2);
        document.getElementById("mph").innerHTML = mph.toFixed(2);
        document.getElementById("mps").innerHTML = mps.toFixed(2);
        document.getElementById("knt").innerHTML = knt.toFixed(2);
        document.getElementById("mac").innerHTML = mac.toFixed(2);
        document.getElementById("card-fps").style.display = "none";
        document.getElementById("card-mps").style.display = "block";    
        document.getElementById("card-mph").style.display = "block";    
        document.getElementById("card-knt").style.display = "block";    
        document.getElementById("card-kph").style.display = "block";    
        document.getElementById("card-mac").style.display = "block";  
    } else if (dropList.value === "Knot"){
        let knt = input.value;
        let mps = knt / 1.944;
        let kph = knt * 1.852;
        let mph = knt * 1.151;
        let fps = knt * 1.688;
        let mac = knt / 666.7;
        document.getElementById("kph").innerHTML = kph.toFixed(2);
        document.getElementById("mph").innerHTML = mph.toFixed(2);
        document.getElementById("mps").innerHTML = mps.toFixed(2);
        document.getElementById("fps").innerHTML = fps.toFixed(2);
        document.getElementById("mac").innerHTML = mac.toFixed(2); 
        document.getElementById("card-knt").style.display = "none";
        document.getElementById("card-mps").style.display = "block";    
        document.getElementById("card-mph").style.display = "block";    
        document.getElementById("card-kph").style.display = "block";    
        document.getElementById("card-fps").style.display = "block";    
        document.getElementById("card-mac").style.display = "block"; 
    } else if (dropList.value === "Mach(Speed of sound)"){
        let mac = input.value;
        let mps = mac * 343;
        let kph = mac * 1235;
        let mph = mac * 767.3;
        let knt = mac * 666.7;
        let fps = mac * 1125;
        document.getElementById("kph").innerHTML = kph;
        document.getElementById("mph").innerHTML = mph;
        document.getElementById("mps").innerHTML = mps;
        document.getElementById("knt").innerHTML = knt;
        document.getElementById("fps").innerHTML = fps;
        document.getElementById("card-mac").style.display = "none";
        document.getElementById("card-mps").style.display = "block";    
        document.getElementById("card-mph").style.display = "block";    
        document.getElementById("card-knt").style.display = "block";    
        document.getElementById("card-fps").style.display = "block";    
        document.getElementById("card-kph").style.display = "block";  
    }
    
}

var number = document.getElementById('floatingInput');

// Listen for input event on numInput.
number.onkeydown = function(e) {
    if (e.keyCode === 189 || e.keyCode === 63 || e.keyCode === 169 || e.keyCode === 109) {
        e.preventDefault();
    }
}
  
