function calculate(){
    let year;
    let month;
    let day;
   let currday = parseInt(cd.value.slice(8,10),10); // base 10 me karega last wala 10
   let currmonth = parseInt(cd.value.slice(5,7),10);
   let curryear = parseInt(cd.value.slice(0,4),10);
   console.log('current date :- ',curryear,currmonth,currday);

   let birthday = parseInt(dob.value.slice(8,10),10); // base 10 me karega last wala 10
   let birthmonth = parseInt(dob.value.slice(5,7),10);
   let birthyear = parseInt(dob.value.slice(0,4),10);
   console.log('birth date :- ',birthyear,birthmonth,birthday);

   if(currday>=birthday){
        day = currday-birthday;

}
else{
     day = currday + new Date(curryear,currmonth).getDate()-birthday;
     currmonth--;
}
if(currmonth>=birthmonth){
    month = currmonth - birthmonth;
}else{
     month = currmonth + 12 - birthmonth
  
    curryear--;
}
year = curryear-birthyear;
if(year<0){
    agetext.innerHTML = "Age not defined";
}
else{
    agetext.innerHTML = year + "years," + month + "months," + day + "days";}
     
}