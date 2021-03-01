

let myCheckbox = document.getElementById("toggle");
let dim = document.getElementById("dim");
// let style = getComputedStyle(bam)
let card = document.getElementsByName('card')
let enter = document.getElementsByName("enter")






const Model = [
    {
        radio: "radiolab0",
        card: "card1",
        enter: "enter1",
        stocks: "",

    },
    {
        tier: "Tier1",
        radio: "radiolab1",
        card: "card2",
        enter: "enter2",
        stocks: "101",
    }, {
        tier: "Tier2",
        radio: "radiolab2",
        card: "card3",
        enter: "enter3",
        stocks: "64",

    }, {
        tier: "Tier3",
        radio: "radiolab3",
        card: "card4",
        enter: "enter4",
        stocks: "0",
    },
];


let getid = ""
let getcard = ""
let getenter = ""
var radios = document.getElementsByName('radAnswer')

for (var i = 0, length = radios.length; i < length; i++) {
    radios[i].oninput = function () {
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                getid = radios[i].id;

            }
        }
        for (let i = 0; i <= Model.length; i++) {
            if (Model[i].radio == getid) {
                getcard = Model[i].card;
                getenter = Model[i].enter;
                break
            };
        }
        // console.log("getID:", getid)
        // console.log("getcard", getcard)
        // console.log("getenter:", getenter)
        //////////////////change-border-color&prop-out-enter///////////////////

        for (var i = 0; i < card.length; i++) {
            for (var j = 0; j < enter.length; j++) {

                // console.log("card::",card.length)
                // console.log("enter::",enter.length)
                if (card[i].id !== getcard && enter[j].id !== getenter) {
                    // console.log("enter::", enter[j].id)
                    card[i].style.borderColor = "hsl(210, 6%, 94%)"
                    enter[j].style.display = "none";
                } else if (card[i].id == getcard && enter[j].id == getenter) {

                    // console.log("aimcard::",card[i].id)
                    // console.log("enteraim::",enter[j].id)
                    card[i].style.borderColor = "hsl(176, 50%, 47%)";
                    enter[j].style.display = "grid";
                }
            }
          

        }
        ////////////////////////////////////////////////////////
        
        

    }
}

///////////////gray out the card if out of stock//////////////
let stock = document.getElementsByName('amount')
let selectButton = document.getElementsByName('SelectButton')
let Pledge = document.getElementsByName('pledge')

for (var j =0 ; j < stock.length; j++) {
    // console.log(selectButton[j])
    // stock[j].textContent = Model[j + 1].stocks;
    if (stock[j].innerHTML == 0) {
        card[j].style.opacity = 0.5;
        card[j].style.pointerEvents = 'none'
        card[j+4].style.opacity = 0.5;
        card[j+4].style.pointerEvents = 'none'
        selectButton[j].style.backgroundColor = "rgb(122, 122, 122)";
        Pledge[j].style.color = "rgb(122, 122, 122)"
    }   
}
/////////////////////////////////////////////////////////
//////////////continue & Gotit button////////////////
let continues = document.getElementsByClassName("continue")
let successsheet = document.getElementById("successs")
let gotitbutton = document.getElementById("gotit")
let dollar = document.getElementById("value")
let dollarvalue = parseFloat(dollar.innerHTML)
let progressvalue = document.getElementById("progressbar").value
for(let i in continues){
continues[i].onclick = function () {
    backprojectsheet.style.zIndex = "-999"
    successsheet.style.zIndex = "999";
    dimm();
}
}

gotitbutton.onclick = function () {
    dollarvalue += 1
    dollar.innerHTML = dollarvalue
    console.log(dollarvalue)
    document.getElementById("progressbar").value = dollarvalue/100000*100
    // console.log(document.getElementById("progressbar").value )
    successsheet.style.zIndex = "-999";
    undim();
}


///////////menu-open&close///////////////
myCheckbox.oninput = function () {
    // console.log(myCheckbox.checked);
    if (myCheckbox.checked) {
        dimm();
        console.log(dim.style.height)
    } else {
        undim();
    }
}
//////////////dim-function///////////
function dimm() {
    dim.style.height = 3000 + 'px';
}
function undim() {
    dim.style.height = 0 + 'px';
}
///////////////////////////////////

////////////////backprojectbuttons//////////////
let backprojectsheet = document.getElementById("backproject");
let backbutton = document.querySelector(".backbutton");
let closebutton = document.querySelector(".closebutton");
backbutton.onclick = function () {
    backprojectsheet.style.zIndex = "999";
    dimm();
}
closebutton.onclick = function () {
    backprojectsheet.style.zIndex = "-999";
    undim();
}
/////////////////////////////////////////////////////
