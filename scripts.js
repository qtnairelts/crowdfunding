let mahstock = document.querySelector(".mahstock");
let mah = document.getElementById('mah')
let mahselect = document.getElementById('mahSelectButton')
let mahPledge = document.getElementById('mahPledge')


if (mahstock.innerHTML==0){
    mah.style.opacity = 0.5;
    mahselect.style.backgroundColor = "rgb(122, 122, 122)";
    mahPledge.style.color = "rgb(122, 122, 122)"
}

