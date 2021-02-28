let stock = document.querySelector(".stock");
let mah = document.getElementById('mah')
let mahselect = document.getElementById('mahSelectButton')
let mahPledge = document.getElementById('mahPledge')
let myCheckbox = document.getElementById("toggle");
let dim = document.getElementById("dim");
let enter = document.getElementById("enter2")
let bam = document.getElementById("bam")
// let style = getComputedStyle(bam)

const Model = [
    {
        radio: "radiolab0",
        card: "card1",
        enter: "enter1",
    },
    {
        radio: "radiolab1",
        card: "card2",
        enter: "enter2",
    }, {
        radio: "radiolab2",
        card: "card3",
        enter: "enter3",
    }, {
        radio: "radiolab3",
        card: "card4",
        enter: "enter4",
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
        let card = document.getElementsByName('card')
        let enter = document.getElementsByName("enter") 
        for (var i = 0; i <= card.length; i++) {
            for (var j = 0; j < enter.length; j++) {
               
            // console.log("card::",card[i].id)
            if (card[i].id !== getcard && enter[j].id !== getenter) {
                console.log("enter::",enter[j].id)
                card[i].style.borderColor = "hsl(210, 6%, 94%)" 
                enter[j].style.display = "none";
            } else if (card[i].id == getcard && enter[j].id == getenter ) {
                
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

// if (mahstock.innerHTML==0){
//     mah.style.opacity = 0.5;
//     mahselect.style.backgroundColor = "rgb(122, 122, 122)";
//     mahPledge.style.color = "rgb(122, 122, 122)"
// }
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
    dim.style.height = 1440 + 'px';
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
    undim()
    console.log(backprojectsheet.style.margintop)
}
/////////////////////////////////////////////////////
