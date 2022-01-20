// Task 6 Proc
// const digitCountSum = (k,c,s)=>{
//     c = 0
//     s = 0
//     while(k!=0){
//         s+=k%10
//         c+=1
//         k = Math.trunc(k/10)
//     }
//     console.log('S =' + s + '\n' +
//     'C =' + c)
// }

// for (let i = 0; i<5; i++){
//     let k = Number(prompt('Choose k'))
//     console.log(k)
//     digitCountSum(k)
// }

// Task 7 Proc
// const invDigits = (k) => {
//     r = 0
//     while (k != 0) {
//         r = r*10+(k%10)
//         k=Math.trunc(k/10)
//     }
//     k=r
//     console.log('K = ',k)
// }

// for(let i = 0; i<5; i++){
//     k = Number(prompt('Choose k'))
//     console.log(k)
//     invDigits(k)
// }

// Task 8 Proc
// const addRightDigit = (d)=>{
//     if (d<0 || d>9){
//         console.log('D out of range')
//     } else {
//         k = k*10+d
//         console.log('K = ', k)
//     } 
// }

// let k = Number(prompt('Choose k'))
// console.log('K = ', k)

// let d1 = Number(prompt('Choose d1'))
// addRightDigit(d1)
// let d2 = Number(prompt('Choose d2'))
// addRightDigit(d2)

// Task 9 Proc
// const addLeftDigit = (d)=>{
//     c = 10
//     while(Math.trunc(k/c)!=0){
//         c*=10
//     }
//     if (d<0 || d>9){
//         console.log('D out of range')
//     } else {
//         k = d*c+k
//         console.log('K = ', k)
//     } 
// }
// let k = Number(prompt('Choose k'))
// console.log('K = ', k)
// let d1 = Number(prompt('Choose d1'))
// addLeftDigit(d1)
// let d2 = Number(prompt('Choose d2'))
// addLeftDigit(d2)

// Task 10 Proc
// const swap = (x, y)=> {
//     return [y, x]
// }

// let a = Number(prompt('Choose a'))
// let b = Number(prompt('Choose b'))
// let c = Number(prompt('Choose c'))
// let d = Number(prompt('Choose d'))

// [a, b] = swap(a, b)
// [c, d] = swap(c, d)
// [b, c] = swap(b, c)

// console.log(a, b, c, d)

// Task 11 Proc
// let a = 20
// let b = 10
// let c = 5
// let d = 6
// console.log(a, b, c, d)
// const minMax = (x, y) => {
//   if(x>y){
//             return [y, x]
//   }
//     }
//     [a, b] = minMax(a, b);
//     [c, d] = minMax(c, d);
//     [a, c] = minMax(a, c);
//     [b, d] = minMax(b, d);
// console.log('min = ', a, 'max = ', d)

// Task 12 Proc
// const sortInc = (a,b,c) =>{
//     console.log(a,b,c)
//     if(a>b){
//         d=a
//         a=b
//         b=d
//     } 
//     if(a>c){
//         d=a
//         a=c
//         c=d
//     }
//     if(b>c){
//         d=b
//         b=c
//         c=d
//     }
//     console.log(a,b,c)
// }

// let a = Number(prompt('Choose a')),
//     b = Number(prompt('Choose b')),
//     c = Number(prompt('Choose c'))
// sortInc(a,b,c)
// let a1 = Number(prompt('Choose a1')),
//     b1 = Number(prompt('Choose b1')),
//     c1 = Number(prompt('Choose c1'))
// sortInc(a1,b1,c1)
// let a2 = Number(prompt('Choose a2')),
//     b2 = Number(prompt('Choose b2')),
//     c2 = Number(prompt('Choose c2'))
// sortInc(a2,b2,c2)