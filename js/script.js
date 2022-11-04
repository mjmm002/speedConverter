var convertList = document.querySelector("#converter-list");
var dropList = document.getElementById("drop-list");
var input = document.getElementById("floatingInput");
var output = document.getElementById("output");
var label = document.getElementById("label");
var labels = document.getElementsByClassName("labels")
var output1 = document.querySelector("#output1")
var output2 = document.querySelector("#output2")
var output3 = document.querySelector("#output3")
var output4 = document.querySelector("#output4")
var output5 = document.querySelector("#output5")
var output6 = document.querySelector("#output6")
var title = document.querySelector(".title span")
var icon = document.querySelector('.title i')
var bg = document.querySelector(".converter-container");



var converterList= [
    "Speed",
    "Weight and Mass",
    "Temperature"
]

for (let x of converterList){
    let el = document.createElement("option");
    el.textContent = x;
    el.value = x;
    convertList.appendChild(el)    
}
label.innerHTML = "Convert..." 
output.style.visibility = "hidden";
input.addEventListener("keyup", result);
dropList.addEventListener("change", result);


function converter(list, unit){
    var list = convertList
    var unit = dropList

    unit.innerHTML = ""
    output.style.visibility = "hidden";
    input.value = ""
    label.innerHTML = "Convert..."

    if (list.value === "Speed"){
        var optionList = [
            "Kilometer per hour",
            "Meter per second",
            "Miles per hour",
            "Feet per second",
            "Knot",
            "Mach(Speed of sound)"   
        ];
        title.innerHTML = "Speed Converter"
        icon.className = "";
        icon.className = "fa-solid fa-gauge-high fa-beat";
        
        
        

    } else if (list.value === "Weight and Mass"){
        var optionList = [
            "Gram(g)",
            "Milligram(mg)",
            "Kilogram(kg)",
            "Tonne(t)",
            "Pound(lb)",
            "Ounce(oz)",
        ];
        title.innerHTML = "Weight Converter"
        icon.className =""
        icon.className = "fa-solid fa-scale-unbalanced fa-beat";

    } else if (list.value === "Temperature"){
        var optionList = [
            "Celcius",
            "Fahrenheit",
            "Kelvin"
        ];
        title.innerHTML = "Temperature"
        icon.className = "";
        icon.className= "fa-solid fa-temperature-high fa-beat";
        
    }
    for (var option of optionList){
        var newOption = document.createElement("option")
        newOption.value = option;
        newOption.innerHTML = option;
        dropList.appendChild(newOption);
        console.log(option)
        
    }
    labels[0].innerHTML = optionList[0]
    labels[1].innerHTML = optionList[1]
    labels[2].innerHTML = optionList[2]
    labels[3].innerHTML = optionList[3]
    labels[4].innerHTML = optionList[4]
    labels[5].innerHTML = optionList[5]
}

function result(){
    for (x of output.children){
    x.style.display="block"
    }
    let val = input.value;
    output.style.visibility = "visible";
    if (convertList.value === "Speed"){
       
        if (dropList.value ===  "Kilometer per hour"){
            let mps = val / 3.6;
            let fps = val / 1.097;
            let mph = val / 1.609;
            let knt = val / 1.852;
            let mac = val / 1235;
            output2.innerHTML = mps.toFixed(2);
            output3.innerHTML = fps.toFixed(2);
            output4.innerHTML = mph.toFixed(2);
            output5.innerHTML = knt.toFixed(2);
            output6.innerHTML = mac.toFixed(2);
            card1.style.display = "none";    

            label.innerHTML = "Convert Km/hr"   
        } else if (dropList.value === "Meter per second"){
            let kph = val * 3.6;
            let fps = val * 3.28084;
            let mph = val * 2.23694;
            let knt = val * 1.94384;
            let mac = val * 0.00291545;
            output1.innerHTML = kph.toFixed(2);
            output3.innerHTML = fps.toFixed(2);
            output4.innerHTML = mph.toFixed(2);
            output5.innerHTML = knt.toFixed(2);
            output6.innerHTML = mac.toFixed(2);
            card2.style.display = "none";  
            label.innerHTML = "Convert Meter/sec"  
        } else if (dropList.value === "Miles per hour"){
            let mps = val * 0.44704;
            let kph = val * 1.60934;
            let fps = val * 1.46667;
            let knt = val * 0.86897383228421254;
            let mac = val * 0.00130332;
            output1.innerHTML = kph.toFixed(2);
            output3.innerHTML = fps.toFixed(2);
            output2.innerHTML = mps.toFixed(2);
            output5.innerHTML = knt.toFixed(2);
            output6.innerHTML = mac.toFixed(2);
            card3.style.display = "none";
            label.innerHTML = "Convert Miles/hr"    
        } else if (dropList.value === "Feet per second"){
            let mps = val / 3.281;
            let kph = val * 1.097;
            let mph = val / 1.467;
            let knt = val / 1.688;
            let mac = val / 1125;
            output1.innerHTML = kph.toFixed(2);
            output4.innerHTML = mph.toFixed(2);
            output2.innerHTML = mps.toFixed(2);
            output5.innerHTML = knt.toFixed(2);
            output6.innerHTML = mac.toFixed(2);
            card5.style.display = "none"; 
            label.innerHTML = "Convert ft/sec"  
        } else if (dropList.value === "Knot"){
            let mps = val / 1.944;
            let kph = val * 1.852;
            let mph = val * 1.151;
            let fps = val * 1.688;
            let mac = val / 666.7;
            output1.innerHTML = kph.toFixed(2);
            output4.innerHTML = mph.toFixed(2);
            output2.innerHTML = mps.toFixed(2);
            output3.innerHTML = fps.toFixed(2);
            output6.innerHTML = mac.toFixed(2); 
            card4.style.display = "none";
            label.innerHTML = "Convert Knots"   
        } else if (dropList.value === "Mach(Speed of sound)"){
            let mps = val * 343;
            let kph = val * 1235;
            let mph = val * 767.3;
            let knt = val * 666.7;
            let fps = val * 1125;
            output1.innerHTML = kph;
            output4.innerHTML = mph;
            output2.innerHTML = mps;
            output5.innerHTML = knt;
            output3.innerHTML = fps;
            card6.style.display = "none";
            label.innerHTML = "Convert Mach(Speed of Sound)"   
        }

    }
    else if (convertList.value === "Weight and Mass"){
        if (dropList.value === "Gram(g)"){
            let kg = val * 0.001;
            let mg = val * 1000;
            let ton = val * 1e-6;
            let lb = val * 0.00220462;
            let oz = val * 0.035274;
            output2.innerHTML = kg.toFixed(2);
            output3.innerHTML = mg.toFixed(2);
            output4.innerHTML = ton;
            output5.innerHTML = lb.toFixed(2);
            output6.innerHTML = oz.toFixed(2);
            card1.style.display = "none"
            label.innerHTML = "Convert Grams(g)"   
        } else if (dropList.value === "Milligram(mg)"){
            let g = val * 0.001;
            let kg = val * 1e-6;
            let ton = val * 1e-9;
            let lb = val * 2.2046e-6;
            let oz = val * 3.5274e-5;
            output1.innerHTML = g;
            output3.innerHTML = kg;
            output4.innerHTML = ton;
            output5.innerHTML = lb;
            output6.innerHTML = oz;
            card2.style.display = "none"
            label.innerHTML = "Convert Milligrams (mg)"   
        }
        else if (dropList.value === "Kilogram(kg)"){
            let g = val * 1000;
            let mg = val * 1e+6;
            let ton = val * 0.001;
            let lb = val * 2.20462;
            let oz = val * 35.274;
            output1.innerHTML = g.toFixed(2);
            output2.innerHTML = mg.toFixed(2);
            output4.innerHTML = ton;
            output5.innerHTML = lb.toFixed(2);
            output6.innerHTML = oz.toFixed(2);
            card3.style.display = "none"
            label.innerHTML = "Convert Kilograms(kg)"   
        }
        else if (dropList.value === "Tonne(t)"){
            let g = val * 1e+6;
            let mg = val * 1e+9;
            let kg = val * 1000;
            let lb = val * 2204.62;
            let oz = val * 35274;
            output1.innerHTML = g.toFixed(2);
            output2.innerHTML = mg.toFixed(2);
            output3.innerHTML = kg.toFixed(2);
            output5.innerHTML = lb.toFixed(2);
            output6.innerHTML = oz.toFixed(2);
            card4.style.display = "none"
            label.innerHTML = "Convert Tonne (t)"   
        }
        else if (dropList.value === "Pound(lb)"){
            let g = val * 453.592;
            let mg = val * 453592;
            let kg = val * 0.453592;
            let ton = val * 0.000453592;
            let oz = val * 16;
            output1.innerHTML = g.toFixed(2);
            output2.innerHTML = mg.toFixed(2);
            output3.innerHTML = kg.toFixed(2);
            output4.innerHTML = ton;
            output6.innerHTML = oz.toFixed(2);
            card5.style.display = "none"
            label.innerHTML = "Convert Pounds(lb)"   
        }
        else if (dropList.value === "Ounce(oz)"){
            let g = val * 453.592;
            let mg = val * 453592;
            let kg = val * 0.453592;
            let ton = val * 0.000453592;
            let lb = val * 0.0625;
            output1.innerHTML = g.toFixed(2);
            output2.innerHTML = mg.toFixed(2);
            output3.innerHTML = kg.toFixed(2);
            output4.innerHTML = ton;
            output5.innerHTML = lb.toFixed(2);
            card6.style.display = "none"
            label.innerHTML = "Convert Ounces(oz)"   
        }
    } else if (convertList.value === "Temperature"){
        if (dropList.value === "Celcius"){
            let far = (val * 9/5) + 32;
            let kel = val + 273.15;
            output2.innerHTML = far.toFixed(2);
            output3.innerHTML = kel;
            card1.style.display = "none"
            card4.style.display = "none"
            card5.style.display = "none"
            card6.style.display = "none"
            label.innerHTML = "Convert Celcius(°C)"   
        } else if (dropList.value === "Fahrenheit"){
            let cel = (val-32) * 5/9;
            let kel = (val-32)* 5/9 + 273.15;
            output1.innerHTML = cel.toFixed(2);
            output3.innerHTML = kel.toFixed(2);
            card2.style.display = "none"
            card4.style.display = "none"
            card5.style.display = "none"
            card6.style.display = "none"
            label.innerHTML = "Convert Fahrenheit(°F)"
        } else if (dropList.value === "Kelvin"){
            let cel = val-273.15;
            let far = (val-273.15) * 9/5 + 32
            output1.innerHTML = cel.toFixed(2);
            output2.innerHTML = far.toFixed(2);
            card3.style.display = "none"
            card4.style.display = "none"
            card5.style.display = "none"
            card6.style.display = "none"
            label.innerHTML = "Convert Kelvin(K)"      
        }
    }
}



var number = document.getElementById('floatingInput');

// Listen for input event on numInput.
number.onkeydown = function(e) {
    if (e.keyCode === 189 || e.keyCode === 63 || e.keyCode === 169 || e.keyCode === 109) {
        e.preventDefault();
    }
}

