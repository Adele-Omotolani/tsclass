let user = "tolani"

console.log(user);

let food: string = "Rice and Beans"
console.log(food);

let score: number = 10
console.log(score); 

let strArray: string[] = ["english","maths","biology"]
console.log(strArray);

let NumArray: number[] = [1,2,3];
console.log(NumArray);

let com:Array< String | Number > = [1,2,3,"tolani","olamide","tayo",]
//reassigning
com = ["ife",40]
console.log(com);
// let combine: [string, string, string, number, number] = ["tolani","olamide", "tayo",1, 2];
// console.log(combine);

// let change: [string | string | string | number | number] = ["tolani","olamide", "tayo",1, 2];
// console.log(change);


function mul(a:number, b:number): number {
    return a * b
}console.log(mul(2,3));




export {}