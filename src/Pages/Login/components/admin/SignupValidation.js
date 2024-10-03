function SignUpValidation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.fname ==="") {
        error.fname = "First Name should not be empty"
    }
    else {
        error.fname = ""
    }

    if (values.lname ==="") {
        error.lname = "Last Name should not be empty"
    }
    else {
        error.lname = ""
    }


    
    if (values.email ==="") {
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email didn't match"
    } else {
        error.email = ""
    }

    if (values.password ==="") {
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password didn't match.It must contains at least one uppercase letter, one lowercase letter, one digit, and is at least 8 characters long."
    } else {
        error.password = ""
    }

    return error;
}

export default SignUpValidation;