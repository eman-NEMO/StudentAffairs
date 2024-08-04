var save = document.getElementById("save");
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