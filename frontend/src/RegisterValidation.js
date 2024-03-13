function RegisterValidation(values){
    let error = {}
    const Email_pattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
    const Password_pattern =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const Pno_pattern = /^[0-9]{10}$/

    if(values.Name ===""){
        error.Name = "Name should not be empty"
    }
    else {
        error.Name = ""
    }

    if(values.Income ===""){
        error.Income = "Income source should not be empty"
    }
    else {
        error.Income = ""
    }

    if(values.Gender ===""){
        error.Gender = "gender should not be empty"
    }
    else {
        error.Gender = ""
    }

    if(values.Pno ===""){
        error.Pno = "Phone number should not be empty"
    }
    else if(!Pno_pattern.test(values.Pno)) {
        error.Pno = "Pattern didn't match"
    }
    else{
        error.Pno = ""
    }

    if(values.Email ===""){
        error.Email = "Email should not be empty"
    }
    else if(!Email_pattern.test(values.Email)) {
        error.Email = "Email Didn't Match"
    }
    else {
        error.Email = ""
    }

    if(values.Password === "") {
        error.Password = "Password Should not be empty"
    }
    else if(!Password_pattern.test(values.Password)) {
        error.Password = "Password didn't match"
    }
    else {
        error.Password = ""
    }
    return error;
}

export default RegisterValidation;