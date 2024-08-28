  
//header
$("#openBtn").click(() => {
    if ($(".menu-left").css("left") === "-260px") {
      $(".menu-left").css({ left: 0 });
    } else {
      $(".menu-left").css({ left: -260 });
    }
  });
  
  $(".fa-close").click(function () {
    $(".menu-left").css({ left: -260 });
  });
  



  let end = '2025-1-1'
  let endDate =new Date(end).getTime()
 
 let countdownInterval = setInterval(function () {
     let currentTime = new Date().getTime();
     let timeRemaining = endDate - currentTime;
     if (timeRemaining < 0) {
       clearInterval(countdownInterval);
       
       $('#complete').text("Countdown complete!")
       return;
     }
 
     let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
     let hours = Math.floor(
       (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
     );
     let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
     let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
 
   
     $("#seconds").text(seconds + ' sec') ;
     $("#minutes").text(minutes + ' min') ;
     $("#hours").text(hours + ' hour') ;
     $("#days").text(days + ' day') ;
    
   }, 1000);







   
  









// cordinates
  $(".toggle").click(function(){
    $(this).next() .slideToggle(500)
    // $(".slider-down p").not($(this)).next().slideUP();
  })

// character limited

$("textarea").keyup(function(){
   let mylength =$(this).val().length;
  $("#chars").text(

100-mylength  <=0?  "your available character finished" : 100-mylength


  )
})