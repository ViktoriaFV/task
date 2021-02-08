
function isAdult() {
  //moveZeros([false,1,0,1,2,0,1,3,"a"])
 const a = [false,1,0,1,2,0,1,3,"a"];
 for (let i = 0; i < a.length;  i += 1)
 {
   if (a[i] === 0)
   {a.push(a[i])
    a.splice(i, 1);
    
        }
 } 
  return a;



  }
 
console.log(isAdult());
