// Elements 
let numbers = document.querySelectorAll("[data-number]");
let operation = document.querySelectorAll("[data-operation]");
let equal = document.querySelector(".equal");
let allClear = document.querySelector(".allClear");
let clear = document.querySelector(".clear");
let userInput = document.querySelector(".userInput");
let result = document.querySelector(".result");
let toBeCalc = '';

// calculate the equation
function print(num) {
  if (userInput.innerHTML.length <= 15) {
    switch(true) {
        case num == '÷':
            toBeCalc += '/';
            userInput.innerHTML += num;
            break;
        case num == 'X':
            toBeCalc += '*';
            userInput.innerHTML += num;
            break;
        default:
            toBeCalc += num;
            userInput.innerHTML += num;
            break;
    }
  }
}

// event listeners for calculator buttons 

const insertToScreen = () => {

  numbers.forEach((num) =>
    num.addEventListener("click", (e) => {
      userInput.innerHTML == "0"
        ? (userInput.innerHTML = userInput.innerHTML.slice(1))
        : {};
      print(e.target.textContent);
    })
  );

  operation.forEach((op) =>
    op.addEventListener("click", (e) => {
        console.log(result.innerHTML);
        if (result.innerHTML==""){
            print(e.target.textContent)
        } else {
            userInput.innerHTML=result.innerHTML+e.target.textContent;
            if (e.target.textContent=="÷") {
                toBeCalc=result.innerHTML+'/';
            } else if (e.target.textContent=="X") {
                toBeCalc=result.innerHTML+'*';
            } else {toBeCalc=result.innerHTML+e.target.textContent}
            result.innerHTML="";
        };
    })
  );

  allClear.addEventListener("click", () => {
    toBeCalc="";
    result.innerHTML = "";
    userInput.innerHTML = "0";
  });

  clear.addEventListener("click", () => {
    result.innerHTML==''? userInput.innerHTML.length>1? userInput.innerHTML = userInput.innerHTML.slice(0,userInput.innerHTML.length - 1) : userInput.innerHTML = '0' : {};
  });

  equal.addEventListener("click", () => result.innerHTML=new Function(`return ${toBeCalc}`)());

};

insertToScreen();
