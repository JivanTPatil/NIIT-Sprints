let contacts = [];

window.submitContact = () => {
    //contact object captures all the inputs provided
    let theContact = document.getElementById("contactForm");
    let contactDetails = Object.fromEntries(new FormData(theContact));
    let result=validateContact(contactDetails);
    return result;
};


// listen to click of addContact button and add maximum of two additional inputs for inputting Contact Nos.

const validateContact = (details) => {
    //errors object captures all the validation errors
    let errors = {
        firstNameError: validateFirstName(details.firstname),
        lastNameError: validateLastName(details.lastname),
        emailError: validateEmail(details.email),
        homeNoError: validateHomeNo(details.homeNo),
        workNoError: validateWorkNo(details.workNo),
        notesError: validateNotes(details.notes)
    };
    let allErrors = Object.values(errors).filter((e) => e !== "");
    //if no errors, push the contact to contacts array
    if (allErrors.length === 0) {
        contacts.push(details);
       document.getElementById("contact-list").innerHTML = contactData;
        
        return true;
    } else {
        //display validation summary with error messages
        displayValidationSummary(allErrors);
        displayErrorsIndividually(errors);
        return false;
    }
};

//function to display validation summary with error messages provided
function displayValidationSummary(allErrors) {
    let errorList = "";
    allErrors
        .map((er) => `<li>${er}</li>`)
        .forEach((err) => {
            errorList += err;
        });
    document.getElementsByTagName("ul")[0].innerHTML = errorList;
}

//function to display error messages alongside the input fields
function displayErrorsIndividually(errors) {
    if (errors.firstNameError !== "") {
        document.getElementById("firstNameError").innerText = "*";
    }
    if (errors.lastNameError !== "") {
        document.getElementById("lastNameError").innerText = "*";
    }
    if (errors.emailError !== "") {
        document.getElementById("emailError").innerText = "*";
    }
    if (errors.homeNoError !== "") {
        document.getElementById("homeNoError").innerText = "*";
    }
    if (errors.workNoError !== "") {
        document.getElementById("workNoError").innerText = "*";
    }
    if (errors.notesError !== "") {
        document.getElementById("notesError").innerText = "*";
    }
}

let nameRegEx = "^[A-Za-z.]+$";
//function to validate firstName
const validateFirstName = (firstName) => {
    if (firstName === "" || firstName === undefined || firstName === null) {
        return "First Name can't be left blank";
    }
    if (!firstName.match(nameRegEx)) {
        return "Invalid First Name! Should only contain alphabets and period(.)";
    }
    return "";
};

//function to validate lastName
const validateLastName = (lastName) => {
    if (lastName === "" || lastName === undefined || lastName === null) {
        return "Last Name can't be left blank";
    }
    if (!lastName.match(nameRegEx)) {
        return "Invalid Last Name! Should only contain alphabets and period(.)";
    }
    return "";
};

//function to validate email
const validateEmail = (emailID) => {
    let emailRegex =
        "^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$";
    if (emailID === "" || emailID === undefined || emailID === null) {
        return "Email ID can't be left blank";
    }
    if (!emailID.match(emailRegex)) {
        return "Invalid email format entered!";
    }
    return "";
};

let phoneRegex =
    "^(\\+91)?[\\s]?[(]?[0-9]{3}[)]?[-]?[.]?[\\s]?[0-9]{3}[-]?[\\s]?[.]?[0-9]{4}$";
//function to validate home no
const validateHomeNo = (homeNo) => {
    if (homeNo === "" || homeNo === undefined || homeNo === null) {
        return "Home Number cannot be left blank!";
    }
    if (!homeNo.match(phoneRegex)) {
        return "Home Phone Number Format Not Valid!";
    }
    return "";
};

//function to validate work no
const validateWorkNo = (workNo) => {
    if (workNo === "" || workNo === undefined || workNo === null) {
        return "Home Number cannot be left blank!";
    }
    if (!workNo.match(phoneRegex)) {
        return "Work Number Format Not Valid!";
    }
    return "";
};

//function to validate additional contact no
const validateAddContact1 = (contactNo) => {
    if (!contactNo.match(phoneRegex)) {
        return "Additional Contact 1's Format Not Valid!";
    }
    return "";
};

//function to validate additional contact no
const validateAddContact2 = (contactNo) => {
    if (!contactNo.match(phoneRegex)) {
        return "Additional Contact 2's Format Not Valid!";
    }
    return "";
};

//function to validate notes
const validateNotes = (notes) => {
    if (notes.length > 200) {
        return "Sorry! You cannot add more than 200 characters!";
    }
    return "";
};

//disable all dates for whom age is less than 18
let dateOfBirth = document.getElementById("birthdate");
dateOfBirth !== null ? dateOfBirth.setAttribute("max", "2003-07-15") : dateOfBirth