let oz = [8,12,16,20,24,32];
let sizes = ["xs","s","m","l",'xl'];
let prices = [4.99,9.99,19.99,49.99];
let speeds = [93,99,95,96,97,99];
let pings = [45,60,120,80,155,160,220,110];
let bits = [1,1,0,1,0,0,1,0,0,1];

function example1(list){
let limit = 20;
let small = [];
for(let s = 0; s < list.length; s++){
      if(list[s] <= limit){
            small.push(list[s])
      }
}
return small;
}

function example2(list){
    let total=0;
    for(let b=0;b<list.length;b++){
        total = total+ list[b];
        //new = old + current #
    }
    return total;
}

function example3(list){
let average = 0;
for(let a = 0; a < list.length; a++){
      average = average + list[a];
}
      return average/list.length;
}

function example4(list){
for(let h = 0; h < list.length; h++){
      if(list[h] > 95){
            return h;
      }
}
}

//Creating test code
function main(){
    console.log(example1(oz));
    console.log("The total # of bits is "+example2(bits));
    console.log("Your average ping for internet is "+example3(pings));
    console.log("The first pitch thrown above 95 was pitch-index "+example4(speeds));
}
//run test code with CTRL + SHIFT + B
main();
