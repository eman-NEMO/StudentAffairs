var del = document.getElementById("delete");
del.onclick = function() {
    var delete_confirm = confirm("Are you sure you want to delete?");
    if(delete_confirm){
        alert("Deleted");
        return true;
    }
    else{
        alert("Canceled");
        return false;
    }

}

