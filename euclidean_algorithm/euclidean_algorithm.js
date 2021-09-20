let x0 = 14803;
let x1 = 12707;
let x2 = x0 % x1

while(x2 > 0){
  x0 = x1
  x1 = x2
  x2 = x0 % x1
}

console.log(x1)