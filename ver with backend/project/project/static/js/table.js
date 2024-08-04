var tr_tage = document.querySelectorAll("table tr");
tr_tage.forEach(function(tr){
    if(tr.id != "head_tr")
    {
        var td     = tr.children[10];    // td tage
        var btn    = td.children[0];    // button  tage
        var status = tr.children[9];
        var save  = td.children[2];
        var student_id = tr.children[1].innerHTML;

        btn.addEventListener("click", function (){
            var value = status.innerHTML;
            save.disabled = false;
            if(value == "Active"){
                status.innerHTML = "Inactive";
            }
            else{
                status.innerHTML = "Active";
            }
        } );

        save.addEventListener("click", function (){
            req = new XMLHttpRequest();
            req.onreadystatechange = ()=>{
                if(req.readyState == 4 && req.status == 200 ){
                    if(req.response!=""){
                        save.disabled = true;
                        update();
                    }else{
                        console.log("no results");
                    }
                }
            };
            req.open("GET",'table/changeStatus?id='+student_id+"&"+"status="+status.innerHTML);
            req.send();
        });
    }
});

let active_tag = document.querySelector("#total_active");
let inactive_tag = document.querySelector("#total_inactive");
function update(){
    let req_change = new XMLHttpRequest();
    req_change.onreadystatechange = ()=>{
            if(req_change.readyState == 4 && req_change.status == 200 ){
                    if(req_change.response!=""){
                        data = JSON.parse(req_change.response);
                        active_tag.innerHTML=data.totalActive;
                        inactive_tag.innerHTML=data.totalInactive;
                    }
                }
            };
    req_change.open("GET",'table/updatePage');
    req_change.send();
};