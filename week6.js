// var myAge=Number(prompt("Enter your age",30));
// if(myAge>=0&&myAge<=10){
//     document.write("myAge is between 0 and 10 <br/>");
// }
// 


// var degf=new Array (34,70,90);
// var i;

// for(i=2;i>=0;i--){
//     document.write("F:"+degf[i]);
// }


// var languages={first:"C",second:"Java",third:"Python",fourth:"PHP",fifth:"JavaScript"};
// for(itr in languages){
//     document.write(languages[itr]+"<br/>");
// }


// var a=1;
// while(a<=10){
//     document.write("value A:"+a+"<br/>");
//     a++;
// }



// var x=49;
// while(x>=13){
//     document.write("value:"+x+"<br/>");
//     x--;
// 


function avg(eng,html,js,c){
    var total=eng+html+js+c;
    return total/4;
}

var a=avg(53,62,50,60);
if(a>50){
    document.write("you got Great Point");
}else{
    document.write("You got failed!");
}