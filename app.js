//HAMBURGER NAV MENU
const hamburger = document.querySelector('.hamburger');
const sideNav = document.querySelector('.side-nav');
const overLay = document.querySelector('.overlay')
const body = document.querySelector('body');

function hamburgerClick() {
    sideNav.classList.toggle('open');
    overLay.classList.toggle('open')
    hamburger.classList.toggle('change');
    
    //stops from moving page while menu is open
    body.classList.toggle('block');
};

//IF CLICKED OUTSIDE SIDENAV & BURGER, THEN MENU CLOSES
document.addEventListener('click', (e) => {
    if(!sideNav.contains(e.target) && !hamburger.contains(e.target)) {
        sideNav.classList.remove('open');
        overLay.classList.remove('open');
        document.body.classList.remove('block');
        hamburger.classList.remove('change');
    }
});






//SIGNUP PAGE FORM
//------------------------------------------------------------------------------------------
const form = document.querySelector('.signup-form');
const profileName = document.querySelector('.profile-name');
const email = document.querySelector('.email');
const confirmEmail = document.querySelector('.confirm-email')
const password = document.querySelector('.password');
const formGroup = document.querySelector('.form-group')

if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
    //EMAIL,PASSWORD,NAME
        if(email.value === "") {
            showError(email, "Email is required")
        } else if(!isEmail(email.value)) {
            showError(email, 'Please enter a valid email');
        } else {
            showSuccess(email)
        }
    
        if(confirmEmail.value === "") {
            showError(confirmEmail, "Email does not match")
        } else if(email.value != confirmEmail.value) {
            showError(confirmEmail, "Email does not match")
        } 
        else {
            showSuccess(confirmEmail)
        }
    
        if(password.value === "") {
            showError(password, "Password is required")
        } else if(!isPassword(password.value)) {
            showError(password, 'Must be at least 8 characters and contain 1 letter and 1 number')
        } else {
            showSuccess(password)
        }
    
        if(profileName.value === "") {
            showError(profileName, 'Username is required')
        } else {
            showSuccess(profileName)
        }
    
    //BIRTHDATE FORM
        const selectMonth = document.querySelector('.select-month');
    
        if(selectMonth.value === "") {
            selectMonth.className = "select-month error"
        } else {
            selectMonth.className = "select-month success"
        }
    
    //DAY-YEAR FORM
        const day = document.querySelector('.day')
        const year = document.querySelector('.year')
        const dayInput = document.querySelector('.day-input');
        const yearInput = document.querySelector('.year-input')
    
    //DAY
        if(dayInput.value == "") {
            day.className = "day error"
        } else if(!isDay(dayInput.value)) {
            day.className = "day error"
        } else {
            day.className = "day success"
        }
    
    //YEAR
        if(yearInput.value == "") {
            year.className = "year error"
        } else if(!isYear(yearInput.value)) {
            year.className = "year error"
        } else {
            year.className = "year success"
        }
    
    //GENDER
        const male = document.querySelector('.male');
        const female = document.querySelector('.female')
        const nonBinary = document.querySelector('.non-binary');
        const checkBoxes = document.querySelector('.check-boxes')
        
        if(!male.checked && !female.checked && !nonBinary.checked) {
            checkBoxes.className = "check-boxes error"
        } else {
            checkBoxes.className = "check-boxes success"
        }
    
    //REGISTRATION
        const registration = document.querySelector('.registration');
        const shareReg = document.querySelector('.share-reg');
        if(!registration.checked) {
            shareReg.className = "share-reg error"
        } else {
            shareReg.className = "share-reg success"
        }
    
    });
}


//SIGN UP ERROR AND SUCCESS FUNCTIONS
function showError(input, message) {
    const inputParent = input.parentElement;
    inputParent.className = "form-group error"
    const errorMessage = inputParent.querySelector('.error-message');
    errorMessage.innerHTML = message;
};
function showSuccess(input) {
    const inputParent = input.parentElement;
    inputParent.className = "form-group success";
};

//REGEX FOR SIGNUP EMAIL
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};
//REGEX FOR SIGNUP PASSWORD
function isPassword(password) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
};
//REGEX FOR SIGNUP 2 DIGIT DAY
function isDay(dayInput) {
    return /^[0-9]{2}$/.test(dayInput)
}
//REGEX FOR SIGNUP 4 DIGIT YEAR
function isYear(yearInput) {
    return /^[0-9]{4}$/.test(yearInput)
}
//END SIGNUP PAGE FORM-----------------------------------------------------------------





//LOGIN PAGE FORM
//------------------------------------------------------------------------------------------
const loginForm = document.querySelector('.login-form');
const loginUsername = document.querySelector('.login-username');
const loginPassword = document.querySelector('.login-password');
const loginFormControl = document.querySelector('.form-control')

if(loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
    //USERNAME AND PASSWORD
        if(loginUsername.value === "") {
            loginFormError(loginUsername, "Please enter username or email address")
        } else {
            loginFormSuccess(loginUsername)
        }

        if(loginPassword.value === "") {
            loginFormError(loginPassword, 'Please enter password')
        } else if(!isloginPassword(loginPassword.value)) {
            loginFormError(loginPassword, "Must be at least 8 characters long and contain 1 letter and 1 number")
        } else {
            loginFormSuccess(loginPassword)
        }

    //REMEMBER CHECKBOX
        const checkBoxRemember = document.querySelector('.checkbox');
        const remember = document.querySelector('.remember');
        if(!checkBoxRemember.checked) {
            remember.className = "remember error"
        } else {
            remember.className = "remember success";
        }
    })   
}
//LOGIN ERROR AND SUCCESS FUNCTIONS
function loginFormError(input, message) {
    const inputParent = input.parentElement;
    inputParent.className = 'form-control error';
    const errorMessage = inputParent.querySelector('.login-error');
    errorMessage.innerHTML = message;
}
function loginFormSuccess(input) {
    const inputParent = input.parentElement;
    inputParent.className = 'form-control success';
    const errorMessage = inputParent.querySelector('.login-error');
    errorMessage.innerHTML = "";
}
//REGEX FOR LOGIN PASSWORD
function isloginPassword(loginPassword) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(loginPassword);
};
//END LOGIN PAGE FORM
//------------------------------------------------------------------------------------------






//FORGOT/RESET PASSWORD PAGE
//------------------------------------------------------------------------------------------
const pwForm = document.querySelector('.pw-reset-form');
const emailPw = document.querySelector('.reset-email');

if(pwForm) {
    pwForm.addEventListener('submit', (e) => {
        e.preventDefault();
    //FORGOT/RESET PASSWORD EMAIL
        if(emailPw.value === "") {
            passwordResetError(emailPw, 'This field is required');
        } else {
            passwordResetSuccess(emailPw);
            swal({
                title: "",
                text: "Password reset has been sent!",
                icon: "success",
                button: "ok",
              });
        }
    })
};
//FORGOT/RESET PASSWORD  FUNCTIONS
function passwordResetError(input, message) {
    const inputParent = input.parentElement;
    const pwsmallError = inputParent.querySelector('small');
    inputParent.className = "form-resetpw error"
    pwsmallError.innerHTML = message
}
function passwordResetSuccess(input) {
    const inputParent = input.parentElement;
    inputParent.className = "form-resetpw success";
    const pwsmallError = inputParent.querySelector('small');
    pwsmallError.innerHTML = "";
}
//END FORGOT/RESET PASSWORD PAGE
//------------------------------------------------------------------------------------------





//ACCORDION MENU ON HELP PAGE
//------------------------------------------------------------------------------------------
const accordionBtn = document.querySelectorAll('.accordion-btn');

accordionBtn.forEach(button => {
    button.addEventListener('click', ()=> {
        const accordionContent = button.nextElementSibling;
        
        button.classList.toggle('active');

        if(button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        } else {
            accordionContent.style.maxHeight = 0;
        }
    });
});
//END ACCORDION MENU ON HELP PAGE
//------------------------------------------------------------------------------------------


