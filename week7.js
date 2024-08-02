// var x = Number(prompt("Enter English Score: "));
// var xx = Number(prompt("Enter Html Score: "));
// var xxx = Number(prompt("Enter Js Score: "));
// var xxxx = Number(prompt("Enter C Score: "));
// var xxxxx = avg(x, xx, xxx, xxxx);
// function avg(eng, html, js,c){
//     var total=eng+html+js+c;
//     return total/4;
// }
// if(xxxxx >= 90 && xxxxx <=100){
//     document.write("You got grade A and Average: " + xxxxx);
// }
// else if(xxxxx >= 80 && xxxxx <90){
//     document.write("You got grade B and Average: " + xxxxx);
// }
// else if(xxxxx >= 70 && xxxxx <80){
//     document.write("You got grade C and Average: " + xxxxx);
// }
// else if(xxxxx >= 60 && xxxxx <70){
//     document.write("You got grade D and Average: " + xxxxx);
// }
// else if(xxxxx >= 50 && xxxxx <60){
//     document.write("You got grade E and Average: " + xxxxx);
// }
// else if(xxxxx<50){
//     document.write("You Are Failed! and Average: " + xxxxx);
// }
// else{
//     document.write("Try Again next year! \n Goodbye... and Average: " + xxxxx);
// }


// var rak=prompt("Enter ey Enter tv:");

// if(rak.length>8){
//     document.write("Successful!");
// }else{
//     document.write("Please input longer than 8 charater \n Try again!");
// }


// try{
//     alert("This is code inside the try clause");
//     alert("No Errors so catch code will not execute");
// }
// catch(exception){
//     alert("The error is "+exception.message);
// }



// try{
//     var a=prompt("Please input number:",);
//     alert("good luck!");
//     document.write("Hi,Everyone");
// }catch(exception){
//     alert("Error:"+exception.message);
// }finally{
//     alert("Whatever happens this line will execute");
// }

// function abc(){
//     document.getElementById("m1").innerHTML="Result:"+total();
// }

// function total(){
//     var n1= Number(num1());
//     var n2= Number(num2());
//      return n1+n2;
// }
// function num1(){
//     return inputs[0].value;
// }
// function num2(){
//     return inputs[1].value;
// }
//     var inputs = document.querySelectorAll("input");
//     var btn= document.querySelector("button");
//     btn.addEventListener("click",abc);



function abc(){
    document.getElementById("m1").innerHTML = "Result: " + (Number(inputs[0].value) + Number(inputs[1].value));
}

var inputs = document.querySelectorAll('input');
var btn = document.querySelector('button');
btn.addEventListener('click', abc);





