let out = document.getElementById("output-screen");


function display(num){
    out.value += num;
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
document.addEventListener('keydown', function (keys){

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
            out.value += keys.key;
            break;      
        case "-" :
            out.value += keys.key;
            break;      
        case "*" :
            out.value += keys.key;
            break;      
        case "/" :
            out.value += keys.key;
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