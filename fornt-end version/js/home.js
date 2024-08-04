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

    alert("Done!");
}