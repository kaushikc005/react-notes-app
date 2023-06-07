export const useNoteDate=()=> {
   const dateObj=new Date()
   const month=dateObj.toLocaleString('en-US',{month:"short"})
   const hours=dateObj.getHours()
   const minutes=dateObj.getMinutes()

   const time=hours>12?(`${Math.round(hours%12)}:${minutes<10?`0${minutes}`:minutes} PM`):hours==12?`${hours}:${minutes<10?`0${minutes}`:minutes} PM`:`${hours}:${minutes<10?`0${minutes}`:minutes} AM`
   
   return `${month} ${dateObj.getDate()} ${dateObj.getFullYear()} ${time}`
} 