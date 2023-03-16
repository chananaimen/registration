 

function convertFromDDToDms(dd)
 {
  // var dir;
  //   if(dd<0)
  //   {
  //     if(isLng)
  //     {
  //       dir='W';
  //     }
  //     else
  //     {
  //       dir='S'
  //     }
  //   }
  //   else
  //   {
  //     if(isLng)
  //     {
  //       dir='E';
  //     }
  //     else
  //     {
  //       dir='N'
  //     }
  //   }

   var absDd = Math.abs(dd);
   var deg = Math.floor(absDd);
   var temp = absDd - deg;
  if(temp!=0)
  {
     temp=temp*60;
     var min = Math.floor(temp) ;
     var sec = temp - min ;
  if(sec!=0)
    {
      sec =(Math.floor(Math.round(sec * 6000)))/100;
     return deg + " degrees " + min + " minutes " + sec + ' second ';
    }
     return  deg + " degrees " + min + " minutes " ;
  }
  return  deg + " degrees " ;
 }

console.log(convertFromDDToDms(34.0522));
 
 
