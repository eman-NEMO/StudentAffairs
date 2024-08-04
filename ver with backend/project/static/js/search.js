let  search_tag = document.querySelector("#stuSearch")
let  search_btn = document.querySelector(".btn")
let  table_tag  = document.querySelector("table");
let  no_result_tag = document.querySelector("#result");

search_btn.addEventListener("click" , ()=>{
    if(search_tag.value != ""){
        var name = search_tag.value;
        req = new XMLHttpRequest();
        req.onreadystatechange = ()=>{
            if(req.readyState == 4 && req.status == 200 ){
                if(req.response!=""){
                    let data = JSON.parse(req.response);
                    console.log(data);
                }else{
                    console.log("no results");
                }
            }
        };
        req.open("GET",'search_ajax?name='+name);
        req.send();
    }
});


search_tag.addEventListener("keyup" , ()=>{
    if(search_tag.value != ""){
        var name = search_tag.value;
        req = new XMLHttpRequest();
        req.onreadystatechange = ()=>{
            if(req.readyState == 4 && req.status == 200 ){
                if(req.response!=""){
                    let content_table = "<tr id ='head_tr'><th>Name</th><th>ID</th><th>Department</th><th>Email</th><th>GPA</th><th>Phone</th><th>Date of Birth</th><th>Level</th><th>Gender</th><th>Status</th><th>Edit</th></tr>";

                    let data = JSON.parse(req.response);
                    data.forEach((student)=>{
                            content_table+=`
                                    <tr>
                                    <td>${student.name}</td>
                                    <td>${student.stuId}</td>
                                    <td>${student.department}</td>
                                    <td>${student.email}</td>
                                    <td>${student.GPA}</td>
                                    <td>${student.phone}</td>
                                    <td>${student.date}</td>
                                    <td>${student.level}</td>
                                    <td>${student.gender}</td>
                                    <td>${student.status}</td>
                                    <td>
                                        <button class="btn"><a href="department/${student.stuId}">Change Department</a></button>
                                        <button class="btn"><a href="edit/${student.stuId}">Edit</a></button>
                                    </td>
                                </tr>
                            `;
                            no_result_tag.innerHTML = "";
                            table_tag.innerHTML = content_table;
                    });

                }else{
                    table_tag.innerHTML = "";
                    no_result_tag.innerHTML="You didn't have any active student's name with entered value '" + name + "'";
                }

            }
        };
        req.open("GET",'search_ajax?name='+name);
        req.send();
    }else{
        table_tag.innerHTML = "";
        no_result_tag.innerHTML="";
    }
});
