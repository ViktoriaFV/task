function f(a, b)
{ 
  if (b !== undefined)
  {return  a+b;}
  else { return  (b) => {
      return a + b;
    }
}
}


console.log(f(2)(3)) ;

