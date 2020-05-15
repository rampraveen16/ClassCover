export const getDateArray =(start, end) => {
    let 
      arr = [],
      dt = new Date(start);
  
    while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    
    return arr;
  
  }

  export const updateStaus = (value,id,date,mentor) => {
    let temp = mentor.map((ele)=>{
      if(ele.id===parseInt(id)) {
         let test =  ele.avalible.map((d)=>{
              if(d.date=== date) {
                  d.status = value
                 return d
              }
              return d
              
          })
          ele.avalible = test
          return ele
      }
      return ele
  })
   return temp
  }
