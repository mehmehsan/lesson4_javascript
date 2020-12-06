var Button = document.querySelector("#btn");


Button.addEventListener("click", eventHandler);

function eventHandler() {
   var nd = document.createElement("SELECT");
   nd.setAttribute("id","mySelect");
 
   document.body.appendChild(nd);

 var optn1 = document.createElement("option");
 var optn2 = document.createElement("option");
 var optn3 = document.createElement("option");
 

 optn1.setAttribute("value","Animal");

 var optntxt1 = document.createTextNode("Animal language");
 var optntxt2 = document.createTextNode("Check leap year");
 var optntxt3 = document.createTextNode("Check your birthday");


 optn1.appendChild(optntxt1);
 optn2.appendChild(optntxt2);
 optn3.appendChild(optntxt3);


 document.getElementById("mySelect").appendChild(optn1);
 document.getElementById("mySelect").appendChild(optn2);
 document.getElementById("mySelect").appendChild(optn3);

}

