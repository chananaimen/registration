
function convertFromDDToDms(dd, isLng) {

   let dir;

   if (dd < 0) {
      if (isLng) {
         dir = 'W';
      }
      else {
         dir = 'S';
      }
   }
   else {
      if (isLng) {
         dir = 'E';
      }
      else {
         dir = 'N';
      }
   }

   const absDd = Math.abs(dd);
   let deg = Math.floor(absDd);
   let temp = absDd - deg;

   if (temp != 0) {
      temp = temp * 60;
      let min = Math.floor(temp);
      let sec = temp - min;

      if (sec != 0) {
         sec = (Math.floor(Math.round(sec * 6000))) / 100;
         return `${deg} degrees ${min} minutes ${sec} second ${dir} directional`;
      }
      return `${deg} degrees ${min} minutes ${dir} directional`;
   }
   return `${deg} degrees ${dir} directional`;
}
