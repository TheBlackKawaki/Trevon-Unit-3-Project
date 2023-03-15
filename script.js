/* Declare variables below to save the different sections (divs) of your story*/
let firstButton= document.querySelector(".option-one");
let secondButton=document.querySelector(".option-two");
let answerOne=document.querySelector(".option-one-screen");
let answerTwo=document.querySelector(".option-two-screen");
let endingOne=document.querySelector(".option-one-end");
let endingTwo=document.querySelector(".option-two-end");
let thirdButton=document.querySelector(".option-three");
let fourthButton=document.querySelector(".option-four");

firstButton.onmouseover=function(){
 answerOne.style.display= "block";
};

secondButton.ondblclick=function(){
answerTwo.style.display= "block";
};

thirdButton.ondblclick=function(){ 
 endingTwo.style.display="block";   
};

fourthButton.ondblclick=function(){
	endingOne.style.display="block";
};

answerOne.onclick=function(){

};

answerTwo.onclick=function(){
    
};

