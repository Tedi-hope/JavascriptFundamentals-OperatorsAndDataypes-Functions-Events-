function getTime()
{
  var timeNow=new Date();

  //Get hours, minutes, and seconds
  var hours=timeNow.getHours();
  var minutes=timeNow.getMinutes();
  var seconds=timeNow.getSeconds();

  //Determine AM or PM suffix
  var ampm;
  if (hours >=12)
  {
   ampm='PM';
  }
  else{
    ampm='AM';
  }

  //Convert 24-hour time to 12-hour time
  hours=hours%12;
  if (hours==0)
  {
    hours=12;// Setting hour to 12 if it is 0
  }

  //Format the time string
  var timestr=hours+':'+minutes+':'+seconds+' '+ampm;
  return timestr;
}

console.log(getTime());