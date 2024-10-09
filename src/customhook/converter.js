// import moment from 'moment-timezone';



const dateToString = (date) => {
  let stringDay=null;
   
    if(date===undefined || date===null||date==="0001-01-01T00:00:00")
    {
        return '-------------------';
    }  
       const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      //const months = ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        const dateF = new Date(date);
        const year = dateF.getFullYear(),
            month = dateF.getMonth() + 1, // months are zero indexed
            day = dateF.getDate();
       stringDay = day.toString();
        if (day < 10) {
            stringDay = '0' + stringDay;
        }
        return  stringDay + "-" + months[month] + "-" + year;
  };
 
const formatToDk = (number) => {
    const formatter = new Intl.NumberFormat('da-DK', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(number);
  };
  const dateTimeToString = (date) => {
    if (date === undefined || date === null) {
        return '-------------------';
    }
    const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //const months = ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // months are zero indexed
    const day = dateObj.getDate();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();

    const stringDay = (day < 10) ? '0' + day : day;
    const stringMonth = (month < 10) ? '0' + month : month;
    const stringHours = (hours < 10) ? '0' + hours : hours;
    const stringMinutes = (minutes < 10) ? '0' + minutes : minutes;

    return `${stringDay}-${months[month]}-${year} ${stringHours}:${stringMinutes}`;
}

const getBrowserTimeZone=()=>{
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return timeZone;
}


  export { dateToString, formatToDk,dateTimeToString,getBrowserTimeZone};