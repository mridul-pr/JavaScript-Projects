function appendtoDisplay(value){
    if (value==0){
        document.getElementById("Label").textContent = '';
    }
    document.getElementById("Label").textContent +=value;
}

function clearDisplay() {
    document.getElementById('Label').textContent = '0';
}

function calculateResult() {
    const expression = document.getElementById('Label').textContent;
    const result = eval(expression);
    document.getElementById('Label').textContent = result;
  }