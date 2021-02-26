let mahstock = document.querySelector(".mahstock");
let mah = document.getElementById('mah')
let mahselect = document.getElementById('mahSelectButton')
let mahPledge = document.getElementById('mahPledge')
let myCheckbox = document.getElementById("toggle");
let dim = document.getElementById("dim");
let radio = document.getElementById("radio2")
let enter = document.getElementById("enter2")
let bam = document.getElementById("bam")
let style = getComputedStyle(bam)




if (mahstock.innerHTML==0){
    mah.style.opacity = 0.5;
    mahselect.style.backgroundColor = "rgb(122, 122, 122)";
    mahPledge.style.color = "rgb(122, 122, 122)"
}

myCheckbox.oninput = function () {
    // console.log(myCheckbox.checked);
    if(myCheckbox.checked){
        dim.style.height = 1440 +'px';
        console.log(dim.style.height)
    } else{
        dim.style.height = 0 +'px';
    }
  }


function dimm(){
    dimst.display =="block"
}
radio.oninput = function () {
if(radio.checked){
    enter.style.display = "block";
    bam.style.borderColor ="hsl(176, 50%, 47%)";
    console.log(style.border);
    console.log(radio.checked);
}else if(!radio.checked){
    enter.style.display = "none";
}
}
console.log(style.border)
console.log(enter.style.display)


when backbutton click, backproject opacity=1;
radio cause standcard border color change,
need to rename backproject cardid