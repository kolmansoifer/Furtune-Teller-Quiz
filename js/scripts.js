$(document).ready(function() {
  $("form#fortune").submit(function(event) {
    event.preventDefault();

    let arrayLucky = [];
    let arrayUnlucky = [];

    $("input:checkbox[name=lucky]:checked").each(function(){
      const lucky = $(this).val();
      arrayLucky.push(lucky);
    });
    $("input:checkbox[name=unlucky]:checked").each(function(){
      const unlucky = $(this).val();
      arrayUnlucky.push(unlucky);    
    });
    function fortune(arrayLucky, arrayUnlucky){
      let fortune;
      if (arrayLucky.length >= 3 && arrayUnlucky.length <= 3) {
        fortune = "Woohoo!  Nice to see things have gone your way recently.  Go out and buy a lottery ticket today!"
      } else if (lucky.length <= 3 && unlucky.length >= 3) {
        fortune = "Yikes!  You've had some recent bad luck.  Please be careful this next week."
      } else {
        fortune = "Whew!  Things have been about average for you, luckwise...  Have a great week and watch out for black cats!"
      }
    return fortune; 
    }

    let newFortune =(arrayLucky, arrayUnlucky);
    $(fortune).text(newFortune);
  });
})