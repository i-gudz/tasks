// Task 16 While
// let s = 10
// let p = Number(prompt('Choose p'))
// let k = 1
// let r = 10
// while (r<200) {
//     s+=s*(p/100)
//     r+=s
//     k+=1 
// }
// console.log('Number of days:', k)
// console.log('Total mileage:', r)

// Task 17 While
// let n = Number(prompt('Choose n'))
// while (n>0){
//     console.log(n%10)
//     n = Math.trunc(n/10)
// }

// Task 18 While
// let n = Number(prompt('Choose n'))
// let k = 0
// let s = 0
// let num = 0
// while (n>0){
//     num = n%10
//     n = Math.trunc(n/10)
//     k+=1
//     s+=num
// }
// console.log('Number of digits:', k)
// console.log('Sum of digits:', s)

// Task 19 While
// let n = Number(prompt('Choose n'))
// let r = 0
// while (n != 0) {
//     r = r*10+(k%10)
//     n=Math.trunc(n/10)
// }
// console.log(r)


// Task 20 While
// let n = Number(prompt('Choose n'))
// s = 1
// while (n > 0) {
//     s = n % 10
//     n = Math.trunc(n / 10)
//     if (s==2){
//         console.log('true')
//     }
// }

// Task 21 While
// let n = Number(prompt('Choose n'))
// s = 1
// while (n > 0) {
//     s = n % 10
//     n = Math.trunc(n / 10)
//     if (s%2!=0){
//         console.log('true')
//     }
// }

// Task 22 While
// let n = Number(prompt('Choose n'))
// let s = 2
// let pr = true
// while (n!=s && pr==true){
//     if (n%s!=0){
//         s++
//     }else{
//         pr = false
//     }
// }
// console.log(pr)

// Task 23 While
// let a = Number(prompt('Choose a'))
// let b = Number(prompt('Choose b'))
// while (a!=0 && b!=0){
//     if (a>b){
//         a = a%b
//     }else{
//         b=b%a
//     }
// }
// console.log(a+b)

// Task 24 While
// let n = Number(prompt('Choose n'))
// let a = 1
// let b = 1
// let c = 0
// while (c < n) {
//     c = a + b
//     a = b
//     b = c
// }
// if (c == n || n == 1) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Task 25 While
// let n = Number(prompt('Choose n'))
// let a = 1
// let b = 1
// let c = 0
// do {
//     c = a + b
//     a = b
//     b = c
// }
// while (c <= n)
// console.log(c)

// Task 26 While
// let n = Number(prompt('Choose n'))
// let a = 1
// let b = 1
// let c = 0
// do {
//     c = a + b
//     a = b
//     b = c
// }
// while (c < n)
// console.log(a, a+b)