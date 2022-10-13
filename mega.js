name_of_the_student_array = [];
var display_student_array=[];
for(var j=1;j<=5;j++){
    var name_of_the_student=document.getElementById("student"+j).value;
    console.log(name_of_the_student);
name_of_the_student_array.push(name_of_the_student);

}

function submit()
{
    var name1 = document.getElementById("student1").value;
    var name2 = document.getElementById("student2").value;
    var name3 = document.getElementById("student3").value;
    var name4 = document.getElementById("student4").value;
    var name5 = document.getElementById("student5").value;

    name_of_the_student_array.push(name1);
    name_of_the_student_array.push(name2);
    name_of_the_student_array.push(name3);
    name_of_the_student_array.push(name4);
    name_of_the_student_array.push(name5);

    console.log(name_of_the_student_array);
    document.getElementById("output").innerHTML = name_of_the_student_array;

    document.getElementById("submitbutton").style.display = "none";
    document.getElementById("sortbutton").style.display = "inline-block";
    
}

function sorting()
{
name_of_the_student_array.sort();
console.log(name_of_the_student_array);
document.getElementById("output").innerHTML = name_of_the_student_array;
}







