const todayDate = new Date();
console.log(todayDate.toLocaleString());
console.log(todayDate.toDateString());
console.log(todayDate.toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}));

console.log(Date.now());
console.log(todayDate.toISOString());

console.log(Date.parse('12 April, 2024'));

const randomDate = new Date(2024, 1, 14, 20, 45, 50);
console.log(`Valentines  day : ${randomDate.toDateString()}`)
console.log(`Valentines  day : ${randomDate.toLocaleDateString()}`)

console.log(randomDate.toTimeString());
//getter and setter methods 
function getDate(date= new Date()) {
    const newDate = new Date();
    return `NEW date : ${date.getMonth()}/${date.getDate()}/${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
console.log(getDate(new Date('12 Feburary, 2024')));


///formate date

function formatDate(dateObj = new Date(), str = 'DD, d-MM-YYYY at hh:mm:ss') {
 const [day, month, date, year] = dateObj.toDateString().split(' ');
 const [hour, min, ...rest] = dateObj.toTimeString().split(':');
 const [sec] = rest[0].split(/\s/);
 return formattedDate = str 
         .replace('d', day)
         .replace('DD', date)
         .replace('MM', month)      
         .replace('YYYY', year)
         .replace('hh', hour)
         .replace('mm', min)
         .replace('ss', sec)       
}

console.log(formatDate());

const now = new Date();

function addDays(dateObj =new Date(), day =0) {
     const daysToms = day * 864_000_00;
     return new Date(dateObj.getTime() + daysToms)
}

console.log(`Days  : ${addDays(now, 5)}`)
