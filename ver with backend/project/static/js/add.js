let  id_field = document.querySelector("input[name=id]");
let  check_msg_id = document.querySelector("#checkID");

//id
id_field.addEventListener("change" , ()=>{
    if(id_field.value != "" && id_field.value.length == 8 && id_field.value.match(/^[0-9]+$/)){
        let id = id_field.value;
        req = new XMLHttpRequest();
        req.onreadystatechange = ()=>{
            if(req.readyState == 4 && req.status == 200 ){
                if(req.response!=""){
                    if(req.response=="1"){
                        id_field.style.background = "rgb(253, 89, 89)";
                        check_msg_id.innerHTML = "id is exist in database"
                    }else{
                        check_msg_id.innerHTML = "";
                        id_field.style.background = "#7cb342";
                    }
                }else{
                    check_msg_id.innerHTML = "";
                }
            }
        };
        req.open("GET",'check_id?id='+id);
        req.send();
    }else{
        id_field.style.background = "white";
        if(id_field.value==""){
            check_msg_id.innerHTML = "*Cannot be blank!";
        }
        else if (id_field.value.length !=8 || !id_field.value.match(/^[0-9]+$/)){
            check_msg_id.innerHTML = "*Please Enter Only Numbers with length 8!";
        }
        else {
            check_msg_id.innerHTML = "";
        }
    }
});