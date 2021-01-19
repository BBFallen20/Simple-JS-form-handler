class Checker{
    constructor(form) {
        this.form = form;
    }
    valid () {
        let values = [this.form.name.value,
            this.form.mail.value,
            this.form.phone_number.value,
            this.form.bd.value,
            this.form.password1.value,
            this.form.password2.value,
            this.form.about.value]
        let styles = [this.form.name,
            this.form.mail,
            this.form.phone_number,
            this.form.bd,
            this.form.password1,
            this.form.password2,
            this.form.about];
        let fail=false;
        for(let i=0;i<values.length;i++){
            if(values[i]===""){
                fail=true;
                styles[i].style.backgroundColor = "#F08080";
            }
            else {
                styles[i].style.backgroundColor = "#FFFFFF";
            }
        }
        if(fail===true){
            alert("Заповніть виділені поля!")
        }
        else{
            let phone_check = new NumberChecker(this.form)
            if (phone_check.valid() === false){
                alert("Номер має бути формату +000000000000!")
            }
            else{
                let pass_check = new PasswordChecker(this.form);
                if (pass_check.valid() === false){
                    alert("Пароль та підтвердження паролю не збігаються!")
                }
                else{
                    if(pass_check.check_length()===true){
                        alert("Ваші дані збережені!");
                        this.form.reset();
                    }
                    else {
                        alert("Довжина паролю має бути не менше 6 символів!")
                    }
                }
            }
        }
    }
}
class PasswordChecker extends Checker{
    valid () {
        if(this.form.password1.value===this.form.password2.value){
            return true
        }
        else{
            return false
        }
    }
    check_length(){
        if(this.form.password1.value.length < 6){
            return false
        }
        else {
            return true
        }
    }
}
class NumberChecker extends Checker{
    valid() {
        if(this.form.phone_number.value.length < 12){
            return false
        }
        else{
            return true
        }
    }
}

go = function (form) {
    let check = new Checker(form);
    check.valid();
}