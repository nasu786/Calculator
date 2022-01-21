let out = document.getElementById("output-screen");
let c ;

// for mouse click
function display(num){

    c = out.value["length"];
    function operatorsMouse(){
        if (out.value[c-1] === "+"){
            out.value = out.value.slice(0,-1);
            out.value += num;
        }else if (out.value[c-1] === "-"){
            out.value = out.value.slice(0,-1);
            out.value += num;
        }else if (out.value[c-1] === "*"){
            out.value = out.value.slice(0,-1);
            out.value += num;
        }else if (out.value[c-1] === "/"){
            out.value = out.value.slice(0,-1);
            out.value += num;
        }else{
            out.value += num;
        }
    }

    switch(num){
        case '+' :
            operatorsMouse();
            break;
        case '-' :
            operatorsMouse();
            break;
        case '*' :
            operatorsMouse();
            break;
        case '/' :
            operatorsMouse();
            break;
        default :
            out.value += num;
    }
    
}

function Calculate(){
    try{
        out.value = eval(out.value);
    }
    catch(err){
        alert("Enter the valid input");
    }
}
function Clear(){
    out.value = "";
}
function del(){
    out.value = out.value.slice(0, -1);
}     

out.addEventListener('keydown', function(){
    out.value = out.value.slice(0, -1);
    console.log(out.value)

})

// for keyboard click
document.addEventListener('keydown', function (keys){
    
    function operatorsKeys(){
        c = out.value["length"];

        if (out.value[c-1] === "+"){
            out.value = out.value.slice(0,-1);
            out.value += keys.key;
        }else if (out.value[c-1] === "-") {
            out.value = out.value.slice(0,-1);
            out.value += keys.key;
        }else if (out.value[c-1] === "*") {
            out.value = out.value.slice(0,-1);
            out.value += keys.key;
        }else if (out.value[c-1] === "/") {
            out.value = out.value.slice(0,-1);
            out.value += keys.key;
        }else {
            out.value += keys.key;

        }
    }

    switch(keys.key){
        case "1" :
            out.value += keys.key;
            break;
        case "2" :
            out.value += keys.key;
            break;  
        case "3" :
            out.value += keys.key;
            break;      
        case "4" :
            out.value += keys.key;
            break;      
        case "5" :
            out.value += keys.key;
            break;      
        case "6" :
            out.value += keys.key;
            break;      
        case "7" :
            out.value += keys.key;
            break;      
        case "8" :
            out.value += keys.key;
            break;      
        case "9" :
            out.value += keys.key;
            break;      
        case "0" :
            out.value += keys.key;
            break; 
        case "." :
            out.value += keys.key;
            break;
        case "+" :
            operatorsKeys();
            break;      
        case "-" :
            operatorsKeys();
            break;      
        case "*" :
            operatorsKeys();
            break;      
        case "/" :
            operatorsKeys();
            break;
        case "Enter" :
            try{
            out.value = eval(out.value);
            }
            catch(err){
                alert("Enter the valid input");
            }
            break;
        case "Backspace" :
            out.value = out.value.slice(0, -1);
            break;
        case "c" :
            out.value = "";
            break;
        case "C" :
            out.value = "";
            break;    
        default:
                                
    }               
})
