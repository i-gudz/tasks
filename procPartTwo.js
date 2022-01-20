// Task 24 Proc
// const even = (k) =>{
//     if (k%2==0){
//         return console.log(true)
//     }else{
//         return console.log(false)
//     }
// }

// let a
// for(let i = 0; i<10; i++){
//     a = Number(prompt('Choose a'))
//     even(a)
// }

// Task 25 Proc
// const isSquare = (k) =>{
//     if(k>0){
//         if(k == Math.sqrt(k)**2){
//             return console.log(true)
//         } else{
//             return console.log(false)
//         }
//     }
// }
// let a
// for(let i = 0; i<10; i++){
//     a = Number(prompt('Choose a'))
//     isSquare(a)
// }

// Task 26 Proc
// const isPower5 = (k) => {
//     if (k > 0) {
//         log5 = Math.round( Math.log(k)/Math.log(5))
//         if (k == 5 ** log5) {
//             return console.log(true)
//         } else { 
//             return console.log(false)
//         }
//     }
// }

// for (let i = 0; i < 10; i++) {
//     a = Number(prompt('Choose a'))
//     isPower5(a)
// }

// Task 27 Proc
// const isPowerN = (k,n) =>{
//         if (k > 0) {
//         log = Math.round( Math.log(k)/Math.log(n))
//         if (k == n ** log) {
//             return console.log(true)
//         } else { 
//             return console.log(false)
//         }
//     }
// }
// let n = Number(prompt('Choose n'))
// for (let i = 0; i < 10; i++) {
//     a = Number(prompt('Choose a'))
//     isPowerN(a, n)
// }

// Task 28 Proc
// const isPrime = (n) => {
//     if (n % 2 == 0 && n > 2) {
//         return false
//     }
//     for (let i = 3; i < Math.round(Number(Math.sqrt(n)) + 1); i += 2) {
//         if (n % i == 0) {
//             return false
//         }
//     }
//     return true
// }

// let counter = 0
// for (let i = 0; i < 10; i++) {
//     a = Number(prompt('Choose a'))
//     counter += Number(isPrime(a))
//     console.log(a+":"+isPrime(a))
// }

// console.log(counter)

// Task 29 Proc
// const digitCount = (k) =>{
//     let num,
//         s = 0
//     while (k>0){
//         num = k%10
//         k = Math.trunc(k/10)
//         s+=1
//     }
//     return s
// }
// for (let i = 0; i < 5; i++) {
//     a = Number(prompt('Choose a'))
//     console.log(a+":"+digitCount(a))
// }

// Task 30 Proc
// const digitN = (k, n) => {
//     let res, resItem
//     array = ("" + k).split("").map(Number)
//     array.forEach(function (item, i) {
//         if(i+1 == n){
//             res = true
//             resItem = item
//         }
//     });
//     if(res == true){
//         return resItem
//     } else{
//         return -1
//     }
// }
// for (let i = 1; i < 6; i++) {
// a = Number(prompt('Choose a'))
// console.log(a + ":" + i + ":" + digitN(a, i))
// }

// Task 31 Proc
// const isPalindrom = (k) => {
//     let arr = ("" + k).split("").map(Number),
//         arrReverse = arr.concat([])
//     arrReverse.reverse()
//     let arrLen = arr.length,
//         counter = 0
//     console.log(arrReverse)
//     if (arrLen < 2) {
//         return console.log(true)
//     }
//     if (k < 0 || Number.isInteger(k) == false) {
//         return console.log(false)
//     }
//     for (let i = 0; i < arrLen; i++) {
//         if (arr[i] == arrReverse[i]) {
//             counter++
//         }
//         if (counter == arrLen) {
//             return console.log(true)
//         }
//     }
//     return console.log(false)
// }
// for (let i = 1; i <= 10; i++) {
//     a = Number(prompt('Choose a'))
//     isPalindrom(a)
// }

// Task 32 Proc
// const degToRad = (d) =>{
//     let pi = (Math.PI).toFixed(2)
//     if(0<d<360){
//         d = (d*pi)/180
//         return console.log(d.toFixed(2))
//     }
//     return console.log('Out of range')
// }
// for (let i = 1; i <= 5; i++) {
//     a = Number(prompt('Choose a'))
//     degToRad(a)
// }

// Task 33 Proc
// const radToDeg = (r) =>{
//     let pi = (Math.PI).toFixed(2)
//     if(0<r<2*pi){
//         r = (r*180)/pi
//         return console.log(r.toFixed(2)) 
//     }
//     return console.log('Out of range')
// }
// for (let i = 1; i <= 5; i++) {
//     a = Number(prompt('Choose a'))
//     radToDeg(a)
// }

// Task 34 Proc
// const fact = (n) =>{
//     let f = 1
//     if(n>0){
//         for(let i = 1; i<=n;i++){
//             f*=i
//         }
//     }
//     return console.log(f)
// }

// for (let i = 1; i <= 5; i++) {
//     a = Number(prompt('Choose a'))
//     fact(a)
// }

