$("#partie2").hide()
$('#submit').click(function(){
  $('#partie1').hide()
  $('#partie2').show()

})




var i=0;

function reponse1(form1) {
if((form1.choix1.checked) ==false && (form1.choix2.checked) ==true && (form1.choix3.checked) ==true)
 
       { i +=20;};
if
  ((form1.choix1.checked) ==true && (form1.choix2.checked) ==true && (form1.choix3.checked) ==true)
{ i +=0;};
if
  ((form1.choix1.checked) ==false && (form1.choix2.checked) ==true && (form1.choix3.checked) ==false)
{ i +=10;};
if ((form1.choix1.checked) ==false && (form1.choix2.checked) ==false && (form1.choix3.checked) ==true)
{ i +=10;};
  } 
 
function reponse2(form2) {

if((form2.choix1.checked) ==true && (form2.choix2.checked) ==false && (form2.choix3.checked) ==false)
 
       { i +=20;};
  } 

function reponse3(form3) {

if((form3.choix1.checked) ==true && (form3.choix2.checked) ==false && (form3.choix3.checked) ==false)
 
       { i +=20;};
  } 


function reponse4(form4) {

if((form4.choix1.checked) ==false && (form4.choix2.checked) ==true && (form4.choix3.checked) ==false)
 
       { i +=20;};
  } 

function reponse5(form5) {

if((form5.choix1.checked) ==false && (form5.choix2.checked) ==true && (form5.choix3.checked) ==true)
 
       { i +=20;};

     if((form5.choix1.checked) ==true && (form5.choix2.checked) ==true && (form5.choix3.checked) ==true)
 
       { i +=0;};
     if((form5.choix1.checked) ==false && (form5.choix2.checked) ==false && (form5.choix3.checked) ==true)
 
       { i +=10;};
     if((form5.choix1.checked) ==false && (form5.choix2.checked) ==true && (form5.choix3.checked) ==false)
 
       { i +=10;};
  }

function validQCM()
{
  reponse1(form1);
  reponse2(form2);
  reponse3(form3);
  reponse4(form4);
  reponse5(form5);
 

alert("Votre score est de " + i + "/100" );

}