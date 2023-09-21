var credits=new Array();
var grade=new Array();
var gradePts=new Array();
var gpa=new Array();
var fcgpa,cgpa=0;
var c,g,pts,pVal;
var totalCredits=0;
var result=document.getElementById("res");
function Calc()
{

c=document.getElementsByName("credit");
g=document.getElementsByName("grade");
pts=document.getElementsByName("pts");
pVal=document.getElementsByName("gpa");

for(i=0;i<c.length;i++)
{
	totalCredits+=parseInt(c[i].value);
}

for(i=0;i<g.length;i++)
{
	grade[i]=g[i].value;
}
for(i=0;i<g.length;i++)
{
//	gradePts[i]=parseInt(c[i].value)*parseInt([i].value);
	switch(g[i].value)
		{
			case 'S':
				gradePts[i]=10;
				break;	
			case 'A':
				gradePts[i]=9;
				break;	
			case 'B':
				gradePts[i]=8;
				break;	
			case 'C':
				gradePts[i]=7;
				break;	
			case 'D':
				gradePts[i]=6;
				break;	
			case 'E':
				gradePts[i]=5;
				break;	
		}
	}

for(i=0;i<gradePts.length;i++)
{
	gpa[i]=parseInt(c[i].value)*gradePts[i];
	cgpa+=gpa[i];
	pts[i].innerHTML=gradePts[i];
	pVal[i].innerHTML=gpa[i];
}

fcgpa=cgpa/totalCredits;

res.innerHTML+=fcgpa.toFixed(2); ;
}