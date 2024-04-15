const PI = 3.14;
let circum;
let radius;

document.getElementById("onSumbit").onclick=function(){
    radius=document.getElementById("getRadius").value;
    radius=Number(radius);
    circum = 2 * PI * radius;
    console.log('circum');
    document.getElementById("result").textContent= circum + "cm";
}