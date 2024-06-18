// $(document).ready(function () {
//     $("h1").css("color","red");
   
    
//     document.querySelector("button").addEventListener("click",function(){
//         var otp =Math.floor(Math.random()*1000000); 
//         alert("Note your otp :"+ otp);
//     });
// });

// $("button",addEventListener("click",function(){var otp = Math.floor(Math.random()*1000000);
//      alert(otp);
// }));


// $("h1").addClass("display margin-50");
// $("h1").removeClass("margin-50");

// $("h1").text("welcome");
// $("button").html("<em>click me <em>");

// $("a").attr("href","https://www.udemy.com");

// $("h1").click(function(){
//    $("h1").css("color","purple");
// });

// for (var i=0 ; i<=5 ;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="red";
//     });
// }

// $(document).keypress(function(event){
//       console.log(event.key);
// });
// $(document).keypress(function(event) {
//     $("h1").text(event.key);
// });
// $("h1").on("mouseover",function(){
//     $("h1").css("color","purple");
// });
 
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({margin:"20"}).animate({opacity:0.5});
});