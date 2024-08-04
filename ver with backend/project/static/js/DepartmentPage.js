var save = document.getElementById("save");
save.onclick = function() {
    var delete_confirm = confirm("Are you sure?");
    if(delete_confirm){
        return true;
    }
    else{
        return false;
    }
}