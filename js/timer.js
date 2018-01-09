
(()=>{

  let seconds = 0;
  let minutes=0;
  let hours=0;
  let days=0;
  let seconds_H1 = document.getElementById('secondsIndicator');
  let minutes_H1 = document.getElementById('minutesIndicator');
  let hours_H1 = document.getElementById('hoursIndicator');
  let days_H1 = document.getElementById('daysIndicator');


    //Interval for every second
    setInterval(()=>{
      //seconds increased
      seconds++;
      if(seconds<60){
        if(validateLength(seconds+'')){
          seconds_H1.innerHTML = '0'+seconds;
        }else{
          seconds_H1.innerHTML = seconds;
        }
      }else{
        seconds=0;
        seconds_H1.innerHTML = '0'+seconds;
        //seconds -> ends
        //minutes increased
        minutes++;
        if(minutes<60){
          if(validateLength(minutes+'')){
            minutes_H1.innerHTML = '0'+minutes;
          }else{
            minutes_H1.innerHTML = minutes;
          }
        }else{
          minutes = 0;
          minutes_H1.innerHTML = '0'+minutes;
          //minutes -> ends
          //hours increased
          hours++;
          if(hours<24){
            if(validateLength(hours+'')){
              hours_H1.innerHTML = '0'+hours;
            }else{
              hours_H1.innerHTML = hours;
            }
          }else{
            hours = 0;
            hours_H1.innerHTML = '0'+hours;
            //hours -> ends
            //days increased
            days++;
            days_H1.innerHTML = days;
          }
        }

      }



    },1000);
//time value


  function validateLength(value){
    return value.length<2?true:false;
  }

})();
