Number.prototype.plus = function(num) {
    return this + num;
};
Number.prototype.minus = function(num){
  return this - num;
}
console.log((2).plus(3).minus(1))