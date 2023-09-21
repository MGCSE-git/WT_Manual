
var imgs=["mainbuilding.jpg","CollaborativeLearning.jpg","bgst1.jpg","DigitalIndia1.jpg","flipImg1.jpg","GreenCampus.jpg","ITPark1.jpg"];

var i=0;


//var Next=document.getElementById("next");
//var Prev=document.getElementById("prev")

var pic=document.getElementById("pic1");

//pic.setAttribute("width","700px");
//pic.setAttribute("height","500px");

function myFunction1() 
{

pic.src="../Images/"+imgs[i];

i++;

var l=imgs.length-1;

if(i>l)

pic.src="../Images/"+imgs[l];

}



function myFunction2() 
{

i--;

pic.src="../Images/"+imgs[i];

if(i<0)

pic.src="../Images/"+imgs[0];

}


//Next.addEventListener("click", myFunction1,false);



//Prev.addEventListener("click", myFunction2,false);





