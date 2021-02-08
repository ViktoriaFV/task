//('кот', 'ток', 'окт')

function result(wordOne, wordTwo, wordThree){
    const wordOneSort = wordOne.split('');
    const wordTwoSort = wordTwo.split('');
    const wordThreeSort = wordThree.split('');
    const array = [];
    let resul = 0;
   for (let i = 0; i < wordOneSort.length;  i +=1)
   {
        
      if (wordTwoSort.includes(wordOneSort[i])&& wordThreeSort.includes(wordOneSort[i]))
      
      {array.push(wordOneSort[i])}
      
   } 

  
    
   resul = wordOneSort.length == array.length ? 'состоят они из одних и тех же букв' : 'состоят они из разних букв';
     return resul;
    
 }
result('кот', 'кот', 'окт');
console.log(result('кот', 'кот', 'окт'));