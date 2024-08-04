//validation
var form = document.getElementById("form");
var btn = document.getElementById("send");

btn.onclick = function()
{
    var check   =  [document.getElementById("checkID"), 
                    document.getElementById("checkName"), 
                    document.getElementById("checkDep"),
                    document.getElementById("checkEmail"),
                    document.getElementById("checkGPA"),
                    document.getElementById("checkPhone"),
                    document.getElementById("checkDate"),
                    document.getElementById("checkGender"),
                    document.getElementById("checkStatus")];
    for (var i=0 ; i< check.length ; i++)
    {
        check[i].innerHTML = "";
    }

    //ID
    if (form.id.value == "") {
        check[0].innerHTML= "*Cannot be blank!" ;
        form.id.focus();
        return false;
    }
    if ( !(form.id.value.match(/^[0-9]+$/)) || (form.id.value.length != 8) )
    {
        check[0].innerHTML= "*Please Enter Only Numbers with length 8!" ;
        form.id.focus();
        return false;
    }

    //Name
    if (form.name.value == "") {
        check[1].innerHTML= "*Cannot be blank!" ;
        form.name.focus();
        return false;
    }
    if ( !(form.name.value.match(/^[a-zA-Z\s]*$/)) )
    {
        check[1].innerHTML= "*Please Enter Only Letters!" ;
        form.name.focus();
        return false;
    }

    //Department & Level
    if (form.level.value == "First Level" || form.level.value == "Second Level") {
        if (form.department.value != "None")
        {
            check[2].innerHTML= "*If department not 'None' you need to select 'Third Level' or 'Fourth Level'!" ;
            return false;
        }
    }

    //Email
    if (form.email.value == "") {
        check[3].innerHTML= "*Cannot be blank!" ;
        form.email.focus();
        return false;
    }
    else if (!(form.email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) )
    {
        check[3].innerHTML= "*Invalid Email!" ;
        form.email.focus();
        return false;
    }

    //GPA
    if (form.gpa.value == "") {
        check[4].innerHTML= "*Cannot be blank!" ;
        form.gpa.focus();
        return false;
    }
    if (form.gpa.value > 4 || form.gpa.value < 0) {
        check[4].innerHTML= "*Enter form 0 to 4" ;
        form.gpa.focus();
        return false;
    }

    //Phone Number
    if (form.phone.value == "") {
        check[5].innerHTML= "*Cannot be blank!" ;
        form.phone.focus();
        return false;
    }
    else if (!(form.phone.value.match(/^[\+]?[(]?[0-9]{3,4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im)))
    {
        check[5].innerHTML= "*Invalid Phone Number, try to enter phone number like this '0110 123 4567'" ;
        form.phone.focus();
        return false;
    }

    //Date of Birth
    if (form.date.value == "") {
        check[6].innerHTML= "*Cannot be blank!" ;
        form.date.focus();
        return false;
    }
    var birthDate = new Date(form.date.value);
    var today = new Date();
    if ((birthDate > today) ||  (getAge() < 16) || (getAge() > 150))
    {
        check[6].innerHTML= "*Invalid Date!" ;
        form.date.focus();
        return false;
    }
    function getAge() {
        var age = today.getFullYear() - birthDate.getFullYear();
        var month = today.getMonth() - birthDate.getMonth();
        if ( month < 0 || ( (month == 0) && (today.getDate() < birthDate.getDate()) ) ) {
            age--;
        }    
        return age;
    }

    //Gender
    if (form.gender.value != "Female" && form.gender.value != "Male") {
        check[7].innerHTML= "*Cannot be blank!" ;
        return false;
    }

    //Status
    if (form.status.value != "Active" && form.status.value != "Inactive") {
        check[8].innerHTML= "*Cannot be blank!" ;
        return false;
    }
}

//new action by change
//name
let name_field = document.querySelector("input[name=name]");
let check_msg_name =  document.getElementById("checkName");
name_field.addEventListener("change" , ()=>{
    if(name_field.value != "" && name_field.value.match(/^[a-zA-Z\s]*$/)){
            check_msg_name.innerHTML = "";
    }else{
        if(name_field.value==""){
            check_msg_name.innerHTML = "*Cannot be blank!";
        }else {
            check_msg_name.innerHTML = "*Please Enter Only Letters!";
        } 
    }
});

//level & department
let level_field = document.querySelector("select[name=level]");
let department_field = document.querySelector("select[name=department]");
let check_msg_department =   document.getElementById("checkDep");
level_field.addEventListener("change" , ()=>{
    if(level_field.value != "" && (level_field.value == "First Level" || level_field.value == "Second Level")){
        if (department_field.value != "None")
        {
            check_msg_department.innerHTML= "*If department not 'None' you need to select 'Third Level' or 'Fourth Level'!" ;
        }else{
            check_msg_department.innerHTML = "";
        }
    }else{
        check_msg_department.innerHTML = "";
    }
});

//email
let email_field = document.querySelector("input[name=email]");
let check_msg_email = document.getElementById("checkEmail");
email_field.addEventListener("change" , ()=>{
    if(email_field.value != ""  && email_field.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        check_msg_email.innerHTML = "";
    }else{
        if(email_field.value==""){
            check_msg_email.innerHTML = "*Cannot be blank!";
        }else{
            check_msg_email.innerHTML = "*Invalid Email!";
        }
    }
});

//gpa
let  gpa_field = document.querySelector("input[name=gpa]");
let check_msg_gpa  = document.getElementById("checkGPA");
gpa_field.addEventListener("change" , ()=>{
    if(parseFloat(gpa_field.value) <= 4 && parseFloat(gpa_field.value) >= 0){
        check_msg_gpa.innerHTML = "";
    }else{
        if(gpa_field.value==""){
            check_msg_gpa.innerHTML = "*Cannot be blank!";
        }else{
            check_msg_gpa.innerHTML = "*Enter form 0 to 4";
        }
    }
});

//phone
let  phone_field = document.querySelector("input[name=phone]");
let check_msg_phone  = document.getElementById("checkPhone");
phone_field.addEventListener("change" , ()=>{
    if((phone_field.value.match(/^[\+]?[(]?[0-9]{3,4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im)) && phone_field.value!=""){
        check_msg_phone.innerHTML = "";
    }else{
        if(phone_field.value==""){
            check_msg_phone.innerHTML = "*Cannot be blank!";
        }else{
            check_msg_phone.innerHTML = "*Invalid Phone Number, try to enter phone number like this '0110 123 4567'";
        }
    }
});

//date
let  birth_field = document.querySelector("input[name=date]");
let check_msg_birth = document.getElementById("checkDate");
birth_field.addEventListener("change",()=>{
    var birthDate = new Date(birth_field.value);
    var today = new Date();
    if ((birthDate > today) ||  (getAge() < 16) || (getAge() > 150))
    {
        check_msg_birth.innerHTML= "*Invalid Date!" ;
    }else{
        if(birth_field.value == ""){
            check_msg_birth.innerHTML= "*Cannot be blank";
        }
        else {
            check_msg_birth.innerHTML= "" ;
        }
    }
    function getAge() {
        var age = today.getFullYear() - birthDate.getFullYear();
        var month = today.getMonth() - birthDate.getMonth();
        if ( month < 0 || ( (month == 0) && (today.getDate() < birthDate.getDate()) ) ) {
            age--;
        }
        return age;
    }
});