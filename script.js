function buttonValidate(input, error){
    let emailRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let inputValue= document.getElementById(input).value;


    // JS for error messages
    if (inputValue.match(emailRegex)){
        document.getElementById(error).style.display = "none";
    }else if(inputValue === ''){
        document.getElementById(error).innerHTML = "Please input your email ";
        document.getElementById(error).style.display = "block";
    }else{
        document.getElementById(error).innerHTML = "Please check your email";
        document.getElementById(error).style.display = "block";
    }

    //  JS for input border changing 
    if (inputValue.match(emailRegex)){
        document.getElementById('input1').style.border = "1px solid black";
    }else if(inputValue === ''){
        document.getElementById('input1').style.border = "1px solid black";
    }else{
        document.getElementById('input1').style.border = "1px solid red";
    }
}

function autoClear(error){
    document.getElementById(error).style.display = "none";
}

