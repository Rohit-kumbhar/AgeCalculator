/*var mydate = new Date();
var y = mydate.getFullYear();
document.write(y);*/
var date = new Date();
var y;
var m1;
var cd = parseInt(date.getDate());
function cal()
{
    y = parseInt(date.getFullYear()) - parseInt(document.getElementById("year").value) - 1;  
    var m = parseInt(get_num(document.getElementById("month").value));
    m1 = 12 - m + parseInt(date.getMonth());
    var d = document.getElementById("day").value;
    if( validate() != 0)
    {
    
        var d1 = parseInt(caldays(d,m)) - 1;
        checkmonth(m1);
        d_hour = date.getHours();
        d_min = date.getMinutes();
        d_sec = date.getSeconds();
        d_mili_sec = date.getMilliseconds();
        if(d1 < 0)
        {
            y--;
            m1 = m1 + 11;
            if(m1 > 12)
            {
                justify_month();
            }
            d1 = 30 + d1;
        }
        
        document.getElementById("result").innerHTML  = (' YEARS : '+ y +', MONTHS : '+ m1 +', DAYS : '+ d1 + ', HOURS : ' + d_hour + ', MINUTES: ' + d_min + ', SECONDS: ' + d_sec +', MILISECONDS ' + d_mili_sec);
    }
}

function justify_month()
{
    while(m1 > 12)
    {
        m1 = m1 - 12;
        y++;
    }
}




function check_void()
{

    if( document.getElementById("day").value == "" || document.getElementById("month").value == "" ||document.getElementById("year").value == "" ){
        alert('Firt enter values');
        return 0;
    }
}









function refresh(){
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";
    document.getElementById("result").innerHTML = "";
}



function validate(){
    var c_year = parseInt(date.getFullYear());
    var b_year = parseInt(document.getElementById("year").value);
    var c_date = parseInt(date.getDate());
    var b_date = document.getElementById("day").value;
    var c_month = parseInt(date.getMonth()) + 1;
    var b_month = parseInt(get_num(document.getElementById("month").value));

    if( document.getElementById("day").value == "" || document.getElementById("month").value == "" ||document.getElementById("year").value == "" ){
        alert('First enter all values');
        return 0;
    }




    else if(b_year < 1)
    {
      alert('you entered a wroung year');
      return 0;
    }


    else if(b_year > c_year){
        alert("your birth year is bigger than that of current year as per your computer");
        return 0;
    }
   else if(check_day(b_date,b_month) == 0)
    {
      alert('you entered a wroung date');
      return 0;
    }
    else if(c_month == b_month && c_date == b_date)
    {
        alert('Happy Birthday');
    }
    else if(b_year == c_year && b_month > c_month)
    {
        alert("you entered a date bigger than current date");
        return 0;
    }
    else if(b_year == c_year && b_month == c_month && b_date > c_date)
    {
        alert("you entered a date bigger than current date");
        return 0;
    }
    else if(b_year == c_year && b_month == c_month && b_date == c_date)
    {
        alert("you born today!!!");
        return 0;
    }
}

function check_day(day1,ma){


    var x;
    if(ma == 2)
    {
        if(leapyear(parseInt(document.getElementById("year").value)) == true)
        {
            x = 29;
        }
        else
        {
            x = 28;
        }
    }
    else if(ma == 1 || ma == 3||ma == 5||ma == 7 || ma == 8 || ma == 10 || ma == 12)
    {
        x = 31;
    }
    else
    {
        x = 30;
    }
    if(day1 > x || day1 < 1)
    {
      return 0;
    }
    return 1;
}










function checkmonth(m2)
{
    while(m2 >= 12)
    {
        m2 = m2 - 12;
        y++;
    }
    m1 = m2;
}
function caldays(da,ma)
{
    var x;
    if(ma == 2)
    {
        if(leapyear(parseInt(document.getElementById("year").value)) == true)
        {
            x = 29;
        }
        else
        {
            x = 28;
        }
    }
    else if(ma == 1 || ma == 3||ma == 5||ma == 7 || ma == 8 || ma == 10 || ma == 12)
    {
        x = 31;
    }
    else
    {
        x = 30;
    }
    var z = x - da + cd;
    x = z;
    while(x >= 30)
    {
        x = x - 30;
        m1++;
    }
    return x;
}

function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

/*January - 31 days
      February - 28 days in a common year and 29 days in leap years
      March - 31 days
      April - 30 days
      May - 31 days
      June - 30 days
      July - 31 days
      August - 31 days
      September - 30 days
      October - 31 days
      November - 30 days
      December - 31 days*/





function get_num(mon)
{
    if(mon == 'January'){
        return 1;
    }
    else if(mon == 'February'){
        return 2;
    }
    else if(mon == 'March'){
        return 3;
    }
    else if(mon == 'April'){
        return 4;
    }
    else if(mon == 'May'){
        return 5;
    }
    else if(mon == 'June'){
        return 6;
    }
    else if(mon == 'July'){
        return 7;
    }
    else if(mon == 'August'){
        return 8;
    }
    else if(mon == 'September'){
        return 9;
    }
    else if(mon == 'October'){
        return 10;
    }
    else if(mon == 'November'){
        return 11;
    }
    else if(mon == 'December'){
        return 12;
    }
}

/*January - 31 days
      February - 28 days in a common year and 29 days in leap years
      March - 31 days
      April - 30 days
      May - 31 days
      June - 30 days
      July - 31 days
      August - 31 days
      September - 30 days
      October - 31 days
      November - 30 days
      December - 31 days*/
































/*var date = new Date();
function display()
{
    birth_year = parseInt(document.getElementById("year").value);
    birth_month = get_month_digit(document.getElementById("month").value);
    birth_day = document.getElementById("day").value;
    get_month_digit();





    var y = parseInt(date.getFullYear()) - parseInt(document.getElementById("year").value) - 1;

    var m = (parseInt(date.getMonth()) ) + (12 - parseInt(document.getElementById("month").value));

    var d = parseInt(date.getDay()) + parseInt(document.getElementById("day").value);
}

 function get_month_digit(){
    var v = document.getElementById("month");
    console.log(v);
      /*January - 31 days
      February - 28 days in a common year and 29 days in leap years
      March - 31 days
      April - 30 days
      May - 31 days
      June - 30 days
      July - 31 days
      August - 31 days
      September - 30 days
      October - 31 days
      November - 30 days
      December - 31 days
 }*/
