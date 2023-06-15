var numbs = document.querySelectorAll(".numbs");
var numbText = document.querySelectorAll(".numbs h2");
var normal = document.querySelector("#normal");

// to store the ids of buttons in html
var ids = ["one", "two", "three", "four","five", "six","seven", "eight", "nine", "zero", "multiply", "divide", "minus", "percent", "point", "plus"];

numbs.forEach(numb => {
    numb.addEventListener("click", () => {

        
        numb.classList.add("numbs1");
        for(let i = 0; i < ids.length; i++){
            //click event 
            var clicked = document.getElementById(ids[i]).firstElementChild.textContent;     
            if (normal.getAttribute('id') != "normalresult") {       
            if (numb.getAttribute('id') == ids[i]) {
                var clicked = document.getElementById(ids[i]).firstElementChild.textContent;
                var clickInput = document.createElement('h2');
                clickInput.classList.add('inner');
                normal.append(clickInput);
                var div = document.createElement("div");
                clickInput.parentElement = div;
                clickInput.textContent = clicked;
            
            
        }

        //Duration for click effect
        setTimeout(() => {
            numb.classList.remove("numbs1")
            numb.classList.add("numbs");
        }, 200)
    }
    
    else {
        setTimeout(() => {
            numb.classList.remove("numbs1")
            numb.classList.add("numbs");
        }, 200)
    }

    }}, false)
}
)

//delete event

    var backspace = document.getElementById('backspace');

        backspace.addEventListener("click", () => {
            if (normal.getAttribute('id') != "normalresult") { 
            var inputs = document.querySelectorAll('.inner');
            var inputsArray = []
            inputs.forEach((input) => {
                inputsArray.push(input);
            })
        inputsArray.forEach((input) => {
            if (inputsArray.indexOf(input) == inputsArray.length-1){
                input.remove();
            }
        }
        )} inputsArray = [];
}, false)

//defined to hold individual string of numbers
var operate = [];

//defined to hold arrays of numbers to be operated on
var sides = [];

//defined to hold individual whole numbers or decimal
var hold = "";

//defined to hold operators
var signs = [];

//defined to sumup all(result)
var sumup = 0;


var equals = document.getElementById('main-equal');
equals.addEventListener("click", () => {
    normal.setAttribute("id", "normalresult");
    var inputs = document.querySelectorAll('.inner')
    inputs.forEach(input => {
        var text = input.textContent;
        operate.push(text);
    })

    for (let i = 0; i < operate.length; i++) {
        if(!isNaN(operate[i]) || (operate[i] == ".")) {
            hold += operate[i];
      
        }
    
        else {
            sides.push(hold);
            hold = "";
            signs.push(operate[i]);
            
        }
    
        if (i == operate.length-1 && operate[i]!="%") {
            sides.push(hold);
            hold = "";
            console.log(sides)
        }

    
    }

    var check = 0;
    for (let i = 0; i < signs.length; i++){
        for (var j = i + 1; j < i + 2; j++){
            if (signs[i] == "+") {
                if (signs[0] == "+" && (check == 0)) {
                    sumup = Number(sides[0]);
                    check += 1;
                }
                sumup += Number(sides[j]);
                
            }
            else if (signs[i] == "-") {
                if (signs[0] == "-" && (check == 0)) {
                    sumup = Number(sides[0]);
                    check += 1;
                }
                sumup -= Number(sides[j]);
            }
            else if (signs[i] == "x") {
                if (signs[0] == "x" && (check == 0)) {
                    sumup = Number(sides[0]);
                    check += 1;
                }
                sumup *= Number(sides[j]);
            }
            else if (signs[i] == "/") {
                if (signs[0] == "/"&& (check == 0)) {
                    sumup = Number(sides[0]);
                    check += 1;
                }
 
                sumup /= Number(sides[j]);
            }
            else if(signs[i] == "%") {
                sumup += Number(sides[0])/100
            }
        }
    }
    result.textContent = sumup;
    }, false
)


function clear() {
    var inputs = document.querySelectorAll('.inner');
    var inputsArray = []
    inputs.forEach((input) => {
        inputsArray.push(input);
    })
    inputsArray.forEach((input) => {
        input.remove();
    })
    operate = sides = signs = [];
    hold = "";
    sumup = 0;
    console.log(normal);
}

var clear = document.getElementById('clear');
clear.addEventListener("click", () => location.reload(), false) 
