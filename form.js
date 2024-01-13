"use strict"

let main_parent_div = document.createElement("div");
main_parent_div.setAttribute("id","main_parent_div");

let child1_div = document.createElement("div");
child1_div.setAttribute("id","child1_div");

// let form = document.createElement("form");
// form.setAttribute("id","form");

let label1 = document.createElement("label");
label1.innerText = "Product Code : ";

let input1 = document.createElement("input");
input1.setAttribute("id","input1");
input1.setAttribute("type","text");

let label2 = document.createElement("label");
label2.innerText = "Product Name : ";

let input2 = document.createElement("input");
input1.setAttribute("id","input2");
input1.setAttribute("type","text");

let label3 = document.createElement("label");
label3.innerText = "Qty : ";

let input3 = document.createElement("input");
input3.setAttribute("id","input3");
input3.setAttribute("type","number");

let label4 = document.createElement("label");
label4.innerText = "Price : ";

let input4 = document.createElement("input");
input4.setAttribute("id","input1");
input4.setAttribute("type","number");

let btndiv = document.createElement("div");
btndiv.setAttribute("id","btndiv");

let subbtn = document.createElement("button");
subbtn.setAttribute("id","subbtn");
subbtn.innerText = "Submit";

let restbtn = document.createElement("button");
restbtn.setAttribute("id","restbtn");
restbtn.innerText = "Reset";

document.body.append(main_parent_div);
btndiv.append(subbtn,restbtn);
child1_div.append(label1,input1,label2,input2,label3,input3,label4,input4,btndiv);
// child1_div.append(form);


let child2_div = document.createElement("div");
child2_div.setAttribute("id","child2_div");

let table = document.createElement("table");
table.setAttribute("id","table");

let tr = document.createElement("tr");
tr.setAttribute("id","tr");

let th1 = document.createElement("th");
th1.innerHTML = "Product Code";

let th2 = document.createElement("th");
th2.innerHTML = "Product Name";

let th3 = document.createElement("th");
th3.innerHTML = "Qty";

let th4 = document.createElement("th");
th4.innerHTML = "Price";

tr.append(th1,th2,th3,th4);
table.append(tr);
child2_div.append(table);
main_parent_div.append(child1_div,child2_div);

subbtn.addEventListener("click",subFunction)
restbtn.addEventListener("click",retbtn)

var valid = 0;


function subFunction()
{
    if((input1.value.length > 0) && (input2.value.length > 0) && (input3.value.length > 0) && (input4.value.length > 0) && (valid == 0))
    {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.setAttribute("id","td1");
        td1.innerText = input1.value;
        input1.value = "";

        let td2 = document.createElement("td");
        td2.setAttribute("id","td2");
        td2.innerText = input2.value;
        input2.value = "";

        let td3 = document.createElement("td");
        td3.setAttribute("id","td3");
        td3.innerText = input3.value;
        input3.value = "";

        let td4 = document.createElement("td");
        td4.setAttribute("id","td4");
        td4.innerText = input4.value;
        input4.value = "";

        let td5 = document.createElement("td");
        td5.setAttribute("id","td5");

        var editbtn = document.createElement("button");
        editbtn.innerHTML = `<i class="fa-solid fa-pen-to-square" style="color: #000000;"></i>`;

        var deletebtn = document.createElement("button");
        deletebtn.innerHTML = `<i class="fa-solid fa-trash" style="color: #f94449;"></i>`;

        td5.append(editbtn,deletebtn);
        tr.append(td1,td2,td3,td4,td5);
        table.append(tr);

        deletebtn.addEventListener("click",onDelete)
        function onDelete()
        {
            if(confirm("Are you sure to delete this data?"))
            {
                td1.parentElement.remove();
            }
        }

        editbtn.addEventListener("click",onEdit);
        function onEdit()
        {
            valid = tr;
            input1.value = td1.innerText;
            input2.value = td2.innerText;
            input3.value = td3.innerText;
            input4.value = td4.innerText;
            subbtn.innerText = "Update";
        }
    }
    else if((input1.value.length == 0) || (input2.value.length == 0) || (input3.value.length == 0) || (input4.value.length == 0) && (valid == 0))
    {
        alert("Please give any value");
    }
    else
    {
        valid.getElementsByTagName("td")[0].innerHTML=input1.value;
        valid.getElementsByTagName("td")[1].innerHTML=input2.value;
        valid.getElementsByTagName("td")[2].innerHTML=input3.value;
        valid.getElementsByTagName("td")[3].innerHTML=input4.value;
        console.log(valid);
        console.log("hi");
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        valid = 0;
        subbtn.innerText = "Submit";
    }
}
function retbtn()
{
    if(confirm("Are you sure to reset this data"))
    {
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
    }
}