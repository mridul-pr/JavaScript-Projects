const btndecrease = document.getElementById("decrease");
const btnreset = document.getElementById("reset");
const btnincrease = document.getElementById("increase");
let Count = 0;

btndecrease.onclick = function(){
    Count--;
    document.getElementById("count").textContent=Count
}

btnreset.onclick = function(){
    Count= 0;
    document.getElementById("count").textContent=Count
}

btnincrease.onclick = function(){
    Count ++;
    document.getElementById("count").textContent=Count
}

