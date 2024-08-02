/*
week8

const person={
    firstName:"Virak",lastName:"Red",age:80,eyeColor:"blue"

};
console.log(person.firstName+"\n"+person.lastName);



var myString=new String("kldsfjfljdasf flkdsjf");
document.write(myString.length);



let x="Red";
let y= new String("Red");
document.getElementById("hi").innerHTML=
typeof x+"<br>" + typeof y;

*/

// let x="John";
// let y= new String("John");
// if(x==y){
//     alert("True");
// }



// let text="Applle, Banana, Kiwi";
// let part=text.slice(7,13)
// alert(part);


// let text="Applle, Banana, Kiwi";
// let part=text.slice(7)
// alert(part);


// let str="Apple, Banana, Kiwi";
// alert(str.substring(7,13).toUpperCase());


// let str="Apple, Banana, Kiwi";
// alert(str.substring(-4));


function myFunction(){
    let text=
    document.getElementById("hi").innerHTML;
    document.getElementById("hi").innerHTML=
    text.replace("Microsoft","Beltei");
}