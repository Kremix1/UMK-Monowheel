function validate() {
    return (validateName() && validatePhone() && validateMail() && validateAgree());
}

function validateName(){
    let name = document.forms["requestForm"]["nubexName"].value;
    if(name == "") {
        alert("Укажите ваше имя");
        return false;
    }
    if(/\d/.test(name)){
        alert("Имя не должно содержать цифры");
        return false;
    }
    else
        return true;
}

function validatePhone() {
    let phone = document.forms["requestForm"]["nubexPhone"].value;
    if(phone == "") {
        alert("Укажите ваш телефон");
        return false;
    }
    if(phone.length < 11 || phone.length > 11){
        alert("Телефон должен состоять из 11 символов")
        return false;
    }
    if(/[a-zа-яё]/i.test(phone)){
        alert("Телефон должен содержать только цифры")
        return false;
    }
    else
        return true;
}

function validateMail() {
    let mail = document.forms["requestForm"]["nubexMail"].value;
    if(mail == "") {
        alert("Укажите ваш e-mail");
        return false;
    }
    if(!mail.includes('@') || !mail.includes('.')){
        alert("Введен некорректный e-mail");
        return false;
    }
    else
        return true;
}

function validateAgree() {
    let agree = document.getElementById("checkbox");
    if (agree.checked)
        return true;
    else{
        alert("Не принято соглашение на обработку персональных данных");
        return false;
    }
        
}