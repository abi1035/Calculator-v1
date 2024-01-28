let operatorSet=false;
let decimalSet=false;
// Operator set is set to false everytime an equal to is clicked, so it can reset the




// DISABLES OPERATOR
for(let i=0;i<4;i++){
    document.getElementsByClassName("operator")[i].disabled=true
}

// DISABLES DECIMAL
document.getElementsByClassName("decimal")[0].disabled=false

// Makes sure the button only gets clicked once
var decimalButton = document.getElementById("decimal");
decimalButton.addEventListener("click", Setdecimal);


function Setdecimal(event){
    console.log(event.target.value);
    let newContent = document.createTextNode(`${event.target.value}`);
    userInput.appendChild(newContent);
    
    decimalButton.removeEventListener("click", Setdecimal);
}


document.addEventListener("keydown", keyPress );



// KEYBOARD
function keyPress (event){
    let keyInput=(event.key);
    // console.log(keyInput)
    // console.log(event.keyCode)

    let userInput=document.getElementById("userInput");
    let existingValue=document.getElementById("userValue").innerHTML;
    
    
    // Initial Condition
    if(existingValue===""||existingValue===0 && operatorSet===false){
        if (keyInput==1||keyInput==2||keyInput==3||keyInput==4||keyInput==5||keyInput==6||keyInput==7||keyInput==8||keyInput==9||keyInput==0){
            let newContent = document.createTextNode(`${keyInput}`);
            userInput.appendChild(newContent);
            for(let i=0;i<4;i++){
                document.getElementsByClassName("operator")[i].disabled=false
                
            }
            operatorSet=true;
            console.log(operatorSet)
            
            

        }else if(keyInput==="Backspace"){
        userInput.innerHTML="";
        existingValue=""
        // Disabling the operators
        for(let i=0;i<4;i++){
            document.getElementsByClassName("operator")[i].disabled=true
        }
        document.getElementsByClassName("decimal")[0].disabled=false

        }else if(keyInput=="+"||keyInput=="-"||keyInput=="*"||keyInput=="/" && operatorSet===true){
            const newContent = document.createTextNode(`  ${keyInput}  `);
            userInput.appendChild(newContent);
            // decimalButton.addEventListener("click", Setdecimal);
            document.getElementById("decimal").disabled=false;
            

            for(let i=0;i<4;i++){
                document.getElementsByClassName("operator")[i].disabled=true
            }
                
            
            
        }else if(keyInput==="Enter"){
            equalClick()
            document.getElementsByClassName("operator")[i].disabled=false
            
        }else if(keyInput=="."){
            let newContent = document.createTextNode(`${keyInput}`);
            userInput.appendChild(newContent);
            document.getElementById("decimal").disabled=true;

        }

        // When first value is calculated and User wants to carry on with the existing value
    } else if(existingValue!=0 && operatorSet===false){
            if (keyInput=="+"||keyInput=="-"||keyInput=="*"||keyInput=="/"){
                userInput.innerHTML=existingValue;
                const newContent = document.createTextNode(`  ${keyInput}  `);
                userInput.appendChild(newContent);
                operatorSet=true;
                document.getElementById("decimal").disabled=false;

                
            }else if(keyInput==="Backspace"){
            userInput.innerHTML="";
            document.getElementById("userValue").innerHTML=""
            for(let i=0;i<4;i++){
                document.getElementsByClassName("operator")[i].disabled=true
            }
            

            // When user wants to carry out a new calculation
            }else if(keyInput==1||keyInput==2||keyInput==3||keyInput==4||keyInput==5||keyInput==6||keyInput==7||keyInput==8||keyInput==9||keyInput==0){
                document.getElementById("userValue").innerHTML=""
                let newContent = document.createTextNode(`${keyInput}`);
                userInput.appendChild(newContent);
                operatorSet=false;
                


            }else if(keyInput=="."){
                console.log(true);
                let newContent = document.createTextNode(`${keyInput}`);
                userInput.appendChild(newContent);
                document.getElementById("decimal").disabled=true;
    
            }
            
    }else if(existingValue!=0 && operatorSet===true){
        if(keyInput==1||keyInput==2||keyInput==3||keyInput==4||keyInput==5||keyInput==6||keyInput==7||keyInput==8||keyInput==9||keyInput==0){
            let newContent = document.createTextNode(`${keyInput}`);
            userInput.appendChild(newContent);
        }else if(keyInput==="Backspace"){
            userInput.innerHTML="";
            document.getElementById("userValue").innerHTML=""
            for(let i=0;i<4;i++){
                document.getElementsByClassName("operator")[i].disabled=true
            }
        }else if(keyInput==="Enter"){
            equalClick()

        }else if(keyInput=="."){
            console.log(true);
            let newContent = document.createTextNode(`${keyInput}`);
            userInput.appendChild(newContent);
            document.getElementById("decimal").disabled=true;

        }
    }
}




// MOUSE
// GETS VALUE OF BUTTONS ON CLICK
function buttonClick(e) {
    let buttonValue=e.target.value;
    const userInput=document.getElementById("userInput");
    let existingValue=document.getElementById("userValue").innerHTML;

    // Checks for history of value and checks if an operator is added first and not a number
    if(existingValue!=0 && operatorSet===false){
        if (buttonValue==="+"||buttonValue==="-"||buttonValue==="*"||buttonValue==="/"){
            userInput.innerHTML=existingValue;
            const newContent = document.createTextNode(`  ${buttonValue}  `);
            userInput.appendChild(newContent);
            operatorSet=true;
        }else if(buttonValue==="delete"){
            userInput.innerHTML="";
            document.getElementById("userValue").innerHTML=""
            for(let i=0;i<4;i++){
                document.getElementsByClassName("operator")[i].disabled=true
            }
            
        }else if(buttonValue=="."){
            document.getElementById("userValue").innerHTML=""
            decimalButton.addEventListener("click", Setdecimal);
        }
        
        else if(buttonValue==="1"||buttonValue==="2"||buttonValue==="3"||buttonValue==="4"||buttonValue==="5"||buttonValue==="6"||buttonValue==="7"||buttonValue==="8"||buttonValue==="9"||buttonValue==="0"){
            document.getElementById("userValue").innerHTML=""
            let newContent = document.createTextNode(`${buttonValue}`);
            userInput.appendChild(newContent);
            operatorSet=false;
        }

    }else if(existingValue!=0 && operatorSet===true){
        if(buttonValue==="1"||buttonValue==="2"||buttonValue==="3"||buttonValue==="4"||buttonValue==="5"||buttonValue==="6"||buttonValue==="7"||buttonValue==="8"||buttonValue==="9"||buttonValue==="0"){
            let newContent = document.createTextNode(`${buttonValue}`);
            userInput.appendChild(newContent);
            if(buttonValue==="."){
            decimalButton.addEventListener("click", Setdecimal);
            }
            
        }else if(buttonValue==="delete"){
            userInput.innerHTML="";
            document.getElementById("userValue").innerHTML=""

        }else if(buttonValue=="."){
            decimalButton.addEventListener("click", Setdecimal);

        }



        // INITIAL CALCULATION (FIRST TIME CALCULATING)
    } else if(existingValue===""||existingValue===0 &&operatorSet===false){
        if (buttonValue==="+"||buttonValue==="-"||buttonValue==="*"||buttonValue==="/"){
            const newContent = document.createTextNode(`  ${buttonValue}  `);
            userInput.appendChild(newContent);
            for(let i=0;i<4;i++){
                document.getElementsByClassName("operator")[i].disabled=true
            }

            decimalButton.addEventListener("click", Setdecimal);

        }else if(buttonValue==="delete"){
        userInput.innerHTML="";
        existingValue=""

        for(let i=0;i<4;i++){
            document.getElementsByClassName("operator")[i].disabled=true
        }
        }else if(buttonValue==="."){
            decimalButton.addEventListener("click", Setdecimal);
        }else{
        
        const newContent = document.createTextNode(`${buttonValue}`);
        userInput.appendChild(newContent);
        for(let i=0;i<4;i++){
            document.getElementsByClassName("operator")[i].disabled=false;
        }
        
        }  
    }

    
    
}

// GETS TRIGGERED WHEN EQUAL IS CLICKED
function equalClick(){
    let calcValue=document.getElementById("userInput").innerHTML;
    inputArray=calcValue.split("  ");
    document.getElementById("userInput").innerHTML="";
    operatorSet=false;
    // console.log(inputArray);
    return  calculate(inputArray);
}


// CALCULATES THE GIVEN ELEMENT
function calculate(evalArray){
    i=0;
    x=evalArray.filter(Number);
    console.log(x);
    console.log(evalArray)
    evalArray.forEach(element=>{
        if(element==="+"){
            document.getElementById("userValue").innerHTML=Math.round(Number(evalArray[i])+Number(evalArray[i+2]));
        }else if(element==="-"){
            document.getElementById("userValue").innerHTML=Math.round(Number(evalArray[0])-Number(evalArray[2]));
        }else if(element==="*"){
            document.getElementById("userValue").innerHTML=Math.round(Number(evalArray[0])*Number(evalArray[2]));
        }else if(element==="/"){
            document.getElementById("userValue").innerHTML=Math.round(Number(evalArray[0])/Number(evalArray[2]));
        }
    })
    
}



count=0;
function negativeClick(key){
    count++;
    console.log(count)
   
  
}
