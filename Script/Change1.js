function change(e)
{
	var x=e.innerHTML;
	e.setAttribute("style","width:400px");
	switch(x)
	{
		case "EXPERIMENT-1":
			e.innerHTML="Design a Web Page using HTML Tags and host it in Web Server";
			break;
		case "EXPERIMENT-2":
			e.innerHTML="Create a XHTML document to implement types of CSS";
			break;
		case "EXPERIMENT-3":
			e.innerHTML="Design a web page with menu layout. Apply the various formatting using CSS";
			break;
		case "EXPERIMENT-4":
			e.innerHTML="Design a web page using Page Structure Elements";
			break;
		case "EXPERIMENT-5":
			e.innerHTML="Design a registration page to create email-id and validate the information in the web page using Java Script";
			break;
		case "EXPERIMENT-6":
			e.innerHTML="JavaScript - Event Handling";
			break;
		/*case "Exp-5.1":
			e.innerHTML="Date Object";
			break;
		case "Exp-5.2":
			e.innerHTML="String Object";
			break;
		case "Exp-5.3":
			e.innerHTML="Animate Color";
			break;
		case "Exp-5.4":
			e.innerHTML="Animate Image";
			break;
		case "Exp-6.1":
			e.innerHTML="Form Handling in JavaScript";
			break;
		case "Exp-6.2":
			e.innerHTML="Mouse Event and Button Click Event";
			break;
		case "Exp-6.3":
			e.innerHTML="Slide Show - using JavaScript Array";
			break;*/
		case "EXPERIMENT-7":
			e.innerHTML="JavaScript program to use Objects and Collections";
			break;
		case "EXPERIMENT-8":
			e.innerHTML="Design a web page to create simple interactive CGPA calculator";
			break;
		case "EXPERIMENT-9":
			e.innerHTML="Create a website to load the content dynamically using AJAX";
			break;
		case "EXPERIMENT-10":
			e.innerHTML="Create a website for student mark maintenance system using PHP and MySQL";
			break;
		case "EXPERIMENT-11":
			e.innerHTML="Create a website to illustrate Session Tracking in PHP";
			break;
		case "EXPERIMENT-12":
			e.innerHTML="Develop and deploy online reservation system using Java script, CSS , AJAX , PHP, MySQL with Session";
			break;
		}
				
}	
function change1(x)
{
	var ex=x.getAttribute( "id" );
	x.setAttribute("style","width:100px");
	switch(ex)
	{
		case "E1":
			x.innerHTML="EXPERIMENT-1";
			break;

		case "E2":
			x.innerHTML="EXPERIMENT-2";
			break;

		case "E3":
			x.innerHTML="EXPERIMENT-3";
			break;

		case "E4":
			x.innerHTML="EXPERIMENT-4";
			break;
		case "E5":
			x.innerHTML="EXPERIMENT-5";
			break;
		case "E6":
			x.innerHTML="EXPERIMENT-6";
			break;	
		case "E7":
			x.innerHTML="EXPERIMENT-7";
			break;
		case "E8":
			x.innerHTML="EXPERIMENT-8";
			break;	
		case "E9":
			x.innerHTML="EXPERIMENT-9";
			break;	
		case "E10":
			x.innerHTML="EXPERIMENT-10";
			break;	
		case "E11":
			x.innerHTML="EXPERIMENT-11";
			break;	
		case "E12":
			x.innerHTML="EXPERIMENT-12";
			break;	
	}
}