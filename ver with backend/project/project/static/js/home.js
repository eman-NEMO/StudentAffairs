//to scroll in page
var up = document.getElementById("up");
window.onscroll = function () {
    if (this.scrollY >= 300) {
        up.classList.add("see");
    } 
    else {
        up.classList.remove("see");
    }
};
up.onclick = function () {
    window.scrollTo( { top: 0 } );
};

//validation
var form = document.getElementById("form");
var check   =  [document.getElementById("checkN"), 
                document.getElementById("checkE"), 
                document.getElementById("checkA")];

var cnt = document.getElementById("cnt");
cnt.innerHTML= "0/20";
form.area.oninput = function() {
    cnt.innerHTML=  form.area.value.length + "/20";
}
form.onsubmit = function ()
{
    for (var i=0 ; i< check.length ; i++)
    {
        check[i].innerHTML = "";
    }

    if (form.name.value == "") {
        check[0].innerHTML= "*Cannot be blank!" ;
        form.name.focus();
        return false;
    }
    if ( !(form.name.value.match(/^[a-zA-Z\s]*$/)) )
    {
        check[0].innerHTML= "*Please Enter Only Letters!" ;
        form.name.focus();
        return false;
    }

    if (form.email.value == "") {
        check[1].innerHTML= "*Cannot be blank!" ;
        form.email.focus();
        return false;
    }

    if (form.area.value.length < 20) {
        check[2].innerHTML= "*Enter at least 20 character!";
        form.area.focus();
        return false;
    }
}

//another way 
//name
let name_field = form.name;
let check_msg_name =  document.getElementById("checkN");
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
//email
let email_field = form.email;
let check_msg_email = document.getElementById("checkE");
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
//area
let area_field = form.area;
let check_msg_area = document.getElementById("checkA");
area_field.addEventListener ("change", () => {
    if (area_field.value.length < 20)
        check_msg_area.innerHTML= "*Enter at least 20 character!";
    else
        check_msg_area.innerHTML= "";
});
