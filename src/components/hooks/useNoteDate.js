export const useNoteDate=()=> {
   const d=Date()
   const date=JSON.stringify(d).slice(1,JSON.stringify(d).length-40)
   console.log(date)
   return date
 
} 