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
    if (form.level.value != "3" && form.level.value != "4") {
        if (form.department.value != "4" && form.department.value != "None")
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
    if ((birthDate > today) ||  (getAge() < 16))
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

    alert("Success!");
}