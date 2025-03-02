document.getElementById("btn1").addEventListener("click", function() {

    this.disabled = true;

   const currentTime = new Date().toLocaleTimeString(); 
   document.getElementById("mag").innerText = "You have completed the task! Fix Mobile Button Issue  " + currentTime;

   let tw = parseInt(document.getElementById("task").innerText);
   let number = parseInt(document.getElementById("tow").innerText);

   if (number > 0) { 
       number++;  
       document.getElementById("tow").innerText = number;
       alert ("your are done thik task");  

       if (tw > 0) {
           tw--;  
           document.getElementById("task").innerText = tw;
       } else {
           alert("Hoba nah!");
       }
   } else {
       alert("Number 0 er niche nama jabe na!");
   }
});


document.getElementById("btn2").addEventListener("click", function() {

    this.disabled = true;

   const currentTime = new Date().toLocaleTimeString(); 
   document.getElementById("mag2").innerText = "You have completed the task! Add Dark Mode " + currentTime;

   let tw = parseInt(document.getElementById("task").innerText);
   let number = parseInt(document.getElementById("tow").innerText);

   if (number > 0) { 
       number++;  
       document.getElementById("tow").innerText = number;
       alert ("your are done thik task");  

       if (tw > 0) {
           tw--;  
           document.getElementById("task").innerText = tw;
       } else {
           alert("Hoba nah!");
       }
   } else {
       alert("Number 0 er niche nama jabe na!");
   }
});

document.getElementById("btn3").addEventListener("click", function() {

    this.disabled = true;

   const currentTime = new Date().toLocaleTimeString(); 
   document.getElementById("mag3").innerText = "You have completed the task! Optimize  Home page  " + currentTime;

   let tw = parseInt(document.getElementById("task").innerText);
   let number = parseInt(document.getElementById("tow").innerText);

   if (number > 0) { 
       number++;  
       document.getElementById("tow").innerText = number; 

       if (tw > 0) {
           tw--;  
           document.getElementById("task").innerText = tw;
           alert ("your are done thik task"); 
       } else {
           alert("Hoba nah!");
       }
   } else {
       alert("Number 0 er niche nama jabe na!");
   }
});


document.getElementById("btn4").addEventListener("click", function() {

    this.disabled = true;

   const currentTime = new Date().toLocaleTimeString(); 
   document.getElementById("mag4").innerText = "You have completed the task! Add new emoji 🤲 " + currentTime;

   let tw = parseInt(document.getElementById("task").innerText);
   let number = parseInt(document.getElementById("tow").innerText);

   if (number > 0) { 
       number++;  
       document.getElementById("tow").innerText = number; 

       if (tw > 0) {
           tw--;  
           document.getElementById("task").innerText = tw;
           alert ("your are done thik task"); 
       } else {
           alert("Hoba nah!");
       }
   } else {
       alert("Number 0 er niche nama jabe na!");
   }
});


document.getElementById("btn5").addEventListener("click", function() {

    this.disabled = true;

   const currentTime = new Date().toLocaleTimeString(); 
   document.getElementById("mag5").innerText = "You have completed the task! Integrate OpenAI API  " + currentTime;

   let tw = parseInt(document.getElementById("task").innerText);
   let number = parseInt(document.getElementById("tow").innerText);

   if (number > 0) { 
       number++;  
       document.getElementById("tow").innerText = number; 
       alert ("your are done thik task"); 

       if (tw > 0) {
           tw--;  
           document.getElementById("task").innerText = tw;
       } else {
           alert("Hoba nah!");
       }
   } else {
       alert("Number 0 er niche nama jabe na!");
   }
});


document.getElementById("btn6").addEventListener("click", function() {

    this.disabled = true;

   const currentTime = new Date().toLocaleTimeString(); 
   document.getElementById("mag6").innerText = "You have completed the task! Improve Job searching  " + currentTime;

   let tw = parseInt(document.getElementById("task").innerText);
   let number = parseInt(document.getElementById("tow").innerText);

   if (number > 0) { 
       number++;  
       document.getElementById("tow").innerText = number;
       alert ("your are done thik task"); 
       alert ("your are done "); 

       

       if (tw > 0) {
           tw--;  
           document.getElementById("task").innerText = tw;
       } else {
           alert("Hoba nah!");
       }
   } else {
       alert("Number 0 er niche nama jabe na!");
   }


});





document.getElementById("Clear").addEventListener("click", function() {
    
    document.getElementById("mag")?.remove();
    document.getElementById("mag2")?.remove();
    document.getElementById("mag3")?.remove();
    document.getElementById("mag4")?.remove();
    document.getElementById("mag5")?.remove();
    document.getElementById("mag6")?.remove();
});



document.getElementById("btn-color").addEventListener("click", function() {
    
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    
    document.body.style.backgroundColor = randomColor;
});