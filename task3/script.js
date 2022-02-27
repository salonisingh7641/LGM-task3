var row=1;
var entry= document.getElementById("submit");
entry.addEventListener("click",AddRow);

function reset(){
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("email").value="";
    document.getElementById("city").value="";
}


function AddRow(){

    var name= document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var mail=document.getElementById("email").value;
    var city=document.getElementById("city").value;
    var gender="M";
    if(document.getElementById("F").checked==true)
    {
        gender="F";
    }
    else if(document.getElementById("O").checked==true){
        gender="O";
    }

    var AddRown= document.getElementById("display");
    var newRow=AddRown.insertRow(row);

    var cel1=newRow.insertCell(0);
    var cel2=newRow.insertCell(1);
    var cel3=newRow.insertCell(2);
    var cel4=newRow.insertCell(3);
    var cel5=newRow.insertCell(4);

    cel1.innerHTML=name;
    cel2.innerHTML=age;
    cel3.innerHTML=mail;
    cel4.innerHTML=city;
    cel5.innerHTML=gender;

    row++;
    reset();
}