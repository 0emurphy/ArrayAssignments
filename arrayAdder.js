let array1 = [1,2,3,4,5,];
let array2 = [10, 20, 30, 40, 50];
let array3 = [];
let array4 = [];
let array42 = [];

for(let a = 0; a < array1.length; a++){
  array3[a] = (array1[a] + array2[a]);
}

for(let b = 0; b < array1.length; b++){
  array4.push(array1[b]);
}

for(let c = 0; c < array2.length; c++){
  array4.push(array2[c]);
}
for(let a=0;a<5;a++){
  array42[a]= array1[a];
  array42[a+5] = array2[a];
}

console.log(array3);
console.log(array4);
console.log(array42);
