//common([1,2,3],[5,3,2],[7,3,2]) = 5 common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7

// function  summ() {
//     arrayA = [1,2,3];
//     arrayB = [5,3,2];
//     arrayC = [7,3,2];
    
//     const allnumber = arrayA.concat(arrayB);
//     const allnumbers = allnumber.concat(arrayC);
//     console.log(allnumbers);
//     const filterNum = allnumbers.filter((number, index, array) => array.indexOf(number) === index);
//     console.log(filterNum);
     
//     const summ = allnumbers.reduce((acc, value) => acc + value, 0);
//     let summN = filterNum.reduce((acc, value) => acc + value, 0);

//     let sum = (summ - summN)/2;
     
//     console.log(sum);
//  }
  
 
//   summ();
function  summ() {
    arrayA = [1,2,2,3];
    arrayB = [5,3,2,2];
    arrayC = [7,3,2,2];
    let sum = [];

    // const allnumber = arrayA.concat(arrayB);
    // const allnumbers = allnumber.concat(arrayC);
    // console.log(allnumbers);
    // const filterNum = allnumbers.filter((number, index, array) => array.indexOf(number) === index);
    // console.log(filterNum);

    for (let i = 0; i < arrayA.length;  i +=1)
     {
          
        if (arrayB.includes(arrayA[i])&& arrayC.includes(arrayA[i]))
        
        {sum.push(arrayA[i])}
        
     } 
    const summ = sum.reduce((acc, value) => acc + value, 0);
    return summ;
    // let summN = filterNum.reduce((acc, value) => acc + value, 0);

    // let sum = (summ - summN)/2;
     
   
 }  
  console.log( summ());
 
  summ();

    


  