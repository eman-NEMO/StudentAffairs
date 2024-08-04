var tr_tage = document.querySelectorAll("table tr");

tr_tage.forEach(function(tr){
    if(tr.id != "head_tr")
    {
        var td     = tr.children[10];    // td tage
        var btn    = td.children[0];    // button  tage
        var status = tr.children[9];

        btn.addEventListener("click", function (){
            var value = status.innerHTML;
            if(value == "Active"){
                status.innerHTML = "Inactive";
            }
            else{
                status.innerHTML = "Active";
            }
        } );

        var btn1 = tr.children[10];
        var save  = btn1.children[1];
        save.onclick = function() {
            var delete_confirm = confirm("Are you sure?");
            if(delete_confirm){
                alert("Success!");
                return true;
            }
            else{
                alert("Canceled");
                return false;
            }
        }
    }
});