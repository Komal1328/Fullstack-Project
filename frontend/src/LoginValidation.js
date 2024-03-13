function Validation(values){
    let error = {}
    const Email_pattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
    const Password_pattern =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(values.Email === ""){
        error.Email ="Email should not be empty"
    }
    else if(!Email_pattern.test(values.Email)){
        error.Email = "Email didn't match"
    }else {
        error.Email=""
    }
    
    if(values.Password === "") {
        error.Password = "Password should not be empty"
    }
    else if(!Password_pattern.test(values.Password)) {
            error.Password = "Password didn't match"
    } else {
        error.Password = ""
    }
    return error;
}
export default Validation