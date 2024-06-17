function Validation (values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*?&]).{8,24}$/;

    if (values.firstname === "") {
        error.firstname = "Votre prénom est requis"
    } 
    else {
        error.firstname = ""
    }

    if (values.lastname === "") {
        error.lastname = "Votre nom est requis"
    } 
    else {
        error.lastname = ""
    }

    if (values.email === "") {
        error.email = "Un email est requis"
    } 
    else if (!email_pattern.test(values.email)) {
        error.email = "L'email saisi n'est pas valide"
    } 
    else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Un mot de passe est requis"
    } 
    else if (!password_pattern.test(values.password)) {
        error.password = "Le mot de passe saisi n'est pas valide"
    } 
    else {
        error.password = ""
    }
    return error;
}

export default Validation;