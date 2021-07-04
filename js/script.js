
var yearH=document.getElementById('year'),
    monthH=document.getElementById('month'),
    dayH=document.getElementById('day'),
    hourH=document.getElementById('hour'),
    minuteH=document.getElementById('minute'),
    secondH=document.getElementById('second');

let input_date=document.getElementById('date');


input_date.addEventListener('change', function(){
   var selection=new Date(this.value)
   var mili= Date.parse(selection) //get date in miliseconds
   var now=Date.now() //get it in miliseconds
   
   var age_in_mili=now-mili  //get Subtraction
   //to get seconds in year
  
   var second=1000, 
       minte=second*60,
       hour=minte*60,
       day=hour*24,
       month=day*30,
       year=month*12;
    

    var years=Math.round(age_in_mili/year),
        months=years*12,
        days=months*30,
        
        hours=Math.round(age_in_mili/hour),
        minutes=Math.round(age_in_mili/minte),
        seconds=Math.round(age_in_mili/second);
        

        yearH.innerHTML=years
        monthH.innerHTML=months
        dayH.innerHTML=days
        hourH.innerHTML=hours
        minuteH.innerHTML=minutes
        secondH.innerHTML=seconds

        console.log(`y:${years} , m:${months} ,  d:${days}  ,  h:${hours}  ,  s:${seconds}`);

})