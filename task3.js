var arr = [
    {name: 'width', value: 10}, 
    {name: 'height', value: 20}
   ];

   function Result(arr)
{
    const result = {};
    for (let element of arr)
    {
        result[element.name] = element.value;
    }

    return result;

}

console.log(Result(arr))